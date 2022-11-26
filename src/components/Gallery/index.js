import React, { useEffect, useState } from 'react'
import { storage } from '../../firebase/config'
import { getDownloadURL, ref } from 'firebase/storage'
import { v4 as uuidv4 } from 'uuid'
import useImageCollection from '../../firebase/useImageCollection'
import GalleryCard from '../GalleryCard'
import './Gallery.css'


const Gallery = () => {
    const imageCollection = useImageCollection()
    const [cardCollection, setCardCollection] = useState([])

    useEffect(() => {
        const fetchImages = () =>{
            let result =  imageCollection.map((cardImage) => {
                let getUrl = async () =>{
                    const reference = await ref(storage, cardImage.src[0])
                    const url = await getDownloadURL(ref(storage, reference))
                    cardImage.src = url
                    return cardImage
                }    
                return getUrl()
        })
            return Promise.all(result)
            }

            const loadImages = async () => {
                const urls = await fetchImages()
                setCardCollection(urls)
            }
            loadImages()
    }, [imageCollection])


    return (
        <section className='c-gallery'>
            {cardCollection.length !== 0 ? cardCollection.map(cardImage => (
                (
                    <div className='c-gallery__card' key={uuidv4()}>
                        <GalleryCard src={cardImage.src} author={cardImage.author}  alt={cardImage.alt} date={cardImage.date} title={cardImage.title} />
                    </div>
                )
            )) : ""}
        </section>
    )
}

export default Gallery
