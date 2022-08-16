import React from 'react'
import WordCard from './WordCard'

const WordCards = ({words, handleWordClick, tr_path}) => {
    return (
        <div className='cards-container'>
            {
                words.map((word, index) => {
                    return <WordCard key={index} tr_path={tr_path} word={word} handleWordClick={handleWordClick}/>
                })
            }
            {/* {
                words.length === 0 && searchInput !== '' && <WordCard word={{am: "Sorry we don't have this word in the dictionary"}}/>
            } */}
        </div>
    )
}

export default WordCards