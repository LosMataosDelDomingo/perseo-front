import React from 'react'

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
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/core/MenuItem'

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRigth: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    },
    root: {
        flexGrow: 1,
    },
    navbar: {
        background: '#5B9AC7'
    }
}))

const Navbar = () => {
    const classes = useStyles()
    return(
            <div className={classes.root}>
                <AppBar position='static' className={classes.navbar}>
                    <Toolbar>
                        <IconButton
                            edge='start'
                            color='inherit'
                            aria-label='menu'
                            className={classes.menuButton}
                            >
                            <MenuIcon />
                            </IconButton>
                                <Button color='inherit'>Cursos</Button>
                                <Button color='inherit'>Login</Button>
                                <Button color='inherit'>SignUp</Button>
                    </Toolbar>
                </AppBar>
            </div>
    )
}

export default Navbar