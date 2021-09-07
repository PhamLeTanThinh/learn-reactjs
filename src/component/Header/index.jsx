import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CodeIcon from '@material-ui/icons/Code';
import { NavLink, Link } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { IconButton } from '@material-ui/core';
import { AccountCircle, Close } from '@material-ui/icons'
import { Box } from '@material-ui/core'
import Login from './../../features/Auth/components/Login/index';
import Register from './../../features/Auth/components/Register/index';
import { useDispatch, useSelector } from 'react-redux';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { logout } from 'features/Auth/userSlice';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
    },
    closeButton: {
        position: 'absolute',
        top: theme.spacing(1),
        right: theme.spacing(1),
        color: theme.palette.grey[500],
        zIndex: 1,
    }
}));

const MODE = {
    LOGIN: 'login',
    REGISTER: 'register'
}

export default function Header() {

    const classes = useStyles();
    const LoggedInUser = useSelector(state => state.user.current);
    const isLoggedIn = !!LoggedInUser.id;
    const dispatch = useDispatch();

    const [open, setOpen] = React.useState(false);
    const [mode, setMode] = useState(MODE.LOGIN);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    const handleUserClick = (e) => {
        setAnchorEl(e.currentTarget);
    }

    const handleCloseMenu = () => {
        setAnchorEl(null);
    }

    const handleLoggoutClick = () => {
        const action = logout();
        dispatch(action);
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
                    <CodeIcon className={classes.menuButton} />
                    <Typography variant="h6" className={classes.title}>
                        <Link className={classes.link} to="/">BouShop</Link>
                    </Typography>
                    <NavLink className={classes.link} to="/todos" >
                        <Button color="inherit">ToDO</Button>
                    </NavLink>
                    <NavLink className={classes.link} to="/counter" >
                        <Button color="inherit">Counter</Button>
                    </NavLink>

                    {!isLoggedIn && (
                        <Button color="inherit" onClick={handleClickOpen}>Login</Button>
                    )}
                    {isLoggedIn && (
                        <IconButton color="inherit" onClick={handleUserClick}>
                            <AccountCircle />
                        </IconButton>
                    )}

                </Toolbar>
            </AppBar>

            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}

                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  getContentAnchorEl={null}
            >
                <MenuItem onClick={handleCloseMenu}>Profile</MenuItem>
                <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
                <MenuItem onClick={handleLoggoutClick}>Logout</MenuItem>
            </Menu>


            <Dialog
                disableBackdropClick
                disableEscapeKeyDown
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title">
                <IconButton className={classes.closeButton} onClick={handleClose}>
                    <Close />
                </IconButton>
                <DialogContent>
                    {mode === MODE.REGISTER && (
                        <>
                            <Register closeDialog={handleClose} />
                            <Box textAlign="center">
                                <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                                    Already have an account. Login here
                                </Button>
                            </Box>
                        </>
                    )}

                    {mode === MODE.LOGIN && (
                        <>
                            <Login closeDialog={handleClose} />
                            <Box textAlign="center">
                                <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
                                    Don't have an account. Register here.
                                </Button>
                            </Box>
                        </>
                    )}
                </DialogContent>

            </Dialog>

        </div>
    );
}
