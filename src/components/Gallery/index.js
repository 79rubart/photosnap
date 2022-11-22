import React from 'react'
import { useState } from "react"
import { storage } from '../../firebase/config'
import { getDownloadURL, ref } from 'firebase/storage'
import { uuidv4 } from '@firebase/util'
import useImageCollection from '../../firebase/useImageCollection'


const Gallery = () => {

    const [url, setUrl] = useState('')

    return (
        <section>
            {useImageCollection().map((cardImage) => {
                const reference = ref(storage, cardImage.src[0])
                getDownloadURL(ref(storage, reference)).then((x) => {
                    setUrl(x)
                })
                
            return (
            <div key={uuidv4}>
                <img src={url} alt='' />
            </div>
        )
            })}
        </section>
    )
}

export default Gallery
