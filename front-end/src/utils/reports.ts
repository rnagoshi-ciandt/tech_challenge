interface ReportAttribute {
  name: string;
  label: string;
  path: string;
}

export const Reports: Array<ReportAttribute> = [
  {
    name: 'songsReport',
    label: 'Songs Report',
    path: '/songsReport',
  },
];
