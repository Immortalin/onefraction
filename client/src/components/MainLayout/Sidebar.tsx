import * as React from 'react'
import { View } from 'react-native'
import styled from 'styled-components'
// import logoSmall from '../../assets/images/logo-small.svg'
import { Link } from '../Router'
import Button, { Variants as ButtonVariants } from '../Button'
import SidebarItem from './SidebarItem'
import dashbaordIcon from '../../assets/images/icons/dashboard.svg'
import settingsIcon from '../../assets/images/icons/settings.svg'

const Wrapper = styled(View)<{ open: boolean }>`
  width: 300px;
  height: 100vh;
  position: absolute;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  background: var(--white);
  box-shadow: 0 0 100px 0 var(--black-10);
  ${props => !props.open && 'transform: translate(-300px); '}
  transition: transform 0.3s ease;
`

// const Logo = styled(Image)`
//   width: 27px;
//   height: 36px;
//   position: absolute;
//   top: 50px;
//   right: 60px;
// `

interface SidebarProps {
  open: boolean
}

const Sidebar = ({ open }: SidebarProps) => (
  <Wrapper open={open}>
    <Link to="/" style={{ position: 'relative' }}>
      {/* <Logo source={{ uri: logoSmall }} /> */}
    </Link>
    <View style={{ marginRight: 40 }}>
      <SidebarItem to="/" active icon={dashbaordIcon}>
        Dashboard
      </SidebarItem>
      <SidebarItem to="/settings" icon={settingsIcon}>
        Settings
      </SidebarItem>
    </View>
    <View style={{ marginBottom: 35 }}>
      <Button onPress={() => {}} style={{ width: 200 }} variant={ButtonVariants.primary}>
        Pay my Rent
      </Button>
    </View>
  </Wrapper>
)

export default Sidebar
