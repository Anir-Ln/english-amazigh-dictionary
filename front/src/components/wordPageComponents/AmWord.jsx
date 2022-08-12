
import React from 'react'
import Example from './Example'

const AmWord = ({am_word}) => {
    return (
        <div className='am-word-block'>
            <h5 className='am-word'>{am_word.am_word ?? ''}</h5>
            {
                am_word.examples.map((example, index) => {
                    return (
                        <Example key={index} example={example.example ?? ''}/>
                    )
                })
            }
        </div>
    )
}

export default AmWord