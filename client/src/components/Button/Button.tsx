import * as React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components'

export enum Variants {
  primary = 'primary',
}

const Wrapper = styled(TouchableOpacity)<{ variant?: Variants }>`
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
`

const Label = styled(Text)`
  font-family: AvantGardePro;
  font-size: 18px;
  font-weight: 900;
  color: var(--white);
  letter-spacing: -0.5px;
`

interface ButtonProps {
  children: string
  onPress: () => void
  disabled?: boolean
  variant?: Variants
  style?: any
}

const Button = ({ children, onPress, disabled, variant, style }: ButtonProps) => (
  <Wrapper
    variant={variant}
    onPress={onPress}
    activeOpacity={0.6}
    disabled={disabled}
    style={style}
  >
    <Label>{children}</Label>
  </Wrapper>
)

export default Button
