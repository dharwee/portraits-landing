'use client'

const { ReactLenis } = require('@studio-freight/react-lenis');

export default function Info({ lines }: { lines: string[] | null }){
    return(
        
        <ReactLenis root>
        <div className="info">
            <div className="col">
                <img src='img5.jpg' alt='' />
            </div>
            <div className="col">
                <p>Kaelon is a potrait photographer who captures striking and artistic images. His work focus on light, shadow, and movement, creating portraits that feel both modern and timeless. With a minimal and moody style, he brings out raw emotion and unique beauty in every subject.  </p>
            </div>
        </div>
        </ReactLenis>
    )
}