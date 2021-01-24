import React, { useState } from 'react'
import UserService from '../../services/user-service'

import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'




const useStyles = makeStyles((theme) => ({
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}))



const Login = () => {


    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    

    const onChangeEmail = (e) => {
        const email = e.target.value
        setEmail(email)
    }
    const onChangePassword = (e) => {
        const password = e.target.value
        setPassword(password)
    }

    const handleSignUp = (e) => {
        e.preventDefault()
        setMessage('')
    }

const classes = useStyles()

    return (
        <Container component='main' maxWidth='xs'>
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}/>
                <Typography component='h1' variant='h5'>
                    Log In
                </Typography>
                <form className={classes.form} action={handleSignUp}>

                    <Grid container spacing={2}>
                        
                        <Grid item xs={12}>
                            <TextField
                        type="text" 
                        name='email' 
                        value={email} 
                        onChange={e => onChangeEmail(e)} 
                        placeholder="email"
                        variant="outlined"
                        required
                        label="email"
                        id="email"
                        fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                        type="password" 
                        name='password' 
                        value={password} 
                        onChange={e => onChangePassword(e)} 
                        placeholder="your password"
                        variant="outlined"
                        required
                        label="password"
                        id="password"
                        fullWidth
                            />
                        </Grid>
                    </Grid>
                    <Button
                    type='submit'
                    fullWidth
                    variant='contained'
                    color='primary'
                    className={classes.submit}
                    >
                        Log In
                    </Button>
                </form>
            </div>
        </Container>
    )
}

export default Login