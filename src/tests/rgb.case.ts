export const testCases = [
  {
    value: { r: 0, g: 0, b: 0, a: 0 },
    expect: {
      rgb: 'rgba(0,0,0,0)',
      hex: '#000000ff',
      hsl: 'hsl(0, 0%, 0% / 0)',
      cmyk: '0 0 0 100 0',
    },
  },
  {
    value: { r: 0, g: 0, b: 0, a: 0.5 },
    expect: {
      rgb: 'rgba(0,0,0,0.5)',
      hex: '#0000007f',
      hsl: 'hsl(0, 0%, 0% / 0.5)',
      cmyk: '0 0 0 100 0.5',
    },
  },
  {
    value: { r: 255, g: 255, b: 255, a: 1 },
    expect: {
      rgb: 'rgb(255,255,255)',
      hex: '#ffffff',
      hsl: 'hsl(0, 0%, 100%)',
      cmyk: '0 0 0 0',
    },
  },
  {
    value: { r: -1, g: -1, b: -1, a: 100 },
    expect: {
      rgb: 'rgb(0,0,0)',
      hex: '#000000',
      hsl: 'hsl(0, 0%, 0%)',
      cmyk: '0 0 0 100',
    },
  },
  {
    value: { r: 100, g: 100, b: 100, a: -1 },
    expect: {
      rgb: 'rgb(100,100,100)',
      hex: '#646464',
      hsl: 'hsl(0, 0%, 39%)',
      cmyk: '0 0 0 61',
    },
  },
  {
    value: { r: 256, g: 256, b: 256, a: -1 },
    expect: {
      rgb: 'rgb(255,255,255)',
      hex: '#ffffff',
      hsl: 'hsl(0, 0%, 100%)',
      cmyk: '0 0 0 0',
    },
  },
  {
    value: { r: -1, g: -1, b: -1, a: -1 },
    expect: {
      rgb: 'rgb(0,0,0)',
      hex: '#000000',
      hsl: 'hsl(0, 0%, 0%)',
      cmyk: '0 0 0 100',
    },
  },
];
