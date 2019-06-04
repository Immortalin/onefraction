import * as React from 'react'
import {
  View,
  Text,
  TextInput,
  TextInputIOSProps,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from 'react-native'
import styled, { css } from 'styled-components'

const Base = styled(TextInput)<{
  name?: string
  focused?: boolean
  focusable?: boolean
  innerRef: any
}>`
  font-family: AvantGardePro;
  background: var(--white);
  padding: 12px 20px;
  box-shadow: 0 13px 27px 0
    rgba(0, 0, 0, ${props => (props.focused && props.focusable ? '0.1' : '0.04')});
  border-radius: 2.67px;
  font-size: 20px;
  font-weight: 900;
  color: var(--dark-blue);
  letter-spacing: -0.91px;
  transition: box-shadow 0.3s ease;

  ${props =>
    props.focusable &&
    css`
      &:hover {
        box-shadow: 0 13px 27px 0 rgba(0, 0, 0, 0.1);
      }
    `}
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
  inputStyle?: any
  name?: string
  label?: string
  placeholder?: string
  value?: string
  onChangeText: (text: string) => void
  onBlur?: (e: any) => void
  onFocus?: (e: any) => void
  onKeyPress?: (e: NativeSyntheticEvent<TextInputKeyPressEventData>) => void
  secure?: boolean
  focused?: boolean
  focusable?: boolean
  textContentType?: TextInputIOSProps['textContentType']
}

const Input = React.forwardRef(
  (
    {
      style,
      inputStyle,
      name,
      label,
      placeholder,
      value,
      onChangeText,
      onBlur,
      onFocus,
      onKeyPress,
      secure,
      focused,
      focusable,
      textContentType,
    }: InputProps,
    ref
  ) => (
    <View style={style}>
      {label && <Label>{label}</Label>}
      <Base
        innerRef={ref}
        style={inputStyle}
        name={name}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        onFocus={onFocus}
        onKeyPress={onKeyPress}
        placeholder={placeholder}
        placeholderTextColor="var(--dark-moderate-blue-30)"
        textContentType={textContentType}
        secureTextEntry={secure}
        focused={focused}
        focusable={focusable}
      />
    </View>
  )
)

export default Input
