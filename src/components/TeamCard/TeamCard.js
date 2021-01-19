import React from 'react';
import "./TeamCard.css"
import { Card, Button } from 'react-bootstrap';

function TeamCard(props) {





    return (
        <div className="teamCard">
            
                
                    <Card.Img className="teamCard__img" variant="top" src={props.team.WikipediaLogoUrl} />
               
                    <Card className="teamCard__card" style={{ minWidth: "5rem" }}>
                        <Card.Body className="teamCard__body">
                            {/* <Card.Title>Card Title</Card.Title> */}
                            <Card.Text style={{ fontSize: "x-small", fontWeight:"600" }}>
                                {props.team.City} {props.team.Name}
                            </Card.Text>
                            <Button variant="link">Players</Button>
                        </Card.Body>
                    </Card>
                
            


        </div>


    )
}

export default TeamCard
