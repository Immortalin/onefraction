import * as React from 'react'
import { View, Text, TextInput, TextInputIOSProps } from 'react-native'
import styled from 'styled-components'

const Base = styled(TextInput)<{ name?: string }>`
  background: var(--white);
  padding: 12px 20px;
  box-shadow: 0 13px 27px 0 rgba(0, 0, 0, 0.04);
  border-radius: 2.67px;
  font-size: 20px;
  font-weight: 900;
  color: var(--dark-blue);
  letter-spacing: -0.91px;
`

const Label = styled(Text)`
  font-family: AvantGardePro;
  margin-bottom: 8px;
  font-size: 13.33px;
  font-weight: 900;
  color: var(--dark-blue);
  letter-spacing: -0.61px;
`

interface InputProps {
  style?: any
  name?: string
  label?: string
  placeholder?: string
  value?: string
  onChangeText: (text: string) => void
  onBlur?: (e: any) => void
  secure?: boolean
  textContentType?: TextInputIOSProps['textContentType']
}

const Input = ({
  style,
  name,
  label,
  placeholder,
  value,
  onChangeText,
  onBlur,
  secure,
  textContentType,
}: InputProps) => (
  <View style={style}>
    {label && <Label>{label}</Label>}
    <Base
      name={name}
      value={value}
      onChangeText={onChangeText}
      onBlur={onBlur}
      placeholder={placeholder}
      placeholderTextColor="var(--dark-moderate-blue-30)"
      textContentType={textContentType}
      secureTextEntry={secure}
    />
  </View>
)

export default Input
