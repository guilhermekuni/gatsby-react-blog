import React from 'react';

import Profile from '../Profile';
import SocialLinks from '../SocialLinks';

import * as S from './styles';

const SideBar = () => (
  <S.StyledWrapper>
    <Profile />
    <SocialLinks />
  </S.StyledWrapper>
)

export default SideBar;