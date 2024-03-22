import React from 'react';

const Card = ({ title, content }) => (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{content}</p>
    </div>
);

const CardsContainer = ({ cards }) => (
    <div className="flex flex-wrap justify-around">
        {cards.map((card, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <Card title={card.title} content={card.content} />
            </div>
        ))}
    </div>
);

export default CardsContainer;

  