import React, { useState, useEffect } from "react";
//import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
//import loader from "react-loader-spinner";

const Standings = ({ championat }) => {
    const [standing, setStanding] = useState([]);
    const [standin, setStandin] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedLeague, setSelectedLeague] = useState(championat ? championat.id : "eng.1")
    const [selectedYear, setSelectedYear] = useState('2021');

    useEffect(() => {
        setLoading(true)
        fetch(`https://api-football-standings.azharimm.dev/leagues/${selectedLeague}/standings?season=${selectedYear}`)
            .then((response) => response.json())

            .then(
                (json) => {
                    setStanding(json.data.standings);
                    setStandin(json.data);
                    console.log(standin)
                    console.log(standing)
                }
            )
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [selectedLeague, selectedYear]);

    return (
        <div className="standings-container">

            <div className="select-container">
                <select
                    name="selet-league"
                    id="select-league"
                    defaultValue={selectedLeague}
                    onChange={(e) => setSelectedLeague(e.target.value)}
                >
                    <option value="arg.1">Argentine Liga Profesional de Fútbol</option>
                    <option value="aus.1">Australian A-League</option>
                    <option value="bra.1">Brazilian Serie A</option>
                    <option value="chn.1">Chinese Super League</option>
                    <option value="ned.1">Dutch Eredivisie</option>
                    <option value="eng.1">English Premier League</option>
                    <option value="fra.1">French Ligue 1</option>
                    <option value="ger.1">German Bundesliga</option>
                    <option value="idn.1">Indonesian Liga 1</option>
                    <option value="ita.1">Italian Serie A</option>
                    <option value="jpn.1">Japanese J League</option>
                    <option value="mys.1">Malaysian Super League</option>
                    <option value="mex.1">Mexican Liga BBVA MX</option>
                    <option value="por.1">Portuguese Liga</option>
                    <option value="rus.1">Russian Premier League</option>
                    <option value="sgp.1">Singaporean Premier League</option>
                    <option value="esp.1">Spanish Primera División</option>
                    <option value="tha.1">Thai Premier League</option>
                    <option value="tur.1">Turkish Super Lig</option>
                    <option value="uga.1">Ugandan Super League</option>

                </select>
                <select
                    name="select-year"
                    id="select-year"
                    defaultValue={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}>

                    <option value="2011">2011</option>
                    <option value="2012">2012</option>
                    <option value="2013">2013</option>
                    <option value="2014">2014</option>
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2010">2010</option>
                    <option value="2021">2021</option>
                    <option value="2022">2021</option>
                </select>
            </div>

            <div className="standings-result">

                <div className="heading">
                    <p>Rank</p>
                    <p>Logo</p>
                    <div className="team">Team</div>
                    <span>G.P</span>
                    <span>W</span>
                    <span>L</span>
                    <span>D</span>
                    <span>G. Scored</span>
                    <span>G. Against</span>
                    <span>G. Differece</span>
                    <span>Points</span>
                </div>

                {standing?.map((stan, i) => {
                    return (
                        <div>
                            <div key={i} className="standing-item">

                                <p>{stan?.stats[10]?.value}</p>
                                <p><img src={stan?.team?.logos[0]?.href} /></p>
                                <div className="team">{stan?.team?.name}</div>
                                <span>{stan?.stats[0]?.value}</span>
                                <span>{stan?.stats[6]?.value}</span>
                                <span>{stan?.stats[1]?.value}</span>
                                <span>{stan?.stats[5]?.value}</span>
                                <span>{stan?.stats[4]?.value}</span>
                                <span>{stan?.stats[3]?.value}</span>
                                <span>{stan?.stats[8]?.value}</span>
                                <span>{stan?.stats[2]?.value}</span>
                            </div>
                        </div>
                    )
                })}
            </div>


        </div>
    )
}

export default Standings;