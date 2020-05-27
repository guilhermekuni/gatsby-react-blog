import React from 'react';
import PropTypes from 'prop-types';

import GlobalStyles from '../../styles/global';

import Profile from '../../components/Profile';

import * as S from './styles';

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <aside>
        <Profile />
      </aside>
      <S.LayoutMain>{children}</S.LayoutMain>
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
