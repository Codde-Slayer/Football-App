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
                    <div key={i} onClick={() => {setLeague(league); setActive(false)}} className="league-item">
                        <h2 className="league-name">{league.name}</h2>
                        <img src={league.logos.light} alt="league" />
                        <p>{league.id}</p>
                        </div>
                        )
            })}


                    </div>
                )
            }
export default Leagues