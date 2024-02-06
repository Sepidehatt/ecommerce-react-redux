import * as firebase from 'firebase/app';
import 'firebase/firestore';
import * as auth from 'firebase/auth';
import { firebaseConfig } from './config';

firebase.initializeApp(firebaseConfig);

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();

const GoogleProvider = new auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () =>
  firebase.auth.signInWithPopup(GoogleProvider);

export default firebase; // Add this line to export firebase as the default export
