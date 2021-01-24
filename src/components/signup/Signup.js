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

const userService = new UserService()


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



const Signup = () => {

    const[name, setName] = useState('')
    const[surname, setSurname] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[phone, setPhone] = useState('')
    const[birthAge, setBirthAge] = useState('')
    const[adress, setAdress] = useState('')
    const[summary, setSummary] = useState('')
    const[message, setMessage] = useState('')

    const onChangeName = (e) => {
        const name = e.target.value
        setName(name)
    }
    const onChangeSurname = (e) => {
        const surname = e.target.value
        setSurname(surname)
    }
    const onChangeEmail = (e) => {
        const email = e.target.value
        setEmail(email)
    }
    const onChangePassword = (e) => {
        const password = e.target.value
        setPassword(password)
    }
    const onChangePhone = (e) => {
        const phone = e.target.value
        setPhone(phone)
    }
    const onChangeBirth = (e) => {
        const birthAge = e.target.value
        setBirthAge(birthAge)
    }
    const onChangeAdress = (e) => {
        const adress = e.target.value
        setAdress(adress)
    }
    const onChangeSummary = (e) => {
        const summary = e.target.value
        setSummary(summary)
    }

    const handleSignUp = (e) => {
        e.preventDefault()
        userService.createNewUser(name, surname, email, password, phone)
            .then(response => {
                setName('')
                setSurname('')
                setEmail('')
                setPassword('')
                setPhone('')
            })
            .catch(err => console.log(err))
        setMessage('')


    }

const classes = useStyles()

    return (
        <Container component='main' maxWidth='xs'>
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}/>
                <Typography component='h1' variant='h5'>
                    Sign Up
                </Typography>
                <form className={classes.form} onSubmit={handleSignUp}>

                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                        type="text" 
                        name='name'
                        value={name} 
                        onChange={e => onChangeName(e)} 
                        placeholder="Name"
                        variant="outlined"
                        autoComplete='fname'
                        required
                        label="name"
                        id="name"
                        fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                type="text" 
                                name='surname' 
                                value={surname} 
                                onChange={e => onChangeSurname(e)} 
                                variant="outlined"
                                required
                                label="surname"
                                id="surname"
                                fullWidth
                            />
                        </Grid>
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
                        {/* <Grid item xs={12}>
                            <TextField
                        type="text" 
                        name='phone' 
                        value={phone} 
                        onChange={e => onChangePhone(e)} 
                        placeholder="phone"
                        variant="outlined"
                        required
                        label="phone"
                        id="phone"
                        fullWidth
                            />
                        </Grid> */}
                        {/* <Grid item xs={12}>
                            <TextField
                        type="text" 
                        name='birthage' 
                        value={birthAge} 
                        onChange={e => onChangeBirth(e)} 
                        placeholder="birthage"
                        variant="outlined"
                        required
                        label="birthage"
                        id="birthage"
                        fullWidth
                            />
                        </Grid> */}
                        {/* <Grid item xs={12}>
                            <TextField
                        type="text" 
                        name='adress' 
                        value={adress} 
                        onChange={e => onChangeAdress(e)} 
                        placeholder="adress"
                        variant="outlined"
                        required
                        label="adress"
                        id="adress"
                        fullWidth
                            />
                        </Grid> */}
                        {/* <Grid item xs={12}>
                            <TextField
                        type="text" 
                        name='summary' 
                        value={summary} 
                        onChange={e => onChangeSummary(e)} 
                        placeholder="summary"
                        variant="outlined"
                        required
                        label="summary"
                        id="summary"
                        fullWidth
                            />
                        </Grid> */}
                    </Grid>
                    <Button
                    type='submit'
                    fullWidth
                    variant='contained'
                    color='primary'
                    className={classes.submit}
                    >
                        Sign Up
                    </Button>
                </form>
            </div>
        </Container>
    )
}

export default Signup