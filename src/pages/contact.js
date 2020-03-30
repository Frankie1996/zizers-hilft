import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';

const Contact = () => {
  return (
    <Layout>
      <Head title={`Über uns`} />
      <section className='ui vertical very fitted segment' style={{marginTop: '1rem'}}>
        <div className='ui container'>
          <h1 className='ui header'>
            <div className='content'>
            <span className='page-title'>
              Über uns
            </span>
              <div className='sub header'>
                Das ursprüngliche Projekt wurde vom Tagesanzeiger entwickelt und durch <a href={'mailto:marc.fehr@gmail.com'}>Marc Fehr</a>  weiterentwickelt. Er stellte seinen Code als Open Source Repository auf <a href='https://gitlab.com/marc.fehr/community-isolation-map' target="_blank">Gitlab</a> zur verfügbar. Weiterentwickelt wurde das Projekt durch
              <ul>
                <li><a href="mailto:frank.zinsli@gmail.com">Frank Zinsli</a><ul><li> #ZizersHilftZizers </li></ul></li>
                <li><a href="mailto:beni.aebersold@gmail.com">Bernhard Aebersold</a> <ul><li><a href="https://churhilftchur.ch/" target="_blank">Chur hilft Chur</a> #ChurHilftChur</li></ul></li>
                <li><a href="mailto:me@sandroanderes.ch">Sandro Anderes</a> <ul><li><a href="https://aarau.netlify.com/" target="_blank">Zäme starch</a> #AarauHilftAarau</li></ul></li>
              </ul>
              Jede Rückmeldung ist willkommen!
              </div>
              <h2 className='untertitel'>Ziel des Projekts</h2>
              <p className='text_about'>
              Beim Projekt geht es darum, nachbarschaftlich für einander da zu sein, in einer Zeit, in der man isoliert sein sollte. Ziel ist es, dass weitere solche kleine Communities entstehen. Bitte teilt diese Idee mit euren Freunden.
              </p>
            </div>
          </h1>
        </div>
      </section>

      <section className='ui vertical segment'>
        <div className='ui text container formcontainer'>
          <h2>Shout out on Social Media</h2>
          <p>Teilt doch dieses <a href='https://gitlab.com/marc.fehr/community-isolation-map' target="_blank">Gitlab Repository</a> und helft den Leuten es zu benutzen.</p>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
