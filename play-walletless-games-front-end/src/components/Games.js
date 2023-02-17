import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const Games = () => {
    const [games, setGames] = useState([]);

    useEffect( () => {
        let gamesList = [
            {
                id: 1,
                title: "The Legend of Zelda: Breath of the Wild",
                release_date: "2017",
                esrb_rating: "E10+",
                genre: "Action-Adventure",
                description: "Sample description"
            },
            {
                id: 2,
                title: "Mario Kart 8 Deluxe",
                release_date: "2017",
                esrb_rating: "E",
                genre: "Racing",
                description: "Sample description"
            },
        ];
        setGames(gamesList)
    })
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