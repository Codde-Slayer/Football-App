import React, { useState, useEffect } from "react";
import "../App.css";

const Leagues = ({setLeague, setActive}) => {
    const [leagues, setLeagues] = useState([]);

    useEffect(() => {
        fetch('https://api-football-standings.azharimm.dev/leagues')
            .then((response) => response.json())
            .then(
                (json) => {
                   
                    setLeagues(json.data);
                }
            );
    }, []);

    return (
        <div className="leagues-container">
            {leagues?.map((league, i) => {
                return (
                    <div key={i}  className="league-item">
                        <img src={league.logos.light} alt="league" />
                        <h2 className="league-name">{league.name}</h2>
                        <p>{league.id}</p>
                        </div>
                        )
            })}


                    </div>
                )
            }
export default Leagues