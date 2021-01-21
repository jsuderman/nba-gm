import React, { useState, useEffect } from 'react';
import "./Team.css";
import TeamCard from "../TeamCard/TeamCard";
import axios from 'axios';
import { Container, CardDeck } from "react-bootstrap";
// import Table from "../Table/Table"
// import schema from "../../schema.json"

function Team(props) {

    // const url = "https://random-data-api.com/api/stripe/random_stripe"

    const [teams, setTeams] = useState([]);


    useEffect(() => {
        axios.get("https://api.sportsdata.io/v3/nba/scores/json/teams?key=b7f466ebf369487fa904c3d202b049d1")
            .then(response => setTeams(response.data))


    }, []);


 


    return (
        <div className="team">
            {/* <table id="team" className="team__table">
                    <thead>
                        <tr>{renderHeader()}</tr>
                    </thead>
                    <tbody className='team__body'>
                        {renderBody()}
                    </tbody>
                </table> */}
            <Container>
                <CardDeck>
                    {teams.map(team => (
                        <TeamCard
                            team={team}
                            key={team.key}
                        />
                    ))}
                </CardDeck>
            </Container>





            {/* <Table teams={teams}/> */}
        </div>
    )
}

export default Team
