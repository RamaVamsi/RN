import auth from '@react-native-firebase/auth';

import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAiZHH3X0TSd1NC__GQA3QgSN4XvHu2AGM',

  authDomain: 'firstapp-e24ae.firebaseapp.com',

  projectId: 'firstapp-e24ae',

  storageBucket: 'firstapp-e24ae.appspot.com',

  messagingSenderId: '815782836759',

  appId: '1:815782836759:web:630eea845eb9bd64d87a52',
};

if (!firebase.apps.length) {
  export default firebase = firebase.initializeApp(firebaseConfig);
}

// const firebaseConfig = {
//   apiKey: 'AIzaSyDglwlsppvvvq5-yfins9W0v7cHSrv0y-o',

//   authDomain: 'firstapp-af8b7.firebaseapp.com',

//   projectId: 'firstapp-af8b7',

//   storageBucket: 'firstapp-af8b7.appspot.com',

//   messagingSenderId: '34502739380',

//   appId: '1:34502739380:android:69b5a7192be50ec9ae5ee1',
// };

// export const firebaseApp = firebase.initializeApp(firebaseConfig);
