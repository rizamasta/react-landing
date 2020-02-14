import React from 'react';
import { Link } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Grid, IconButton, InputBase, MenuItem, Button, Menu } from '@material-ui/core';
import { Search as SearchIcon, Sort as SortIcon, More as MoreIcon } from '@material-ui/icons';
import { grey } from '@material-ui/core/colors';
import cartech from "../../../assets/img/cartech-logo.svg";
import { BUTTON_OVAL, DARK } from '../../../assets/css/main';
import Sparator from '../general/Sparator';

const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        fontSize: 12,
        [theme.breakpoints.up('lg')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: grey[100],
        '&:hover': {
            backgroundColor: grey[200],
        },
        border: "0.5px solid",
        borderColor: grey[200],
        [theme.breakpoints.up('md')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 4, 1, 4),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 300,
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

export default function PrimaryAppBar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    // const handleProfileMenuOpen = event => {
    //     setAnchorEl(event.currentTarget);
    // };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = event => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                Masuk
                {/* <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p> */}
            </MenuItem>
            <MenuItem>
                <Link to="/users/register">
                    Daftar
                </Link>
                {/* <IconButton aria-label="show 11 new notifications" color="inherit">
                    <Badge badgeContent={11} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p> */}
            </MenuItem>
        </Menu>
    );

    return (
        <div >
            <AppBar position="absolute" color="default" style={{ backgroundColor: "white", top: 0, bottom: 'auto', position: 'fixed' }} >
                <Toolbar>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={2}
                    >
                        <Grid item lg={1}></Grid>
                        <Grid item lg={2} className={classes.title}>
                            <Grid container justify="center">
                                <Link to="/" className="centered">
                                    <img alt="Cartech Logo" src={cartech} style={{ marginRight: 50 }} />
                                </Link>
                                <Button startIcon={<SortIcon style={{ marginRight: 10 }} />} style={{ textTransform: 'capitalize' }}>Topik</Button>
                            </Grid>
                        </Grid>
                        <Grid item lg={4}>
                            <Grid className={classes.search} container alignItems="center">
                                <InputBase
                                    placeholder="Search…"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                                <SearchIcon style={{ position: 'absolute', right: 10 }} />
                            </Grid>
                        </Grid>
                        <Grid item lg={4}>
                            <Grid container justify="flex-end" alignItems="center">
                                <div className={classes.grow} />
                                <div className={classes.sectionDesktop}>
                                    <Link to="/users/login">
                                        <Button style={BUTTON_OVAL}>
                                            Masuk
                                    </Button>
                                    </Link>
                                    <Sparator type="vertical" width={10} />
                                    <Link to="/users/register">
                                        <Button style={{ ...BUTTON_OVAL, ...DARK }}>
                                            Daftar
                                    </Button>
                                    </Link>
                                </div>
                                <div className={classes.sectionMobile}>
                                    <IconButton
                                        aria-label="show more"
                                        aria-controls={mobileMenuId}
                                        aria-haspopup="true"
                                        onClick={handleMobileMenuOpen}
                                        color="inherit"
                                    >
                                        <MoreIcon />
                                    </IconButton>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div >
    );
}
