import * as React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components'

const Wrapper = styled(TouchableOpacity)`
  background: #575b7e;
  border-radius: 30px;
  text-align: center;
  box-shadow: 0 20px 30px 0 rgba(87, 91, 126, 0.3);
  padding: 17px 45px;
`

const Label = styled(Text)`
  font-size: 18px;
  font-weight: 900;
  color: #ffffff;
  letter-spacing: -0.5px;
`

interface ButtonProps {
  children: string
  onPress: () => void
}

const Button = ({ children, onPress }: ButtonProps) => (
  <Wrapper onPress={onPress} activeOpacity={0.6}>
    <Label>{children}</Label>
  </Wrapper>
)

export default Button
