import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import RecommendedPosts from '../components/RecommendedPosts';

import * as S from '../components/Post/styles';

const BlogPost = ({ data, pageContext }) => {
  const {
    frontmatter:
    {
      title,
      description,
      date,
    },
    html,
    timeToRead
  } = data.markdownRemark;

  const { nextPost, previousPost } = pageContext;

  return (
    <Layout>
      <SEO title={title} />
      <S.PostHeader>
        <S.PostDate>
          {date} • {timeToRead} min de leitura
        </S.PostDate>
        <S.PostTitle>{title}</S.PostTitle>
        <S.PostDescription>{description}</S.PostDescription>
      </S.PostHeader>
      <S.MainContent>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </S.MainContent>
      <RecommendedPosts next={nextPost} previous={previousPost} />
    </Layout>
  )
};

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
      }
      html
      timeToRead
    }
  }
`;

export default BlogPost;