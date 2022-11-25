import React, { useEffect, useState } from 'react'
import { storage } from '../../firebase/config'
import { getDownloadURL, ref} from 'firebase/storage'
import { v4 as uuidv4 } from 'uuid'
import useImageCollection from '../../firebase/useImageCollection'
import GalleryCard from '../GalleryCard'
import './Gallery.css'


const Gallery = () => {
    const imageCollection = useImageCollection()
    const [cardCollection, setCardCollection] = useState([])

    useEffect(() => {
        const getImage = async () => {
            let temp = []
            let cardList = await imageCollection
            cardList.map((cardImage) => {
                const reference = ref(storage, cardImage.src[0])
                getDownloadURL(ref(storage, reference)).then((url) => {
                    cardImage.src = url
                    cardImage.key = uuidv4()
                })
                temp.push(cardImage)
            })
            setCardCollection(temp);
        }
        getImage()
    }, [imageCollection])


    return (
        <section className='c-gallery'>
            {cardCollection.map(cardImage => (
                (
                    <div className='c-gallery__card' key={uuidv4()}>
                        <GalleryCard src={cardImage.src} alt={cardImage.alt} />
                    </div>
                )
            ))}
        </section>
    )
}

export default Gallery
