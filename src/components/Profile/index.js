import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

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
    <div className="Profile-wrapper">
      <h1>{siteMetadata.title}</h1>
      <h2>{siteMetadata.position}</h2>
      <p>{siteMetadata.description}</p>
    </div>
  )
}

export default Profile;