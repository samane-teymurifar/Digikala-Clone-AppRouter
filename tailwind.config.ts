import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      primary: {
        light: '#EF3F3E',
         //FIXME
        dark: '#512DA8'
      },
      primaryTint: {
        0: '#ffecef',
        10: '#ffcfd5',
        20: '#f49d9f',
        30: '#ec777a',
        40: '#f85858',
        50: '#fd473e',
        60: '#ef3e3e',
        70: '#dd3438',
        80: '#d02d30',
        90: '#c12124'
      },
      secondary: {
        main: '#818285',
        light: '#818285',
         //FIXME
        dark: '#EF6C00'
      },
      secondaryTint: {
        0: '#fbfcff',
        10: '#f6f7fa',
        20: '#f1f2f6',
        30: '#eaebef',
        40: '#c9cacd',
        50: '#abacaf',
        60: '#818285',
        70: '#6c6d70',
        80: '#4d4e50',
        90: '#2b2b2e'
      },
      tertiary: {
        main: '#1FC1D4',
        light: '#1FC1D4',
         //FIXME
        dark: '#EF6C00'
      },
      tertiaryTint: {
        5: '#dff6f9',
        10: '#b1e9f0',
        20: '#7edbe6',
        30: '#49ccdc',
        40: '#1fc2d4',
        50: '#00b7cd',
        60: '#00a8bb',
        70: '#0093a1',
        80: '#007f89',
        90: '#005c5f'
      },
      common: {
        black: '#000000',
        white: '#FFFFFF'
      },
      gray: {
        5: '#F2F0F4',
        10: '#E3E2E6',
        20: '#C7C6CA',
        30: '#ABABAF',
        40: '#919094',
        50: '#77777A',
        60: '#5E5E62',
        70: '#46464A',
        80: '#303034',
        90: '#1B1B1F'
      },
      surprisingSupermarket: '#edefed',
      offTo59Color : '#39ae00',
      digiplusColor: '#941b80',
      digikalAppBannerColor : '#3c4b6d'
    },
    fontFamily: {
      custom: ['"font1"', 'sans-serif'],
    },

  },
  plugins: [],
}
export default config