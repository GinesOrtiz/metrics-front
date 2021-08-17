import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { TopNavBrand, TopNavMenu, TopNavMenuItem, TopNavUser, TopNavWrapper } from './topNav.styles'
import { useUser } from '../../context/UserContext'
import { Button } from '../styledComponents/Form'
import { DropShadow } from '../styledComponents/GlobalStyle'
import Animate from '../animate/Animate'
import './lang'

const TopNav = () => {
  const { t } = useTranslation()
  const { state, resetUser } = useUser()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <TopNavWrapper>
        <TopNavBrand>Metrics Dashboard</TopNavBrand>
        <TopNavUser>
          <Button secondary onClick={() => setIsMenuOpen(true)}>
            {state.username}
          </Button>
          <Animate type={'fade'} in={isMenuOpen}>
            <>
              <TopNavMenu>
                <TopNavMenuItem onClick={resetUser}>{t('topNav:logout')}</TopNavMenuItem>
              </TopNavMenu>
              <DropShadow onClick={() => setIsMenuOpen(false)} />
            </>
          </Animate>
        </TopNavUser>
      </TopNavWrapper>
    </>
  )
}

TopNav.propTypes = {}

export default TopNav
