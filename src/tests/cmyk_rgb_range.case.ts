export const testCases = [
  {
    value: { c: 100, m: 0, y: 0, k: 0 },
    expect: 'rgb(0,255,255)',
  },
  {
    value: { c: 0, m: 100, y: 0, k: 0 },
    expect: 'rgb(255,0,255)',
  },
  {
    value: { c: 0, m: 0, y: 100, k: 0 },
    expect: 'rgb(255,255,0)',
  },
  {
    value: { c: 0, m: 100, y: 100, k: 0 },
    expect: 'rgb(255,0,0)',
  },
  {
    value: { c: 100, m: 0, y: 100, k: 0 },
    expect: 'rgb(0,255,0)',
  },
  {
    value: { c: 100, m: 100, y: 0, k: 0 },
    expect: 'rgb(0,0,255)',
  },
  {
    value: { c: 0, m: 0, y: 0, k: 0 },
    expect: 'rgb(255,255,255)',
  },
  {
    value: { c: 0, m: 0, y: 0, k: 100 },
    expect: 'rgb(0,0,0)',
  },
];
