import React from 'react';

import Profile from '../Profile';
import SocialLinks from '../SocialLinks';
import MenuLinks from '../MenuLinks';

import * as S from './styles';

const SideBar = () => (
  <S.StyledWrapper>
    <Profile />
    <SocialLinks />
    <MenuLinks />
  </S.StyledWrapper>
)

export default SideBar;