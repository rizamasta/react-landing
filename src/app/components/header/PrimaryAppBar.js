import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Grid,
  IconButton,
  MenuItem,
  Button,
  Menu
} from "@material-ui/core";
import { More as MoreIcon } from "@material-ui/icons";
import { grey } from "@material-ui/core/colors";
import { PRIMARY } from "../../../assets/css/main";
import { loadImage } from "app/utils";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "none",
    fontSize: 12,
    [theme.breakpoints.up("lg")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: grey[100],
    "&:hover": {
      backgroundColor: grey[200]
    },
    border: "0.5px solid",
    borderColor: grey[200],
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 4, 1, 4),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 300
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
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

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}>
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}>
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
        <Link to="/users/register">Daftar</Link>
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
    <div>
      <AppBar
        position="absolute"
        color="default"
        style={{
          backgroundColor: "white",
          top: 0,
          bottom: "auto",
          position: "fixed"
        }}>
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={2}>
            <Grid item lg={2} className={classes.title}>
              <Link to="/" className="centered">
                <img
                  alt="Hiregrade-Logo"
                  src={loadImage("HiregradeLogo.png")}
                  //   style={{ marginRight: 50 }}
                  width={150}
                />
              </Link>
            </Grid>
            <Grid item lg={10}>
              <Grid container justify="flex-end" alignItems="center">
                <div className={classes.grow} />
                <div className={classes.sectionDesktop}>
                  <Link to="/users/register">
                    <Button variant="contained" style={{ ...PRIMARY }}>
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
                    color="inherit">
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
    </div>
  );
}
