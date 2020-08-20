import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyADF7J4WsP5xY9CZIma4O0x15U4rmapHMk",
    authDomain: "login-124fb.firebaseapp.com",
    databaseURL:"https://login-124fb.firebaseio.com",
    projectId:"login-124fb",
    storageBucket:"login-124fb.appspot.com",
    messagingSenderId:"572218235098",
    appId:"1:572218235098:web:c46d93bc73d65cf0c9ede3"

};

const fire= firebase.initializeApp(config);
export default fire;