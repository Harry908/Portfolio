/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useRef, type ReactNode } from 'react'
type Card = {
    review: string;
    imgPath: string;
    logoPath: string;
    title: string;
    date: string;
    responsibilities: string[];
}

type GlowCardProps = {
    card: Card;
    children: ReactNode;
    index: number;
}

const GlowCard = ({ card, children, index }: GlowCardProps) => {

    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    const handleMouseMove = (index: number) => (e: React.MouseEvent<HTMLDivElement>) => {
        const card = cardRefs.current[index];
        if (!card) return;

        //Get mouse pos relative to card
        const rect = card.getBoundingClientRect();
        const mouseX = e.clientX - rect.left - rect.width / 2;
        const mouseY = e.clientY - rect.top - rect.height / 2;

        let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI)

        angle = (angle + 360) % 360;
        card.style.setProperty('--start', `${angle + 60}`)
    }
    return (
        <div ref={(el) => {
            cardRefs.current[index] = el;
        }}
            onMouseMove={handleMouseMove(index)}
            className="card card-border timeline-card rounded-xl p-10">
            <div className='glow' />
            <div className='flex items-center gap-1 mb-5'>
                {Array.from({ length: 5 }, (_, i) => (
                    <img src="/images/star.png" key={i} alt='star' />
                ))}
            </div>
            <div className='mb-5'>
                <p className='text-white-50 text-lg'>{card.review}</p>
            </div>
            {children}
        </div>
    )
}

export default GlowCard