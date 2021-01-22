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
    const [teamKeys, setTeamKeys ] = useState([]);

    // const getPlayerId = id => axios.get(`https://api.sportsdata.io/v3/nba/stats/json/Players/${id}?key=b7f466ebf369487fa904c3d202b049d1`)

    useEffect(() => {

        const getTeamData = async () => {
            const NBATeams = await axios.get("https://api.sportsdata.io/v3/nba/scores/json/teams?key=b7f466ebf369487fa904c3d202b049d1");
            const playersData = await Promise.all(NBATeams.data.map(async (res) => {
                const players = await axios.get(`https://api.sportsdata.io/v3/nba/stats/json/Players/${res.Key}?key=b7f466ebf369487fa904c3d202b049d1`
                );

                return players.data;
            }));

            setTeams({ NBATeams: NBATeams , playersData: playersData })
            console.log(teams)
        };

        getTeamData();
        

        // axios.get("https://api.sportsdata.io/v3/nba/scores/json/teams?key=b7f466ebf369487fa904c3d202b049d1")
        //     .then(response => {
        //         setTeams(response.data)
        //         console.log(response.data)
        //     return teams
            
        // })
        // .then(teams.filter(team => team.Key).map(filteredTeam => (
        //    {filteredTeam} 
        // )))
        // .then(teams => axios.get(`https://api.sportsdata.io/v3/nba/stats/json/Players/${teams[9].Key}?key=b7f466ebf369487fa904c3d202b049d1`))
        // .then(response => {
        //     setTeamKeys(response.data);
        //     console.log(teamKeys)
        // })
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
            {/* <Container>
                <CardDeck>
                    {teams.map(team => (
                        <TeamCard
                            team={team}
                            key={team.key}
                        />
                    ))}
                </CardDeck>
            </Container> */}





            {/* <Table teams={teams}/> */}
        </div>
    )
}

export default Team
