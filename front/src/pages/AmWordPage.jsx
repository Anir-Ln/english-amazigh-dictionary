import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import EnWord from '../components/wordPageComponents/EnWord'


const AmWordPage = () => {
    const {id_am_word} = useParams()
    const [words, setWords] = useState([])

    useEffect(() => {
        const getWords = async () => {
            const res = await fetch(`/api/am_word/${id_am_word}`)
            const data = await res.json()
            setWords(data ?? {})
            // console.log(data)
        }
        getWords()
    }, [id_am_word])

    // return <p></p>
    if (!words || !words[0]?.am_word) 
        return <p>word not found</p>
    
    
    return (
        <div className='word-page'>
            <h1 className='en-word-page'>{words[0].am_word ?? ''}</h1>
            { words.map((word, index) => {
                return (
                    <EnWord word={word} key={index}/>
                )
            })}
            {/* <p className='am-definition-page' style={{whiteSpace: "pre-wrap"}}>{ word.definitions ?? '' }</p> */}
        </div>
    )
}

export default AmWordPage