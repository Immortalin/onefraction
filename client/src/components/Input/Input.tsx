import * as React from 'react'
import { View, Text, TextInput, TextInputProps } from 'react-native'
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
  outline: none;
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

interface InputProps extends TextInputProps {
  style?: any
  inputStyle?: any
  name?: string
  label?: string
  secure?: boolean
  focusable?: boolean
}

const Input = React.forwardRef(
  ({ style, inputStyle, name, label, secure, focusable, ...props }: InputProps, ref) => {
    const [focused, setFocused] = React.useState(false)
    return (
      <View style={style}>
        {label && <Label>{label}</Label>}
        <Base
          {...props}
          innerRef={ref}
          style={inputStyle}
          name={name}
          placeholderTextColor="var(--dark-moderate-blue-30)"
          secureTextEntry={secure}
          focused={focused}
          focusable={focusable}
          onFocus={e => {
            setFocused(true)
            if (props.onFocus) {
              props.onFocus(e)
            }
          }}
          onBlur={e => {
            setFocused(false)
            if (props.onBlur) {
              props.onBlur(e)
            }
          }}
        />
      </View>
    )
  }
)

export default Input
