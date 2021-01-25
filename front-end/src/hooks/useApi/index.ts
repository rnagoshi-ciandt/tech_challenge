import { useState, useEffect, useReducer, Dispatch } from 'react';
import axios, { AxiosRequestConfig, AxiosTransformer } from 'axios';
import { concat, isEqual } from 'lodash';
import { usePrevious } from '../usePrevious';

type ApiAction<T> =
  | { type: 'FETCH_INIT' }
  | { type: 'FETCH_SUCCESS'; payload: T }
  | { type: 'FETCH_ERROR' };

interface UseApiSettings<T> extends AxiosRequestConfig {
  initialData?: T;
  onSuccess?: Dispatch<T>;
  onError?: () => void;
}

interface UseApiResponse<T> {
  isLoading: boolean;
  isError: boolean;
  data?: T;
  setUrl?: Dispatch<string>;
  setParams?: Dispatch<unknown>;
}

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const endpointURL =
  'https://kagbz0z1dg.execute-api.sa-east-1.amazonaws.com/Prod';

function dataFetchReducer<T>(
  state: UseApiResponse<T>,
  action: ApiAction<T>,
): UseApiResponse<T> {
  switch (action.type) {
    case 'FETCH_INIT':
      return { ...state, isLoading: true, isError: false };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
}

function useApi<T>(
  url: string,
  settings?: UseApiSettings<T>,
): UseApiResponse<T> {
  const { transformResponse, onSuccess, onError, data, params, initialData } =
    settings || {};

  const [internalUrl, setInternalUrl] = useState(url);
  const [internalParams, setInternalParams] = useState(params);
  const previousParams = usePrevious(params);
  const [internalData, setInternalData] = useState(data);
  const previousData = usePrevious(data);

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });

  useEffect(() => {
    setInternalUrl(url);
  }, [url]);

  useEffect(() => {
    if (!isEqual(data, previousData)) {
      setInternalData(data);
    }
  }, [data, previousData]);

  useEffect(() => {
    if (!isEqual(params, previousParams)) {
      setInternalParams(params);
    }
  }, [params, previousParams]);

  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });
      try {
        const result = await axios({
          ...config,
          ...settings,
          params: internalParams,
          data: internalData,
          url: internalUrl,
          baseURL: endpointURL,
          transformResponse:
            transformResponse &&
            (concat(
              axios.defaults.transformResponse,
              transformResponse,
            ) as AxiosTransformer[]),
        });

        if (!didCancel) {
          dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
          if (onSuccess) {
            onSuccess(result.data);
          }
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: 'FETCH_ERROR' });
          if (onError) {
            onError();
          }
        }
      }
    };

    fetchData();

    return () => {
      didCancel = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endpointURL, internalUrl, internalData, internalParams]);

  return { ...(state as UseApiResponse<T>) };
}

export default useApi;
