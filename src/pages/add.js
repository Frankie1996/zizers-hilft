import React from 'react';
import { Link } from 'gatsby'
/* SEO Component with React Helmet */
import Head from '../components/head'
import Layout from '../components/layout'
import { MapAddComponent } from '../components/mapview.add'

const Add = () => {
  return (
    <Layout>
      <Head title={`Eintrag hinzufügen`} />
      <div className='index'>
        <section className='ui vertical very fitted segment' style={{marginTop: '1rem'}}>
          <div className='ui container'>
            <h1 className='ui header'>
              <div className='content'>
              <span className='page-title'>
                Eintrag hinzufügen.
              </span>
                <div className='sub header'>
                Füge deine Information oder deine Hilfestellung in die interaktive Karte ein, damit wir unseren Nachbarn und lokalen Geschäften helfen können.
                </div>
              </div>
            </h1>
          </div>
        </section>

        <section className='ui vertical segment'>
          <div className='ui text container formcontainer'>
          <h2>Wie funktioniert die Karte?</h2>
            <p>
            Wähle einen Ort auf der Karte, an dem die Informationen angezeigt werden sollen. Du wirst gebeten, uns einige Informationen über deinen Eintrag zu geben, bevor du ihn abschicken kannst. <strong>Wir werden alle Einträge manuell überprüfen.</strong> Sobald dein Eintrag genehmigt ist, wird dieser auf der Karte angezeigt.
            </p>{' '}
            <Link to='/'>
              Zur Karte wechseln
            </Link>
          </div>
        </section>
        <section>
          <MapAddComponent />
        </section>

      </div>
    </Layout>
  );
};

export default Add;
