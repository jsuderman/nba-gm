import React, { useState, useEffect } from 'react';
import "./TeamCard.css"
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';


function TeamCard(props) {

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        axios.get(`https://api.sportsdata.io/v3/nba/stats/json/Players/was?key=b7f466ebf369487fa904c3d202b049d1`)
            .then(response => {
                setPlayers(response.data);
                // console.log(response.data);
            })
            .catch(err => {
                console.log('Error:' + err);
            })
    }, []);

  

    

    const [toggle, setToggle] = useState(false);

    const toggler = () => {
        toggle ? setToggle(false) : setToggle(true)
    }

    const addPlayer = (PlayerID) => {
        axios.put(`https://api.sportsdata.io/v3/nba/stats/json/Players/${PlayerID}?key=b7f466ebf369487fa904c3d202b049d1`)
        .then(res => {
            const add = players.filter(player => PlayerID !== player.PlayerID)
            setPlayers(add)
            console.log('res', res)
        })
    }

    const renderHeader = () => {
        let headerElement = [ 'FirstName', 'LastName', 'Position', 'Salary']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    const renderBody = () => {
        return players && players.map(({ PlayerID, FirstName, LastName, Position, Salary}) => {
            return (
                <tr key={PlayerID}>
                    <td>{FirstName}</td>
                    <td>{LastName}</td>
                    <td>{Position}</td>
                    <td>{Salary}</td>
                    <td className="teamCard__operation">
                        <button onClick={() => addPlayer(PlayerID)}>Add</button>
                    </td>
                </tr>
            )
        })
    }

    const playerTable = 

        players.map(player => (
            <table id="team" className="team__table" key={player.PlayerID}>
           <thead>
               <tr>{renderHeader()}</tr>
           </thead>
           <tbody className='team__body'>
               {renderBody()}
           </tbody>
       </table> 
       ))
    



    return (
        <div className="teamCard">
            
            <Card.Img className="teamCard__img" variant="top" src={props.team.WikipediaLogoUrl} />

            <Card className="teamCard__card" style={{ minWidth: "5rem" }}>
                <Card.Body className="teamCard__body">
                    {/* <Card.Title>Card Title</Card.Title> */}
                    <Card.Text style={{ fontSize: "x-small", fontWeight: "600" }}>
                        {props.team.City} {props.team.Name}
                    </Card.Text>
                    <Button className="teamCard__button" onClick={toggler}>Players</Button>
                </Card.Body>
            </Card>

            {
               toggle ? playerTable  : null
                
            }



        </div>


    )
}

export default TeamCard
