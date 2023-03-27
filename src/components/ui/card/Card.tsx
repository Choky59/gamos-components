import React from 'react'
import './card.css'
export interface CardProps {
    title?: string;
}

export const Card = ({ title = "cardComponent" }: CardProps) => {
    
    return (
        <div>
            <p className='background'>{title}</p>
            {title.toUpperCase()}
        </div>
    )
    
}

export default Card;
