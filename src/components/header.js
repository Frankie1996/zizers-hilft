import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

/* Additional Header Styles */
import './header.scss';

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title,
          share {
            text,
            hashtags
          }
        }
      }
    }
  `);

  const logo = require('../images/logo.svg');
  const shareText = encodeURI(data.site.siteMetadata.share.text);
  const shareHashtags = encodeURI(data.site.siteMetadata.share.hashtags);

  return (
    <header>
      <div className={'ui unstackable grid'}>
        <div className={'ui twelve wide column logo-column'}>
        <a href="/"><div
            className={'header-logo'}
            style={{
              backgroundImage: 'url('+ logo +')'
            }}
          /></a>
          <h1 className={'logo-font'}>
            <a href="/"><span>{data.site.siteMetadata.title}</span></a>
          </h1>
        </div>
        <div className={'ui four wide right aligned column'} style={{padding: '.8rem 1.4rem 0 0'}}>
          <div className={'icon-container'}>
            <a href={'https://wa.me/?text=' + shareText} target={'_blank'} rel={'noopener noreferrer'}>
              <i className='ui icon whatsapp' />
            </a>
            <a href={'https://www.facebook.com/sharer/sharer.php?u=https://netflify.zizers-hilft.com'} target={'_blank'} rel={'noopener noreferrer'}>
              <i className='ui icon facebook' />
            </a>
            <a href={'https://twitter.com/intent/tweet?hashtags=' + shareHashtags +'&text=' + shareText} target={'_blank'} rel={'noopener noreferrer'}>
              <i className='ui icon twitter' />
            </a>
            <a href={"mailto:?body=" + shareText + "&subject=Zizers hilft! Hilf auch du mit!"}>
              <i className='ui icon envelope' />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
