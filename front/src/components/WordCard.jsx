import React from 'react'
import { Link } from 'react-router-dom'


const WordCard = ({tr_path, word:{id, word, def}, handleWordClick}) => {
    return (
        <Link to={`/${tr_path}/${id}`} className='text-link' onClick={handleWordClick}>
            <div className='word-card'>
                <h3 className='en-word'>{word}</h3>
                <p className='am-definition'>
                    {def ?? ""}
                </p>
            </div>
        </Link>
    )
}

export default WordCard