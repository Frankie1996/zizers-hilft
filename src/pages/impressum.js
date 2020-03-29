import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';

const Contact = () => {
  return (
    <Layout>
      <Head title={`Impressum & Datenschutz`} />
      <section className='ui vertical very fitted segment' style={{marginTop: '1rem'}}>
        <div className='ui container'>
          <h1 className='ui header'>
            <div className='content'>
            <span className='page-title'>
              Impressum & Datenschutz
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
              <h2 className='untertitel'>Google Analytics</h2>
              <p className='text_about'>
              Soweit Sie Ihre Einwilligung erklärt haben, wird auf dieser Website Google Analytics eingesetzt, ein Webanalysedienst der Google Ireland Limited (&bdquo;Google&ldquo;). Die Nutzung umfasst die Betriebsart &bdquo;Universal Analytics&ldquo;. Hierdurch ist es möglich, Daten, Sitzungen und Interaktionen über mehrere Geräte hinweg einer pseudonymen User-ID zuzuordnen und so die Aktivitäten eines Nutzers geräteübergreifend zu analysieren.
              </p>
              <h3>Cookies</h3>
              <p className='text_about'>Google Analytics verwendet sog. &bdquo;Cookies&ldquo;, Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch das Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Im Falle der Aktivierung der IP-Anonymisierung auf dieser Website, wird Ihre IP-Adresse von Google jedoch innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt. Wir weisen Sie darauf hin, dass auf dieser Webseite Google Analytics um eine IP-Anonymisierung erweitert wurde, um eine anonymisierte Erfassung von IP-Adressen (sog. IP-Masking) zu gewährleisten. Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt. Nähere Informationen zu Nutzungsbedingungen und Datenschutz finden Sie unter <a href="https://www.google.com/analytics/terms/de.html" target="_blank">https://www.google.com/analytics/terms/de.html</a> bzw. unter <a href="https://policies.google.com/?hl=de" target="_blank">https://policies.google.com/?hl=de</a>.</p>
              <h3>Zwecke der Verarbeitung</h3>
              <p className='text_about'>Im Auftrag des Betreibers dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Websitebetreiber zu erbringen.</p>
              <h3>Rechtsgrundlage</h3>
              <p className='text_about'>Die Rechtsgrundlage für den Einsatz von Google Analytics ist Ihre Einwilligung gemäß <a href="https://dsgvo-gesetz.de/art-6-dsgvo/" target="_blank">Art. 6 Abs. 1 S.1 lit. a DSGVO</a>.</p>
              <h3>Empfänger</h3>
              <p className='text_about'>Der Empfänger der erhobenen Daten ist Google.</p>
              <h3>Übermittlung in Drittstaaten</h3>
              <p className='text_about'>Die personenbezogenen Daten werden unter dem EU-US Privacy Shield auf Grundlage des Angemessenheitsbeschlusses der Europäischen Kommission in die USA übermittelt. Das Zertifikat können Sie <a href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI" target="_blank">hier</a> abrufen.</p>
              <h3>Dauer der Datenspeicherung</h3>
              <p className='text_about'>Die von uns gesendeten und mit Cookies, Nutzerkennungen (z. B. User-ID) oder Werbe-IDs verknüpften Daten werden nach 14 Monaten automatisch gelöscht. Die Löschung von Daten, deren Aufbewahrungsdauer erreicht ist, erfolgt automatisch einmal im Monat.</p>
              <h3>Betroffenenrechte</h3>
              <p className='text_about'>Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen, indem Sie die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich werden nutzen können.</p>
              <p className='text_about'>Sie können darüber hinaus die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem Sie das <a href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank">Browser-Add-on</a> herunterladen und installieren. Opt-Out-Cookies verhindern die zukünftige Erfassung Ihrer Daten beim Besuch dieser Website. Um die Erfassung durch Universal Analytics über verschiedene Geräte hinweg zu verhindern, müssen Sie das Opt-Out auf allen genutzten Systemen durchführen. Wenn Sie hier klicken, wird das Opt-Out-Cookie gesetzt: <a href="javascript:gaOptout()"><strong>Google Analytics deaktivieren</strong></a></p>
            </div>
          </h1>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
