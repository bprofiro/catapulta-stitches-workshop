import { styled } from '../../styles'

export const Container = styled('button', {
  $$background: '',
  $$color: '',
  $$borderColor: 'transparent',

  margin: '$4',
  padding: '$4 $10',

  border: '2px solid',
  borderColor: '$$borderColor',
  background: '$$background',

  color: '$$color',
  fontWeight: 'bold',
  textTransform: 'uppercase',

  variants: {
    variant: {
      primary: {
        $$background: '$colors$primary',
        $$color: '$colors$button-text',
      },
      secondary: {
        $$background: 'transparent',
        $$color: '$colors$button-text',
        $$borderColor: '$colors$primary',
      },
      danger: {
        background: '#29292E',
        color: '$error',
      },
    },
    radius: {
      default: {
        borderRadius: '$sm',
      },
      pill: {
        borderRadius: '$full',
      }
    }
  },

  defaultVariants: {
    variant: 'primary',
    radius: 'default',
  },

  compoundVariants: [{
    variant: 'primary',
    radius: 'pill',
    css: {
      boxShadow: `0px 0px 0 2px $colors$error`,
    }
  }]
})
