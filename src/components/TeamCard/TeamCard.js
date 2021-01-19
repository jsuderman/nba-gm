import React from 'react';
import "./TeamCard.css"
import { Card } from 'react-bootstrap';

function TeamCard(props) {

    



    return (
        <div className="teamCard">
            <Card style={{ width: '5rem'}}>
                <Card.Img className="teamCard__img" width="100%" variant="top" src={props.team.WikipediaLogoUrl} />
                <Card.Body className="teamCard__body">
                    {/* <Card.Title>Card Title</Card.Title> */}
                    <Card.Text style={{display: 'flex', flexDirection: "column"}}>
                        {props.team.City} {props.team.Name}
                    </Card.Text>
                </Card.Body>
            </Card>
            
        </div>


    )
}

export default TeamCard
