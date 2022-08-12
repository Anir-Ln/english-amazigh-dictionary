import React from 'react'

const Example = ({example}) => {
    return (
        <p className='example'><i>{example ?? ''}</i></p>
    )
}

export default Example