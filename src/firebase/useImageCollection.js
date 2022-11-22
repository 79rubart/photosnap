import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./config";

const useImageCollection = () => {
    const [images, setImages] = useState([])
    const imageCollectionRef = collection(db, 'photo-gallery')

    useEffect(() => {
        const getData = async () => {
            const data = await getDocs(imageCollectionRef)
            setImages(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getData();
    }, [])

    return images;
}

export default useImageCollection
