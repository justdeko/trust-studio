import React, {FormEvent, useState} from "react";
import {Avatar, Button, Container, CssBaseline, TextField, Typography} from "@material-ui/core";
import {useSignInStyles} from "../styles/signin-styles";
import {useHistory} from "react-router-dom"
import {LOGGED_IN} from "../util/constants";


export default function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false)
    const classes = useSignInStyles();
    let history = useHistory()

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log()
        if (username === process.env.REACT_APP_LOGIN_USERNAME && password === process.env.REACT_APP_LOGIN_PASSWORD) {
            localStorage.setItem(LOGGED_IN, "true")
            history.push("/")
        } else {
            setError(true)
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar} alt="Trust Studio Icon" src="./android-chrome-512x512.png"/>
                <Typography component="h1" variant="h5">
                    Study Login
                </Typography>
                <form className={classes.form} onSubmit={(e) => handleSubmit(e)} noValidate>
                    <TextField
                        error={error}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        onChange={(e) => setUsername(e.target.value)}
                        name="username"
                        autoFocus
                    />
                    <TextField
                        error={error}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="secondary"
                        className={classes.submit}>
                        Sign In
                    </Button>
                </form>
            </div>
        </Container>
    )
}