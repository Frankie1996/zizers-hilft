import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';

const Contact = () => {
  return (
    <Layout>
      <Head title={`Impressum`} />
      <section className='ui vertical very fitted segment' style={{marginTop: '1rem'}}>
        <div className='ui container'>
          <h1 className='ui header'>
            <div className='content'>
            <span className='page-title'>
              Impressum
            </span>
              <h2 className='untertitel'>Kontakt-Adresse</h2>
              <p className='text_about'>
              Frank Zinsli<br/>Chessiweg 6<br/>7205 Zizers<br/>Schweiz</p><p className='text_about'><strong>E-Mail:</strong><br/>frank.zinsli@gmail.com
              </p>
              <h2 className='untertitel'>Haftungsausschluss</h2>
              <p className='text_about'>
              Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.
Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen.
Alle Angebote sind unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne besondere Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.
              </p>
              <h2 className='untertitel'>Haftungsausschluss für Links</h2>
              <p className='text_about'>
              Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs. Es wird jegliche Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr des jeweiligen Nutzers.
              </p>
              <h2 className='untertitel'>Urheberrechte</h2>
              <p className='text_about'>
              Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf dieser Website, gehören ausschliesslich <strong>Frank Zinsli</strong> oder den speziell genannten Rechteinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung des Urheberrechtsträgers im Voraus einzuholen.
              <br/><br/>Quelle: <a href="https://www.swissanwalt.ch" target="_blank" rel="noopener">SwissAnwalt</a>
              </p>
            </div>
          </h1>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
