import * as React from 'react'
import * as H from 'history'

export const useIsLandlord = (location: H.Location) => {
  const [isLandlord, set] = React.useState()
  React.useEffect(() => {
    set(location.pathname.indexOf('/landlord') !== -1)
    return () => {}
  })
  return isLandlord
}
