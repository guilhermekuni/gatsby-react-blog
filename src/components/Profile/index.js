import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const Profile = () => (
  <StaticQuery
    query={graphql`
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
    `}
    render={({ site: { siteMetadata } }) => (
      <div className="Profile-wrapper">
        <h1>{siteMetadata.title}</h1>
        <h2>{siteMetadata.position}</h2>
        <p>{siteMetadata.description}</p>
      </div>
    )}
  />
);

export default Profile;