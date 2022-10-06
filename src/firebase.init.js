// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCy4SGouGkbK_JrWn3aSrRXYFejnmqQa08",
  authDomain: "wholsale-market-5dc54.firebaseapp.com",
  projectId: "wholsale-market-5dc54",
  storageBucket: "wholsale-market-5dc54.appspot.com",
  messagingSenderId: "878796551637",
  appId: "1:878796551637:web:2be648f91f7aa657ebf95c",
  measurementId: "G-5Q4Q61NP5K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;