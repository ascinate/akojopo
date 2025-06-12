import React from 'react'

function BottomCard() {
    
        const cardData = [
            {
                title: "Card 1",
                subtitle: "Subtitle 1",
                content: [
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
                    "Fuga reprehenderit minus veniam sequi veritatis..."
                ]
            },
            {
                title: "Card 2",
                subtitle: "Subtitle 2",
                content: [
                    "Another card content goes here...",
                    "More text inside the second paragraph..."
                ]
            }
        ];
  return (
 <>
 <div className="container">
                {cardData.map((card, index) => (
                    <div className="card dashboard-card-style" key={index}>
                        <div className="card-body dash-card-style">
                            <h5 className="card-title">{card.title}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{card.subtitle}</h6>
                            {card.content.map((para, i) => (
                                <p className="card-text" key={i}>{para}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
 
 </>
  )
}

export default BottomCard
