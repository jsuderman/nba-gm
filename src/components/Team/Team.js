import React, { useState, useEffect } from 'react';
import TeamCard from "../TeamCard/TeamCard";
import axios from 'axios';

function Team(props) {

    // const url = "https://random-data-api.com/api/stripe/random_stripe"

    const [ teams, setTeams ] = useState([]);
    

    useEffect(() => {
        axios.get("https://api.sportsdata.io/v3/nba/scores/json/teams?key=b7f466ebf369487fa904c3d202b049d1")
        .then(response => setTeams(response.data))
        
        
    },[]);
    

    return (
        <div className="team">
            <div>
                {teams.map(team => (
                    <TeamCard 
                    team={team}
                    key={team.key}
                    />
                ))}
            </div>
            
        </div>
    )
}

export default Team
