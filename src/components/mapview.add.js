import React, { useState } from 'react'
import './mapview.add.scss'
import AnimatedMap from './map-add/animatedmap/component.js'
import categories from '../components/categories'
import { useStaticQuery, graphql, Link } from 'gatsby';
import firebase from "gatsby-plugin-firebase";

const scrollToElement = require('scroll-to-element');

/*
See gatsby-config.js in main dir for bounds
 */

export function MapAddComponent() {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title,
          share {
            text,
            hashtags
          },
          mapData {
            bounds
          }
        },
      }
    }
  `);

  const [mapActive, setMapActive] = useState(false);
  const [map, setMap] = useState(null);
  const [positionSelected, setPositionSelected] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [showError, setShowError] = useState(false);
  const [content, setContent] = useState({
    position: [],
    category: '',
    title: '',
    description: '',
    contact: '',
    address: '',
    phone: '',
    email: '',
    name: '',
    timestamp: Date.now(),
    approved: false
  })

  const onChange = e => {
    // content[e.target.name] = e.target.value
    const c = { ...content }
    c[e.target.name] = e.target.value
    setContent(c)
  };

  React.useEffect(() => {
    if (mapActive) {
      map.on('click', e => {
        const pos = [e.lngLat.lng, e.lngLat.lat]

        console.log(pos);
        setContent({ ...content, position: pos })
        map.getSource('position').setData({
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              geometry: { type: 'Point', coordinates: pos }
            }
          ]
        })
      });

      // Fit effect
      map.fitBounds(
        data.site.siteMetadata.mapData.bounds,
        { duration: 700 }
      )
    }
  }, [mapActive]);

  React.useEffect(() => {
    scrollToElement('#formcontent')
  }, [positionSelected]);

  React.useEffect(() => {
    if (formSent === true) {
      const newPostKey = firebase
        .database()
        .ref()
        .child('data')
        .push().key

      firebase
        .database()
        .ref('/data/' + newPostKey)
        .update(content)
        .then(() => {
          console.log('Writing done')
        })
        .catch(e => {
          console.log('error', e)
        })
    }
  }, [formSent])

  const validateForm = () => {
    let error = false
    error = content.title.length === 0 ? true : error
    error = content.description.length === 0 ? true : error
    error = content.address.length === 0 ? true : error
    error = content.contact.length === 0 ? true : error
    error = content.name.length === 0 ? true : error
    error = content.email.length === 0 ? true : error
    error = content.category.length === 0 ? true : error

    if (error) {
      setShowError(true)
    } else {
      setFormSent(true)
    }
  }

  return (
    <div id={'map-add-component'}>
      <div
        id='mapcontainer'
        style={{ display: positionSelected ? 'none' : 'inherit' }}
      >
        <AnimatedMap getMapObject={m => setMap(m)} enabled={mapActive} />
        {!mapActive && (
          <div id='overlay' className='box'>
            <h3>Neue Information hinzufügen</h3>
            <p>
            Wählen Sie eine Position auf der Karte innerhalb der Gemeindegrenzen, um Teil von <strong><i>Zizers hilft!</i></strong> zu werden.
            </p>
            <button
              className='ui primary button'
              onClick={() => setMapActive(true)}
            >
              Karte aktivieren und Dienstleistung hinzufügen
            </button>
          </div>
        )}

        {content.position.length > 0 && (
          <div id='selectThisPoint' className='box'>
            <h3>Sie haben eine Position gewählt</h3>
            <p>Wollen Sie diese verwenden?</p>
            <div className='ui buttons'>
              <button
                className='ui button'
                onClick={() => {
                  setContent({ ...content, position: [] })
                }}
              >
                Nein, neue Position wählen...
              </button>
              <button
                className='ui positive button'
                onClick={() => setPositionSelected(true)}
              >
                Ja!
              </button>
            </div>
          </div>
        )}
      </div>

      {positionSelected && !formSent && (
        <div id='formcontent' className='ui vertical segment'>
          <div className='ui text container formcontainer'>
            <button
              className='ui left labeled icon button compact'
              onClick={() => {
                setPositionSelected(false)
                setContent({ ...content, position: [] })
              }}
            >
              <i className='left arrow icon' />
              Ort ändern
            </button>
            <div className='ui form'>
              <h4 className='ui horizontal divider header'>
                Über deine Dienstleistung (öffentlich)
              </h4>
              <p>
              Bitte beanworte die folgenden Fragen. Diese Informationen werden nach einer Kontrolle von uns auf der Karte erscheinen. Aktuell kann nur <strong>eine Kategorie</strong> pro Service ausgewählt werden. Wenn du mehr als eine Hilfestellung anbieten kannst, musst du mehrere Punkte in der Karte setzen.
              </p>

              <div className='field'>
                <label>Kategorie</label>
                <select
                  value={content.category}
                  className='ui dropdown'
                  onChange={e =>
                    setContent({ ...content, category: e.target.value })
                  }
                >
                  <option value='' />
                  {categories.map(c => (
                    <option value={c.ident} key={c.ident}>
                      {c.text}
                    </option>
                  ))}
                </select>
                {/*
                <CategoryButtons
                  onClick={name => setContent({ ...content, category: name })}
                  selected={content.category}
                /> */}
              </div>

              <div className='field required'>
                <label>Titel des Angebots</label>
                <input
                  type='text'
                  name='title'
                  value={content.title}
                  onChange={onChange}
                  placeholder='Ich gehe für Sie einkaufen / mit dem Hund spazieren etc...'
                />
              </div>

              <div className='field required'>
                <label>Das bietest du an</label>
                <textarea
                  rows={4}
                  name='description'
                  onChange={onChange}
                  placeholder='Schreibe einen kurzen Text, der deinen Service oder deine Information beschreibt'
                  defaultValue={content.description}
                />
              </div>

              <div className='field required'>
                <label>Wie kann man dich kontaktieren</label>
                <textarea
                  rows={4}
                  name='contact'
                  placeholder='Das ist die Kontaktadresse, welche die Webseitenbesucher sehen werden. Bsp: Whatsapp: 079 123 45 67, E-Mail: max.mustermann@mail.com'
                  defaultValue={content.contact}
                  onChange={onChange}
                />
              </div>

              <div className='field required'>
                <label>Deine Adresse</label>
                <textarea
                  rows={4}
                  name='address'
                  placeholder='Bsp: Beispielweg 10, 7205 Zizers. Diese Angaben, benötigen wir um deine Eingabe zu überprüfen.'
                  defaultValue={content.address}
                  onChange={onChange}
                />
              </div>

              <h4 className='ui horizontal divider header'>
                Weitere Informationen
              </h4>
              <p>
                Diese Informationen sind nicht öffentlich zugänglich.
              </p>

              <div className='field required'>
                <label>Vor- und Nachname</label>
                <input
                  type='text'
                  name='name'
                  placeholder='Max Mustermann'
                  defaultValue={content.name}
                  onChange={onChange}
                />
              </div>

              <div className='field required'>
                <label>Deine E-Mailadresse</label>
                <input
                  type='text'
                  name='email'
                  placeholder='max.mustermann@mail.com'
                  defaultValue={content.email}
                  onChange={onChange}
                />
              </div>

              <div className='field'>
                <label>Telefonnummer (freiwillig)</label>
                <input
                  type='text'
                  name='phone'
                  placeholder='079...'
                  defaultValue={content.phone}
                  onChange={onChange}
                />
              </div>
              <p>Mit dem Abschicken willigst du ein, dass die weiter oben gemachten Angaben auf dieser Webseite öffentlich ersichtlich sind.</p>

              {showError && (
                <div className='ui negative message'>
                  <div className='header'>Fehlende Eingaben</div>
                  <p>
                    Bitte fülle alle erforderlichen Felder aus.
                  </p>
                </div>
              )}

              <div className='ui buttons'>
                <button className='ui positive button' onClick={validateForm}>
                  Senden
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {formSent && (
        <div className='ui vertical segment'>
          <div className='ui text container'>
            <div className='ui success message'>
              <div className='header'>Vielen Dank!</div>
              <p>
                Deine Daten wurden übermittelt und werden nach der Überprüfung auf der Website angezeigt werden.{' '}
                <Link to='/'>{' '}{data.site.siteMetadata.title}
                </Link>{' '}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className='ui vertical segment'>
        <div className='ui text container formcontainer'>
          <h2>Was geschieht mit meinen Daten?</h2>
          <p>Die Administratoren prüfen deinen Eintrag und fügen ihn der interaktiven Karte hinzu. Dies dauert normalerweise <strong>weniger als 24 Stunden</strong>. Keine Angst, deine Daten werden <strong>nicht an Dritte weitergegeben.</strong></p>
          <h2>Welche Einträge werden bewilligt?</h2>
          <p>Jeder kann Teil der Gemeinschaft werden. Ob du Kindern über Skype Bücher vorliest, jeden Mittwoch ein paar Scheiben deines leckeren Sauerteigbrotes lieferst oder einfach einen neuen Take-away-Service für deine Produkte startest - hier bist du richtig.</p>
          <h2>Wie kann ich meine Daten entfernen?</h2>
          <p>Wenn du einen Eintrag von der Karte <strong>löschen</strong> möchtest, dann schick eine Nachricht an{' '}
          <a
            href='mailto:frank.zinsli@gmail.com'
          >
           meine E-Mail Adresse.
          </a></p>
          <h2>Was können wir verbessern?</h2>
          <p>Wir haben für jedes Anliegen ein offenes Ohr und danken dir bereits jetzt für dein konstruktives Feedback via <a
          href='mailto:frank.zinsli@gmail.com'
        >
          Mail
        </a>. </p>
          <h2>Warum nur in Zizers?</h2>
          <p>Zur Verhinderung einer weiteren Ausbreitung des Coronavirus, müssen wir unser Leben aktuell so lokal und isoliert wie möglich führen. Das Projekt <strong><i>Zizers hilft!</i></strong> soll Menschen in einer vergleichsweise kleinen Community zusammenbringen, damit einander im Sinne einer Nachbarschaftshilfe geholfen werden kann. Die Idee dahinter stammt vom Web-Entwickler Marc Fehr, der während sechs Monaten pro Jahr in Südafrika arbeitet. Für seine lokale Community hat er {' '}
          <a
          href='https://www.whozinberg.org' target="_blank"
        >
            whozinberg.org
        </a>{' '}ins Leben gerufen, das identisch wie <i>"Zizers hilft!"</i> funktioniert. Dankbarerweise stellt er seinen Programmiercode auf einer <strong>Open Source Repository</strong> von           <a
          href='https://gitlab.com/marc.fehr/community-isolation-map' target="_blank"
        >
            Gitlab
        </a> zur Verfügung, damit sich weitere Communities wie <i>"Zizers hilft!"</i> bilden lassen. </p>
        </div>
      </div>
    </div>
  )
}
