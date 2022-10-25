import React, {useState, useEffect} from "react";



const Standings = ({league}) => {
    const [standings, setStandings] = useState(null);

    useEffect(() => {
        fetch(`https://api-football-standings.azharimm.dev/leagues/${league.id}/standings?season=2020&sort=asc`)
            .then((response) => response.json())
            .then(
                (json) => {
                    console.log(json.data)
                    setStandings(json.data);
                }
            );
    }, []);


    return (
        <div className="standings-container">
            <h1>{standings?.name} {standings.season}</h1>
            
            {standings?.standings?.map((standing, i) => {
                return (
                    <div key={i}>
                        <li>{standing.team.name}</li>
                        <p>{standing.stats?.0.name}</p>

                    </div>
                )}
                )}
        </div>
    )
}

export default Standings;