'use client'

import { CardCarouselProps } from '@/app/types';
import React, { useState } from 'react'



const CarouselItem = ({ children, index, activeIndex }: CardCarouselProps) => {

    const [scaled, setScaled] = useState<Boolean>(false);

    const offset = (index - activeIndex) / 4;
    const direction = Math.sign(index - activeIndex);
    const absOffset = Math.abs(offset);

    const cssTransformProperties = `
          rotateY(calc(${offset} * 55deg))
          scaleY(calc(1 +  ${absOffset}  * -0.5))
          translateX(calc( ${direction} * -3.5rem))
          translateZ(calc( ${absOffset} * -35rem))
            scale(${scaled && index === activeIndex ? 1.2 : 1})
        `;

    const cssOpacity = `
        ${Math.abs(index - activeIndex) >= 3 ? '0' : '1'}`;

    const cssDisplay = `
        ${Math.abs(index - activeIndex) >= 3 ? 'none' : 'block'},
    `;

    return (
        <div className="carousel-item" style={{
                transform: cssTransformProperties,
                opacity: cssOpacity,
                display: cssDisplay,
                zIndex: `${scaled ? 100 : 1}`,
            }}
            onClick={() => {
                setScaled(!scaled);
            }}>
            {children}
        </div>
    )
}

export default CarouselItem