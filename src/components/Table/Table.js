import React from 'react';
import './Table.css';


function Table() {

    const renderHeader = () => {
        let headerElement = [ 'city', 'Name']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    const renderBody = () => {
        return teams && teams.map(({ TeamID, City, Name}) => {
            return (
                <tr key={TeamID}>
                    <td>{City}</td>
                    <td>{Name}</td>
                </tr>
            )
        })
    }


    return (

        <table id="team" className="team__table">
            <thead>
                <tr>{renderHeader()}</tr>
            </thead>
            <tbody className='team__body'>
                {renderBody()}
            </tbody>
        </table>
    )
}

export default Table

