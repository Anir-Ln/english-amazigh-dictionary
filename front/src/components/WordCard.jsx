import React from 'react'
import { Link } from 'react-router-dom'


const WordCard = ({word, handleWordClick}) => {
    return (
        <Link to={`/${word.id}`} className='text-link' onClick={handleWordClick}>
            <div className='word-card'>
                <h3 className='en-word'>{word.en_word}</h3>
                <p className='am-definition'>
                    {/* {`${word.am.substring(0, 50)} ...`} */}
                </p>
            </div>
        </Link>
    )
}

export default WordCard