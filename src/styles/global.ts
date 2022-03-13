import { globalCss } from '.';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  'html, body, #__next': {
    minHeight: '100%',
  },

  body: {
    textRendering: 'optimizeLegibility !important',
    fontFamily: 'Roboto, sans-serif',
    background: '$background',
  },

  button: {
    cursor: 'pointer',
    fontFamily: 'Roboto, sans-serif',
  },
});
