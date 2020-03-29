import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import { Link } from 'gatsby'
import { MapViewComponent } from '../components/mapview.main'
import ShareImg from "../images/share.jpg"
import SaveImg from "../images/save.jpg"
import HomeImg from "../images/home.jpg"
/* SEO Component with React Helmet */
import Head from '../components/head'

const Index = () => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title,
          email
        }
      }
    }
  `);

  return (
    <Layout>
      <Head title={'Home'} />
      <div className='index'>
        <section className='ui vertical very fitted segment' style={{marginTop: '1rem'}}>
          <div className='ui container'>
            <h1 className='ui header'>
              <div className='content'>
              <span className={'page-title'}>Zizers hilft! - Wir helfen uns</span>
                <div className='sub header'>
                In Zeiten von Selbstisolation und Social Distancing soll in Zizers niemand alleine sein. Liest du gerne Geschichten via Skype vor, hast du Zeit für jemanden einzukaufen oder sonst etwas anzubieten? Füge deine Einträge in die interaktive Karte ein, damit wir diese Zeit gemeinsam durchstehen.{' '}
                  <Link to={'/add'}>
                    Hilf mit!
                  </Link>
                </div>
              </div>
            </h1>
          </div>
        </section>
        <section>
          <MapViewComponent />
        </section>
        <section className='ui vertical segment intro'>
          <div className='ui text container formcontainer'>
            <h2>Was sehe ich auf der Karte?</h2>
            <p>
            Die Karte zeigt Personen oder Geschäfte, die ihre Hilfe oder Dienstleistungen für Zizerserinnnen und Zizerser anbieten. Vom Restaurant, das neu Take-Away anbietet, bis zur Einzelperson, die anderen via Skype gerne Musik vorspielt: Alle Angebote sind willkommen.
            </p>
            <Link
              to={'/add'}
              className='ui primary fluid button'
              style={{marginTop: '1rem'}}
            >
              Eintrag erfassen
            </Link>
            <h2>Wie kann ich einen Eintrag entfernen?</h2>
            <p>
            Schreibe mir eine Mail an{' '}
              <a
                href="mailto:frank.zinsli@gmail.com"
              >(Link zu meiner Emailadresse)
              </a>
              .{' '}Sobald die Karte nicht mehr benötigt wird, werden alle Einträge und Daten gelöscht.
            </p>
            <h2>Webseite als Smartphone-App speichern</h2>
            <p>
              Es ist möglich, diese Webseite als ein App (WebApp) zu speichern. Die untenstehenden Bilder zeigen, wie es auf einem Apple-Device funktioniert. 
            </p>
            <img className='imgwidth' src={ShareImg} alt="Website Teilen"/>
            <img className='imgwidth' src={SaveImg} alt="Website Teilen"/>
            <img className='imgwidth' src={HomeImg} alt="Website Teilen"/>
            <p>
            Eine ausführliche Anleitung (auch für Androidgeräte) finden Sie unter folgendem{' '}
              <a
                href="https://www.tutonaut.de/tipp-webseiten-als-apps-auf-die-startseite-von-android-oder-ios-legen/" target="_blank"
              >Link.
              </a>
              <br/><br/>
              Zizers hilft! #ZizersHilftZizers
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
