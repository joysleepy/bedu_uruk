
import React from "react";
import Card from "react-bootstrap/Card";

const cardListData = [
    {
        image: 'fin_asset_02.jpeg', 
        badges: [
            {
                bg: 'bg-uruk-navy', 
                text: 'Badge 1-1'
            }, 
            {
                bg: 'bg-uruk-cyan', 
                text: 'Badge 1-2'
            }
        ], 
        title: 'Card Title 1', 
        subtitle: 'Card Subtitle 1', 
        text: ' Card 1 text: Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quos neque', 
        links: [
            {
                target: '#', 
                text: 'Link 1-1'
            }, 
            {
                target: '#', 
                text: 'Link 1-2'
            }
        ]

    }, 
    {
        image: 'fin_asset_03.jpeg', 
        badges: [
            {
                bg: 'bg-uruk-navy', 
                text: 'Badge 2-1'
            }, 
            {
                bg: 'bg-uruk-cyan', 
                text: 'Badge 2-2'
            }
        ], 
        title: 'Card Title 2', 
        subtitle: 'Card Subtitle 2', 
        text: ' Card 2 text: Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quos neque', 
        links: [
            {
                target: '#', 
                text: 'Link 2-1'
            }, 
            {
                target: '#', 
                text: 'Link 2-2'
            }
        ]

    }, 
    {
        image: 'fin_asset_04.jpeg', 
        badges: [
            {
                bg: 'bg-uruk-navy', 
                text: 'Badge 3-1'
            }, 
            {
                bg: 'bg-uruk-cyan', 
                text: 'Badge 3-2'
            }
        ], 
        title: 'Card Title 3', 
        subtitle: 'Card Subtitle 3', 
        text: ' Card 3 text: Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quos neque', 
        links: [
            {
                target: '#', 
                text: 'Link 3-1'
            }, 
            {
                target: '#', 
                text: 'Link 3-2'
            }
        ]
    }  
]
                        
function Features(){    
    return(
        <section id="features" className="mt-4">
            <div className="container">
                <div className="row">
                    <div className="col text-center text-uppercase">
                        <small>Conoce Nuestros</small>
                        <h2>Beneficios</h2>
                    </div>
                </div>
                <div className="row">
                    {/* <Card style={{ width: '18rem' }} className="bg-light-gray"> */}
                    {
                        cardListData.map((cardData, index) => 
                            <div key={index} className="col-12 col-sm-6 col-md-4 mb-4">
                                <Card key={index} className="bg-light-gray">
                                    <Card.Img variant="top" src={`./assets/images/`+cardData.image} />
                                    <Card.Body>
                                        <div className="badges text-right mb-2">
                                            {cardData.badges.map((badge, index) => 
                                               <span key={index} className={`badge badge-success ` + badge.bg}> {badge.text} </span>
                                            )}   
                                        </div>
                                    
                                        <Card.Title>{cardData.title}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{cardData.subtitle}</Card.Subtitle>
                                        
                                        <Card.Text>
                                            {cardData.text}
                                        </Card.Text>

                                        {cardData.links.map((lnk, index) => 
                                            <Card.Link key={index} href={lnk.target}>{lnk.text}</Card.Link>
                                        )}     
                                    </Card.Body>
                                </Card>
                            </div>
                        ) 
                    }
                </div>
            </div>
        </section>
    );
}
export default Features; 