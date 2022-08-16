import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Definition from '../components/wordPageComponents/Definition'


const EnWordPage = () => {
    const {id_en_word} = useParams()
    const [word, setWord] = useState({})

    useEffect(() => {
        const getWord = async () => {
            const res = await fetch(`/api/en_word/${id_en_word}`)
            const data = await res.json()
            let w_type = ''
            for (let i=0; i<data.definitions.length; i++) {
                if (data.definitions[i].word_type === w_type)
                    data.definitions[i].word_type = ''
                else
                    w_type = data.definitions[i].word_type
            }
            setWord(data ?? {})
            // console.log(data)
        }
        getWord()
    }, [id_en_word])

    // return <p></p>
    if (!word || !word.en_word) 
        return <p>word not found</p>
        
    return (
        <div className='word-page'>
            <h1 className='en-word-page'>{word.en_word ?? ''}</h1>
            { word.definitions.map((definition, index) => {
                return (
                    <Definition definition={definition} key={index}/>
                )
            })}
            {/* <p className='am-definition-page' style={{whiteSpace: "pre-wrap"}}>{ word.definitions ?? '' }</p> */}
        </div>
    )
}

export default EnWordPage