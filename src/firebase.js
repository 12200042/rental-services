
import { initializeApp} from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
 apiKey: "AIzaSyCVcWf7VtM69-DoI38Igjg-Csle_1Hnc5Y",
  authDomain: "rental-201.firebaseapp.com",
  databaseURL: "https://rental-201-default-rtdb.firebaseio.com",
  projectId: "rental-201",
  storageBucket: "rental-201.appspot.com",
  messagingSenderId: "168496105142",
  appId: "1:168496105142:web:0bc2f444c4b49e19fc4817"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth()
export const storage = getStorage(app);
export function logout(){
  signOut(auth);
}





