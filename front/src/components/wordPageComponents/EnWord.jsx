import React from 'react'
import Example from './Example'

const EnWord = ({word: {en_word, definition, examples}}) => {
  return (
        <div className='definition-block'>
            {/* <p className='definition-heading'>{en_word.en_word ?? ''}
                <span className='word-type'>{definition.word_type}</span>
            </p>  */}

            <h3 className='definition-heading'>{definition.definition ?? 'hhhh'}</h3>
            {
                examples.map((example, index) => {
                    return (
                        <div className="am-word-block">
                            <h5 className='am-word'>
                                {en_word.en_word ?? ''}
                                <span>{definition.word_type}</span>
                            </h5>
                            <Example example={example.example} key={index}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default EnWord