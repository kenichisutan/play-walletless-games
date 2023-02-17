import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const Game = () => {
    const [game, setGame] = useState({});
    let { id } = useParams();

    useEffect(() => {
         let game = {
             id: 1,
             title: "The Legend of Zelda: Breath of the Wild",
             release_date: "2017",
             esrb_rating: "E10+",
             genre: "Action-Adventure",
             description: "Sample description"
          };
          setGame(game)
    }, [id])

    return(
        <div>
            <h2>Game: {game.title}</h2>
            <small><em>{game.release_date}, Genre: {game.genre}, Rating: {game.esrb_rating}</em></small>
            <hr/>
            <p>{game.description}</p>
        </div>
    )
}

export default Game;