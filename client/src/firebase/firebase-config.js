// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCbRBqe8fxVinPTD4gQt_58qRsitBjsW0s',
	authDomain: 'fir-adminsdk-node.firebaseapp.com',
	projectId: 'fir-adminsdk-node',
	storageBucket: 'fir-adminsdk-node.appspot.com',
	messagingSenderId: '888661805044',
	appId: '1:888661805044:web:60385b073508930b895ba1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

export { app, auth, googleProvider };
