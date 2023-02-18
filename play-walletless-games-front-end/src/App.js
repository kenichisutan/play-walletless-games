import {Link, Outlet} from "react-router-dom";
import {useState} from "react";

function App() {
    const [jwtToken, setJwtToken] = useState("");

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="mt-3">Play Walletless Games!</h1>
                </div>
                <div className="col text-end">
                    {jwtToken === ""
                        ? <Link to="/login"><a href="#!"><span className="badge bg-success">Login</span></a></Link>
                        : <a href="#!"><span className="badge bg-danger">Logout</span></a>
                    }
                </div>
                <hr className="mb-3"></hr>
            </div>
            <div className="row">
                <div className="col-md-2">
                    <nav>
                        <div className="list-group">
                            <a href="/" className="list-group-item list-group-item-action">Home</a>
                            <a href="/games" className="list-group-item list-group-item-action">Games</a>
                            <a href="/genres" className="list-group-item list-group-item-action">Genres</a>
                            {jwtToken !== "" &&
                                <>
                                    <a href="/admin/game/0" className="list-group-item list-group-item-action">Add
                                        Game</a>
                                    <a href="/manage" className="list-group-item list-group-item-action">Manage</a>
                                    <a href="/graphql" className="list-group-item list-group-item-action">GraphQL</a>
                                </>
                            }
                        </div>
                    </nav>
                </div>
                <div className="col-md-10">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}

export default App;
