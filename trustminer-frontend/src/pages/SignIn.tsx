import React, {FormEvent, useState} from "react";
import {Avatar, Button, Container, CssBaseline, TextField, Typography} from "@material-ui/core";
import {useSignInStyles} from "../styles/signin-styles";


export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const classes = useSignInStyles();

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log(email)
        console.log(password)
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar} alt="Trust Studio Icon" src="./android-chrome-512x512.png"/>
                <Typography component="h1" variant="h5">
                    Survey Login
                </Typography>
                <form className={classes.form} onSubmit={(e) => handleSubmit(e)} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
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