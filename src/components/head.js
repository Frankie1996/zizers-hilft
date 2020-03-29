import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

const Head = ({ title }) => {
  const data = useStaticQuery(graphql`
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
    <Helmet
      htmlAttributes={{ lang: 'de' }}
      title={`${title} | ${data.site.siteMetadata.title}`}
      meta={[
        { name: 'charset', content: "utf-8" },
        { name: 'og:title', content: "Zizers hilft! #ZizersHilftZizers" },
        { name: 'title', content: "Zizers hilft! #ZizersHilftZizers" },
        { name: 'og:description', content: data.site.siteMetadata.description },
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'og:url', content: "https://zizers-hilft.netlify.com" },
        { name: 'url', content: "https://zizers-hilft.netlify.com" },
        { name: 'og:author', content: "Frank Zinsli by Marc Fehr" },
        { name: 'author', content: "Frank Zinsli by Marc Fehr" },
        { name: 'copyright', content: "Kein Copyright - Opensource" },
        { name: 'keywords', content: "Zizers-hilft!, zizers hilft, zizershilftzizers, Zizers hilft! #ZizersHilftZizers" },
        { name: 'robots', content: "index" },
        { name: 'google-site-verification', content: "yUcDhO8RXVsRYPqMadRThVh-cBlkCNuJXCsTXe_FNvs"},
      ]}
    />
  );
};

export default Head;
