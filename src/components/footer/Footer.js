import React from 'react'
import { useRoutes, A } from 'hookrouter'

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
import Fab from '@material-ui/core/Fab'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedinIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'
import { Instagram } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    appBar: {
        top: 'auto',
        bottom: 0,
        background: '#5B9AC7'
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto'
    },
    grow: {
        flexGrow: 1
    }
}))

const Footer = () => {
    const classes = useStyles()

    return(
        <AppBar position='fixed' color='primary' className={classes.appBar}>
            <Toolbar>
                <IconButton
                edge='start'
                color='inherit'
                aria-label='open drawer'>
                    <MenuIcon />
                </IconButton>
                <div className={classes.grow}>
                    <IconButton edge='end' color='inherit'>
                        <TwitterIcon />
                    </IconButton>
                    <IconButton edge='end' color='inherit'>
                        <FacebookIcon />
                    </IconButton>
                    <IconButton edge='end' color='inherit'>
                        <LinkedinIcon />
                    </IconButton>
                    <IconButton edge='end' color='inherit'>
                        <InstagramIcon />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>

    )
}

export default Footer