import type * as Stitches from '@stitches/react';
import { createStitches, defaultThemeMap } from '@stitches/react';
import { colors } from './colors';


export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    width: 'space',
    height: 'space',
    opacity: 'opacity',
  },

  theme: {
    colors,

    space: {
      px: '1px',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      10: '2.5rem',
      12: '3rem',
      16: '4rem',
      20: '5rem',
      40: '10rem',
      64: '16rem',
      80: '20rem',
    },

    fontSizes: {
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
    },

    fonts: {
      default: 'Roboto, sans-serif',
    },

    radii: {
      sm: '5px',
      md: '10px',
      lg: '20px',
      full: '99999px',
    },
  },

  media: {
    tablet: '(max-width: 768px)',
    mobile: '(max-width: 425px)',
  },

  utils: {
    mx: (value: Stitches.ScaleValue<'space'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.ScaleValue<'space'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
    px: (value: Stitches.ScaleValue<'space'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.ScaleValue<'space'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
});
