import React from 'react';
import { Card } from 'react-bootstrap';

function TeamCard(props) {
    return (
        <div className="teamCard">
            <Card style={{ width: '10rem' }}>
                <Card.Img variant="top" src={props.team.WikipediaLogoUrl} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        {props.team.City} {props.team.Name}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default TeamCard
