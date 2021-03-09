import React, { useState, useEffect} from 'react'

import { Home } from '@styled-icons/feather/Home'
import { Search } from '@styled-icons/feather/Search'
import { Moon } from '@styled-icons/feather/Moon'
import { Grid } from '@styled-icons/feather/Grid'
import { List } from '@styled-icons/feather/List'
import { ArrowUp as Arrow } from '@styled-icons/feather/ArrowUp'

import * as S from './styled'

const MenuBar = () => {
  const [theme, setTheme] = useState(null)
  const [display, setDisplay] = useState(null)

  const isDarkMode = theme === 'dark'
  const isListMode = display === 'list'

  useEffect(() => {
    setTheme(window.__theme)
    setDisplay(window.__display)

    window.__onThemeChange = () => setTheme(window.__theme)
    window.__onDisplayChange = () => setDisplay(window.__display)
  }, [])

  return(
    <S.MenuBarWrapper>
    <S.MenuBarGroup>
      <S.MenuBarLink to="/" title="Back to Home">
        <S.MenuBarItem><Home /></S.MenuBarItem>
      </S.MenuBarLink>
    <S.MenuBarLink to="/search/" title="Search">
        <S.MenuBarItem><Search /></S.MenuBarItem>
      </S.MenuBarLink>
    </S.MenuBarGroup>

    <S.MenuBarGroup>
      <S.MenuBarItem 
        title="Mudar o tema" 
        onClick={() => {
          window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')
        }}
        className={theme}
      >
        <Moon />
      </S.MenuBarItem>
      <S.MenuBarItem 
        title="Mudar visualização" onClick={() => {
          window.__setPreferredDisplay(isListMode ? 'grid' : 'list')
        }}
          className="display"
        >
          {isListMode ? <Grid /> : <List /> }
      </S.MenuBarItem>
      <S.MenuBarItem title="Go to the top">
        <Arrow />
      </S.MenuBarItem>
    </S.MenuBarGroup>
  </S.MenuBarWrapper>
  )
}

export default MenuBar