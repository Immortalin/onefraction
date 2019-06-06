import * as React from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import styled from 'styled-components'

export enum Variants {
  primary = 'primary',
}

const Wrapper = styled(TouchableOpacity)<{ variant?: Variants; disabled?: boolean }>`
  background: ${props => {
    switch (props.variant) {
      case Variants.primary:
        return 'var(--cyan)'
      default:
        return 'var(--dark-blue)'
    }
  }};
  border-radius: 30px;
  text-align: center;
  box-shadow: 0 20px 30px 0 rgba(87, 91, 126, 0.3);
  padding: 17px 45px;
  opacity: ${props => (props.disabled ? '0.6' : '1')};
`

const Label = styled(Text)`
  font-family: AvantGardePro;
  font-size: 18px;
  font-weight: 900;
  color: var(--white);
  letter-spacing: -0.5px;
`

interface ButtonProps extends TouchableOpacityProps {
  children: any
  variant?: Variants
  style?: any
}

const Button = ({ children, variant, style, ...props }: ButtonProps) => (
  <Wrapper {...props} variant={variant} activeOpacity={0.6} style={style}>
    {typeof children === 'string' ? <Label>{children}</Label> : children}
  </Wrapper>
)

export default Button
