import { styled } from '../../styles'

export const Container = styled('button', {
  $$background: '',
  $$color: '',
  $$borderColor: 'transparent',

  margin: '$4',
  padding: '$4 $10',

  border: '2px solid',
  borderColor: '$$borderColor',
  borderRadius: '$sm',
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
    }
  }
})
