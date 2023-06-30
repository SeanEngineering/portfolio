import {
    collection,
    getDocs,
    addDoc,
    doc,
    getDoc,
    setDoc,
    deleteDoc,
    updateDoc,
    increment,
} from 'firebase/firestore';
import db from '../config/firebase';

export const getWorkCards = async () => {
    const collectionRef = collection(db, 'portfolioWork');
    const querySnapshot = await getDocs(collectionRef);
    return querySnapshot.docs.map((rawDocs) => {
        return { id: rawDocs.id, ...rawDocs.data() };
    });
};

export const getBookList = async () => {
    const collectionRef = collection(db, 'books');
    const querySnapshot = await getDocs(collectionRef);
    return querySnapshot.docs.map((rawDocs) => {
        return { id: rawDocs.id, ...rawDocs.data() };
    });
};
