import React from 'react'
import { Link } from 'react-router-dom'
import image1 from '../assets/img/am_en.jpeg'
import image2 from '../assets/img/en_am.jpeg'

function Home() {
    return (
        <main>
            <div className="blocks">
                <Link to={`/en_am`} className='text-link'>
                    <div className="block block1">
                        {/* <img src={image1}/> */}
                        <h1>From English to Amazigh</h1>
                    </div>
                </Link>
                <Link to={`/am_en`} className='text-link'>
                    <div className="block block2">
                        {/* <img src={image2}/> */}
                        <h1>From Amazigh to English</h1>
                    </div>
                </Link>
            </div>
        </main>
    )
}

export default Home