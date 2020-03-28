import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import './footer.scss';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author,
          title,
          email,
          twitter {
            hashtag
          }
        }
      }
    }
  `);

  return (
    <footer className='ui vertical inverted segment'>
      <div className='ui center aligned container'>
        <table>
          <tbody>
            <tr>
              <td className='tbl-titel'>Entwicklung</td>
              <td className='content'>Frank Zinsli / Marc Fehr</td>
            </tr>
            <tr>
              <td className='tbl-titel'>Veröffentlicht</td>
              <td className='content'>28.03.2020, 02:25</td>
            </tr>
          </tbody>
        </table>
        <hr></hr>
        <i className='ui icon copyright' />{new Date().getFullYear()}{' '}{data.site.siteMetadata.title}
        <a className='impressumg' href="/impressum">Impressum</a>
      </div>
    </footer>
  );
};

export default Footer;
