import { View } from 'react-native'
import styled from 'styled-components'

interface BoxProps {
  width?: string
  height?: number
  maxWidth?: number
}

const Box = styled(View)<BoxProps>`
  width: ${props => props.width || '100%'};
  max-width: ${props => props.maxWidth || 600}px;
  height: ${props => props.height || 500}px;
  background: #edeef3;
  box-shadow: 0 100px 100px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`

export default Box
