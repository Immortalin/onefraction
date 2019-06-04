import * as React from 'react'
import { View, Text, Image } from 'react-native'
import styled from 'styled-components'
import { Link } from '../Router'

const Wrapper = styled(View)`
  flex-direction: row;
  align-items: center;
`

const Label = styled(Text)<{ active?: boolean }>`
  font-family: AvantGardePro;
  padding-left: 22px;
  font-weight: 500;
  font-size: 18px;
  color: ${props => (props.active ? 'var(--dark-blue)' : 'var(--gray)')};
  letter-spacing: -0.45px;
  line-height: 59px;
`

interface SidebarItemProps {
  children: string
  icon: string
  to: string
  active?: boolean
}

const SidebarItem = ({ children, active, to, icon }: SidebarItemProps) => (
  <Link to={to} style={{ textDecoration: 'none' }}>
    <Wrapper>
      <Image source={{ uri: icon }} style={{ width: 18, height: 18 }} />
      <Label active={active}>{children}</Label>
    </Wrapper>
  </Link>
)

export default SidebarItem
