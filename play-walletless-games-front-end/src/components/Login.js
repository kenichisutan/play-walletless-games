import {useState} from "react";
import Input from "./form/Input";
import {useNavigate, useOutletContext} from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { setJwtToken } = useOutletContext()
    const { setAlertClassName } = useOutletContext()
    const { setAlertMessage } = useOutletContext()

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("username: " + username + ", password: " + password);
        if(username === "admin" && password === "admin") {
            setJwtToken("1234567890");
            setAlertClassName("d-none");
            setAlertMessage("");
            navigate("/");
        } else {
            setJwtToken("");
            setAlertClassName("alert-danger");
            setAlertMessage("Invalid username or password");
        }
    }

    return (
        <div className="col-md-6 offset-md-3">
            <h2>Login</h2>
            <hr/>
            <form onSubmit={handleSubmit}>
                <Input
                    title="Username"
                    type="username"
                    className="form-control"
                    name="username"
                    autoComplete="username-new"
                    onChange={(event) => setUsername(event.target.value)}
                />
                <Input
                    title="Password"
                    type="password"
                    className="form-control"
                    name="password"
                    autoComplete="password-new"
                    onChange={(event) => setPassword(event.target.value)}
                />
                <hr />
                <input
                    type="submit"
                    className="btn btn-primary"
                    value="Login"
                />
            </form>
        </div>
    );
}

export default Login;