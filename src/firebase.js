import firebaseConfig from "./secret";
import firebase from "firebase";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export const storage = firebase.storage();

export const database  ={
    users: firestore.collection('users'),
    createdAt: firestore.FieldValue
}
export default firebase;