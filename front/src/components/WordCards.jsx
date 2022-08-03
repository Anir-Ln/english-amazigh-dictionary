import React from 'react'
import WordCard from './WordCard'

const WordCards = ({words, handleWordClick}) => {
    return (
        <div className='cards-container'>
            {
                words.map((word, index) => {
                    return <WordCard key={index} word={word} handleWordClick={handleWordClick}/>
                })
            }
            {/* {
                words.length === 0 && searchInput !== '' && <WordCard word={{am: "Sorry we don't have this word in the dictionary"}}/>
            } */}
        </div>
    )
}

export default WordCards