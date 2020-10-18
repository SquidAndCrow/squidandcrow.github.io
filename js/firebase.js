var firebaseConfig = {
  apiKey: "AIzaSyCNXlYuTWRs3NxeMNBinDU1HGonx7hXF2E",
  authDomain: "dw-characters.firebaseapp.com",
  databaseURL: "https://dw-characters.firebaseio.com",
  projectId: "dw-characters",
  storageBucket: "dw-characters.appspot.com",
  messagingSenderId: "121279645370",
  appId: "1:121279645370:web:5b7843d9e265c6fb48e483"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();