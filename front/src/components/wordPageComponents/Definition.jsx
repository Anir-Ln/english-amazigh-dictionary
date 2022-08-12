import React from 'react'
import AmWord from './AmWord'

const Definition = ({definition: {definition, word_type, am_words}}) => {
    return (
        <div className='definition-block'>
            {
                word_type !== '' ? <p className='word-type'>{word_type ?? ''}</p> : ''
            }
            <h3 className='definition-heading'>{definition ?? 'good'}</h3>
            {
                am_words.map((am_word, index) => {
                    return (
                        <AmWord am_word={am_word} key={index}/>
                    )
                })
            }
        </div>
    )
}

export default Definition