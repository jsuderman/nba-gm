import React, { useState } from 'react';
import "./Navigation.css";

function Navigation(props) {

    const [searchValue, setSearchValue] = useState("");


    const handleInputChange = (event) => {
        event.preventDefault();
        setSearchValue(event.target.value)
        console.log(event.target.value)
    }

    const resetInputField = () => {
        setSearchValue("")
    }

    const searchFunction = (event) => {
        event.preventDefault();
        props.Navigation(searchValue);
        resetInputField();
    }

    

    return (
        <nav className="nav">
            <img 
            className="nav__logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7y1QX0jOOgQweRJIAMHTXyICUFccvFfu8ag&usqp=CAU"
            alt="nbaGM"
            />

            <div className="nav__search">
                <input 
                className="nav__searchInput"
                type="text"
                value={searchValue}
                onChange={handleInputChange}
                placeholder="search player"
                />

                <button type="submit" icon="search" onSubmit={searchFunction}>search</button>
            </div>

            <div className="nav__header">
                <div className="nav__option">
                    <span className="nav__optionLineOne"> 1st line</span>
                    <span className="nav__optionLineTwo"> 2nd line</span>
                </div>
            </div>
        </nav>
    )
}



export default Navigation
