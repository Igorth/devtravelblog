import React from 'react'

import { Home } from '@styled-icons/feather/Home'
import { Search } from '@styled-icons/feather/Search'
import {LightBulb as Light} from '@styled-icons/entypo/LightBulb'
import { Grid } from '@styled-icons/boxicons-regular/Grid'
import { ArrowUp as Arrow } from '@styled-icons/feather/ArrowUp'

import * as S from './styled'

const MenuBar = () => (
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
      <S.MenuBarItem title="Change theme"><Light /></S.MenuBarItem>
      <S.MenuBarItem title="Visualization"><Grid /></S.MenuBarItem>
      <S.MenuBarItem title="Go to the top"><Arrow /></S.MenuBarItem>
    </S.MenuBarGroup>
  </S.MenuBarWrapper>
)

export default MenuBar