import React from 'react'

export interface CardProps {
    title?: string;
}

export const Card = ({ title = "cardComponent" }: CardProps) => {
    return (
        <div>
            {title}
            {title.toUpperCase()}
        </div>
    )
}
