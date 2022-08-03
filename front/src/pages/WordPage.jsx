import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const getDefinition = (am) => {
    return am.replaceAll("֎֎", "\n").replaceAll('  ', ' ').replaceAll('):', '):\n')
}

const WordPage = () => {
    const {en} = useParams()
    const [word, setWord] = useState({})

    useEffect(() => {
        const getWord = async () => {
            const res = await fetch(`/api/words/${en}`)
            const data = await res.json()
            setWord(data[0] ?? {})
        }
        getWord()
    }, [en])

    

    return (
        <div className='word-page'>
            <h1 className='en-word-page'>{word.en ?? ''}</h1>
            <p className='am-definition-page' style={{whiteSpace: "pre-wrap"}}>{getDefinition(word.am ?? '')}</p>
        </div>
    )
}

export default WordPage