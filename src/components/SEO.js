import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

const SEO = ({ children, location, description, title, image }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);
  return (
    <Helmet titleTemplate={`%s - ${site.siteMetadata.title}`}>
      <html lang="en" />
      <title>{title}</title>
      {/* Meta Tags */}
      <meta property="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta name="description" content={site.siteMetadata.description} />
      {/* Open Graph */}
      {location && <meta property="og:url" content={location.href} />}
      <meta property="og:image" content={image || '/header.png'} />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:site_name" content={site.siteMetadata.title} key="ogsitename" />
      <meta property="og:description" content={description} key="ogdesc" />
      {children}
    </Helmet>
  );
}

export default SEO;
