import { View } from 'react-native'
import styled from 'styled-components'

export enum Variants {
  login = 'login',
  accent = 'accent',
}

interface BoxProps {
  width?: string
  variant?: Variants
}

const Box = styled(View)<BoxProps>`
  flex: 1;
  width: ${props => props.width || '100%'};
  ${props => {
    switch (props.variant) {
      case Variants.login:
        return 'background-color: var(--light-grayish-blue)'
      case Variants.accent:
        return 'background-image: linear-gradient(-180deg, var(--desaturated-blue) 0%, var(--dark-blue) 100%)'
      default:
        return 'background-color: var(--white)'
    }
  }};
  box-shadow: ${props => {
    switch (props.variant) {
      case Variants.login:
        return '0 100px 100px 0 var(--black-20)'
      case Variants.accent:
        return '0 40px 80px 0 var(--dark-blue-40)'
      default:
        return '0 40px 80px 0 var(--black-10)'
    }
  }};
  border-radius: 10px;
`

export default Box
