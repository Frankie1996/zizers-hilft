require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: 'https://zizers-hilft.com/',
    author: 'Frank Zinsli by Marc Fehr',
    title: 'Zizers hilft!',
    description:
      'In Zeiten von Selbstisolation und Social Distancing soll in Zizers niemand alleine sein. Wir helfen uns gegenseitig. Zizers hilft! #ZizersHilftZizers ',
    email: 'frank.zinsli@gmail.com',
    twitter: {
      hashtag: 'yourHashtag',
      handle: 'yourTwitterHandle'
    },
    share: {
      text: 'In Zeiten von Selbstisolation und Social Distancing soll in Zizers niemand alleine sein. Wir helfen uns gegenseitig. Hilf auch du mit! https://zizers-hilft.com/',
      hashtags: 'ZizersHilft,Coronavirus,StayTheFuckHome' // separate with commas,
    },
    menuLinks: [
      {title: 'Home', link: '/', icon: 'map'},
      {title: 'Hinzufügen', link: '/add', icon: 'plus'},
      {title: 'Über uns', link: '/contact', icon: 'info'},
    ],
    mapData: {
      bounds: [
        [9.586834,46.943701], /*Oben links*/
        [9.545397,46.927084] /*Unten rechts*/
      ]
    },
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'UA-156449887-3',
          // Setting this parameter is optional
          anonymize: true
        },
        // Defines the environments where the tracking should be available  - default is ["production"]
        environments: ['production', 'development']
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://zizers-hilft.com/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Zizers hilft!`,
        short_name: `Zizers hilft!`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/logo.png`,
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          databaseURL: process.env.FIREBASE_URL
        }
      }
    },
    {
      resolve: `gatsby-source-firebase`,
      options: {
        // point to the firebase private key downloaded
        // credential: require('./secret/firebase-creds'),

        credential: {
          "type": process.env.FIREBASE_TYPE,
          "project_id": process.env.FIREBASE_PROJECT_ID,
          "private_key": process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
          "client_email": process.env.FIREBASE_CLIENT_EMAIL,
          "client_id": process.env.FIREBASE_CLIENT_ID,
          "auth_uri": process.env.FIREBASE_AUTH_URI,
          "token_uri": process.env.FIREBASE_TOKEN_URI,
          "auth_provider_x509_cert_url": process.env.AUTH_PROVIDER_X509_CERT_URL,
          "client_x509_cert_url": process.env.CLIENT_X509_CERT_URL
        },

        // your firebase database root url
        databaseURL: process.env.FIREBASE_URL,

        // you can have multiple "types" that point to different paths
        types: [
          // if you're data is really simple, this should be fine too
          {
            type: "MapPoints",
            path: "data/",
          }
        ]
      }
    }
  ],
};
