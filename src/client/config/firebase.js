// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
const firebase = require('firebase/app');

const getFirebaseAppConfig = (env) => {
  if (env === 'production' || env === 'PROD') {
    return config.prod;
  } else {
    return config.dev;
  }
};

const initializeFirebaseApp = (env) => {
  const config = getFirebaseAppConfig(env);
  firebase.initializeApp(config);
  console.log('firebase app initialized', env);
};

/**
 * Config for Firebase SDK
 */
const config = {
  prod: {
    apiKey: 'AIzaSyD2-5oKWsaUyVWJwiFV-wP6r4nLG6VWEYQ',
    authDomain: 'small-reminders.firebaseapp.com',
    databaseURL: 'https://small-reminders.firebaseio.com',
    projectId: 'small-reminders',
    storageBucket: 'small-reminders.appspot.com',
    messagingSenderId: '496754968477',
    appId: '1:496754968477:web:5259a4b1dea2a4c8ab5174'
  },
  dev: {
    apiKey: 'AIzaSyBASb5UirVpj-ZG9NQDkKk-qO-kw-tE_C4',
    authDomain: 'small-reminders-dev.firebaseapp.com',
    databaseURL: 'https://small-reminders-dev.firebaseio.com',
    projectId: 'small-reminders-dev',
    storageBucket: 'small-reminders-dev.appspot.com',
    messagingSenderId: '575545435846',
    appId: '1:575545435846:web:e818fee7f899721cbb59c7'
  }
};

module.exports = { initializeFirebaseApp };
