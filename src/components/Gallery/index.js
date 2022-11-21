import React from 'react'
import { useEffect, useState } from "react"
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../firebase/config'
const Gallery = () => {

    const [images, setImages] = useState('')
    const imageCollectionRef = collection(db, 'photo-gallery')

    useEffect(() => {
        const getData = async () => {
            const data = await getDocs(imageCollectionRef)
            console.log(data)
        }
        getData();
    }, [])

    return (
        <div>

        </div>
    )

}

export default Gallery
