import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const Games = () => {
    const [games, setGames] = useState([]);

    useEffect( () => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");

        const requestOptions = {
            method: "GET",
            headers: headers,
        }

        fetch(`http://localhost:8000/games`, requestOptions)
            .then(response => response.json())
            .then(data => {
                setGames(data);
            })
            .catch(error => console.log(error));
    }, [])
    return(
        <>
            <div className="text-center">
                <h2>Games</h2>
                <hr />
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Release Date</th>
                            <th>ESRB Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {games.map( (game) =>
                        <tr key={game.id}>
                            <td>
                                <Link to={`/games/${game.id}`}>{game.title}</Link>
                            </td>
                            <td>{game.release_date}</td>
                            <td>{game.esrb_rating}</td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Games;