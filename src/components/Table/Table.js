// import React from 'react';
// import './Table.css';


// function Table({ teams }) {

//     const columns = teams[1] && Object.keys(teams[1])
//     // const { id, city, name } = team
//     // return (
//     //     <tr key={id}>
//     //         <td>{id}</td>
//     //         <td>{city}</td>
//     //         <td>{name}</td>
//     //     </tr>
//     // )
//     return (
//         <table cellPadding={0} cellSpacing={0}>
//             <thead>
//                 <tr>{teams[0] && columns.map(heading => <th>{heading}</th>)}</tr>
//             </thead>

//             <tbody>
//                 {teams.map(row => 
//                 <tr>
//                     {
//                         columns.map(column => <td>{row[column]}</td>)
//                     }
//                 </tr>
//                 )}
//             </tbody>
//         </table>
//     )
// }

// export default Table

