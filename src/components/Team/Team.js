import React, { useState, useEffect } from 'react';
import "./Team.css";
import TeamCard from "../TeamCard/TeamCard";
import axios from 'axios';
import { Container, CardDeck } from "react-bootstrap";
// import Table from "../Table/Table"
// import schema from "../../schema.json"

function Team() {

    const [nbaData, setNbaData] = useState([]);

    useEffect(() => {

        const getNBAData = async () => {
            const NBATeams = await axios.get("https://api.sportsdata.io/v3/nba/scores/json/teams?key=b7f466ebf369487fa904c3d202b049d1");
            const playersData = await Promise.all(NBATeams.data.map(async (res) => {
                const players = await axios.get(`https://api.sportsdata.io/v3/nba/stats/json/Players/${res.Key}?key=b7f466ebf369487fa904c3d202b049d1`
                );

                return players.data;
            }));

            setNbaData({ NBATeams: NBATeams , playersData: playersData })
            console.log(nbaData)
            console.log(nbaData.playersData)
        };

        getNBAData();
        
    },[]);


 


    return (
        <div className="team">
            {/* <table id="team" className="team__table">
                    <thead>
                        <tr>{renderHeader()}</tr>
                    </thead>
                    <tbody className='team__body'>
                        {renderBody()}
                    </tbody>
                </table>  */}
            {/* <Container>
                <CardDeck>
                    {
                        nbaData.NBATeams.data.map(team => {
                            return <div>
                                <TeamCard 
                                team={team}
                                key={team.Key}
                                />
                            </div>
                        })
                    }
                </CardDeck>
            </Container> */}
            {/* <Container>
                <CardDeck>
                    {nbaData.map(team => (
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
