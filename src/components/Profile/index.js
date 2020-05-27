import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Avatar from '../Avatar';

import * as S from './styles';

const Profile = () => {
  const { site: { siteMetadata } } = useStaticQuery(graphql`
  query MyQuery {
    site {
      siteMetadata {
        title
        position
        description
        author
      }
    }
  }
  `);

  return (
    <S.ProfileWrapper className="Profile-wrapper">
      <S.ProfileLink>
        <Avatar />
        <S.ProfileAuthor>
          {siteMetadata.title}
          <S.ProfilePosition>{siteMetadata.position}</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>
      <S.ProfileDescription>{siteMetadata.description}</S.ProfileDescription>
    </S.ProfileWrapper>
  )
}

export default Profile;