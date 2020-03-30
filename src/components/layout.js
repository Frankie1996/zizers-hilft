import React from 'react';
import CookieConsent from "react-cookie-consent";
import favicon from '../images/favicon.ico'
import Helmet from 'react-helmet'

import Header from './header';
import Navbar from './navbar';
import Footer from './footer';


/* Loading Semantic UI Style Sheets */
import '@ta-interaktiv/semantic-ui/semantic/dist/components/reset.css'
import '@ta-interaktiv/semantic-ui/semantic/dist/components/site.css'
import '@ta-interaktiv/semantic-ui/semantic/dist/components/segment.css'
import '@ta-interaktiv/semantic-ui/semantic/dist/components/container.css'
import '@ta-interaktiv/semantic-ui/semantic/dist/components/header.css'
import '@ta-interaktiv/semantic-ui/semantic/dist/components/dropdown.css'
import '@ta-interaktiv/semantic-ui/semantic/dist/components/list.css'
import '@ta-interaktiv/semantic-ui/semantic/dist/components/form.css'
import '@ta-interaktiv/semantic-ui/semantic/dist/components/input.css'
import '@ta-interaktiv/semantic-ui/semantic/dist/components/checkbox.css'
import '@ta-interaktiv/semantic-ui/semantic/dist/components/message.css'
import '@ta-interaktiv/semantic-ui/semantic/dist/components/divider.css'
import '@ta-interaktiv/semantic-ui/semantic/dist/components/button.css'
import '@ta-interaktiv/semantic-ui/semantic/dist/components/icon.css'
import '@ta-interaktiv/semantic-ui/semantic/dist/components/label.css'
import '@ta-interaktiv/semantic-ui/semantic/dist/components/grid.css'


import '../styles/index.scss';
import './layout.scss';

const Layout = ({ children }) => {
  return (
    <div id={'app'}>
      <CookieConsent
          location="bottom"
          buttonText="Akzeptieren"
          buttonId="akzeptbutton"
          enableDeclineButton
          declineButtonId="declinebutton"
          declineButtonText="Ablehnen"
          cookieName="gatsby-gdpr-google-analytics">
          Wir verwenden Cookies, damit Sie diese Website optimal nutzen können. Durch einen Klick auf Akzeptieren, stimmen Sie der Nutzung von Cookies zu.
      </CookieConsent>
      <Helmet>
            <link rel="icon" href={favicon} />
      </Helmet>
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
