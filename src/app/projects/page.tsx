'use client'

const { ReactLenis } = require('@studio-freight/react-lenis');


export default function Projects(){
    return(
        <ReactLenis root>
        <div className="projects">
            <div className="images">
                <img src='/img1.jpg' alt='' />
                <img src='/img2.jpg' alt='' />
                <img src='/img3.jpg' alt='' />
                <img src='/img4.jpg' alt='' />
            </div>
        </div>
        </ReactLenis>
    )
}