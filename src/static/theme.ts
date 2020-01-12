const colors = {
  white: '#ffffff',
  blue: '#0077ff',
  grays: ['#eff0f5', '#dcdcde', '#a2a2a2', '#646464', '#585858'],
  blacks: ['#2c2c2c', '#363636'],
};
const breakpoints = ['31.25em', '43.75em', '46.875em'];
const fontSizes = ['1.2rem', '1.4rem', '1.6rem', '1.8rem', '2.4rem', '2.8rem', '3.2rem', '4.0rem', '4.8rem', '6.4rem'];
const space = ['0', '.4rem', '.8rem', '1.2rem', '1.6rem', '2.0rem', '3.2rem', '4.8rem', '6.4rem', '9.6rem'];

export interface StyleClosetTheme {
  breakpoints: string[];
  fontSizes: string[];
  space: string[];
  colors: { [key in keyof typeof colors]: string | string[] };
}

const theme: StyleClosetTheme = {
  breakpoints,
  fontSizes,
  space,
  colors,
};

export { theme };
