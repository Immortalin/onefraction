import * as React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import menuIcon from '../../assets/images/icons/menu.svg'

const Wrapper = styled(TouchableOpacity)`
  padding: 10px;
  position: fixed;
  right: 50px;
  top: 50px;
`

const Icon = styled(Image)`
  width: 20px;
  height: 8px;
`

interface MenuIconProps {
  onPress: () => void
}

const MenuIcon = ({ onPress }: MenuIconProps) => (
  <Wrapper onPress={onPress} activeOpacity={0.6}>
    <Icon source={{ uri: menuIcon }} />
  </Wrapper>
)

export default MenuIcon
