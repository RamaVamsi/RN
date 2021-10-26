import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCcOGexX53OlpnIgabzNRC2Z16v4ThNG2w',

  authDomain: 'firstapp-7686f.firebaseapp.com',

  projectId: 'firstapp-7686f',

  storageBucket: 'firstapp-7686f.appspot.com',

  messagingSenderId: '161720507957',

  appId: '1:161720507957:web:b0cf4fcafc825366501b7c',
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
