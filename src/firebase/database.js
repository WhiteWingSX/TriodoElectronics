import { getFirestore, collection, getDocs, query, where, doc, getDoc, addDoc } from "firebase/firestore";
import { app } from "./config.js";

const db = getFirestore(app);

// Obtener listado de productos
export const getProducts = async() => {
    const querySnapshot = await getDocs(collection(db, "products"));
    const products = [];

    querySnapshot.forEach((doc) => {
        products.push({... doc.data(), id: doc.id});
    });
    return products
}

// Productos por categorias
export const getProductByCategory = async(category) => {
    console.log(category)
    const q = query(collection(db, "products"), where("category", "==", category));
    const querySnapshot = await getDocs(q);
    const categories = [];

    querySnapshot.forEach((doc) => {
        categories.push({...doc.data(), id: doc.id});
    });
    return categories
}

// Obterner producto con id
export const getProduct = async(id) => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        return {... docSnap.data(), id: docSnap.id};
    } else {
        console.log("No such document!");
    }
}

export const createOrder = async(order) => {
    try {
        const docRef = await addDoc(collection(db, "orders"),
            order
        );
        console.log("Document written with ID: ", docRef.id);
        return docRef.id
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}


