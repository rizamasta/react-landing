import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Grid } from '@material-ui/core';
import { BOLD, COLOR } from '../../../assets/css/main';
import { Sparator } from '../index';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        // marginTop: theme.spacing(8),
        padding: theme.spacing(6, 0),
    },
}));

export default function Footer(props) {
    const classes = useStyles();
    const { description, title } = props;

    return (
        <footer className={classes.footer}>
            <Grid container spacing={10} justify="center">
                <Grid item lg={10}>
                    <Grid container spacing={5}>
                        <Grid item md={4}>
                            <div style={{ marginLeft: 20 }}>
                                <div style={{ ...BOLD, color: COLOR.red }}>PERUSAHAAN</div>
                                <Sparator type="horizontal" />
                                <p>Tentang Kami</p>
                                <p>Cara Kerja</p>
                                <p>FAQ</p>
                                <p>Contact</p>
                            </div>
                        </Grid>
                        <Grid item md={4}>
                            <div style={{ marginLeft: 20 }}>
                                <div style={{ ...BOLD, color: COLOR.red }}>
                                    KANTOR
                        </div>
                                <Sparator type="horizontal" />
                                <p>
                                    <b>Lorem ipsum lorem</b><br />
                                    Lorem ipsum lorem<br />
                                    Lorem ipsum <br />
                                    Kota Jakarta<br />
                                    Selatan, 12210
                    </p>
                            </div>
                        </Grid>
                        <Grid item md={4}>
                            <div style={{ marginLeft: 20 }}>
                                <div style={{ ...BOLD, color: COLOR.red }}>
                                    MEDIA SOSIAL
                    </div>
                                <Sparator type="horizontal" />
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Container maxWidth="lg">
                <Typography variant="h6" align="center" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    {description}
                </Typography>
                <Copyright />
            </Container>
        </footer>
    );
}

Footer.propTypes = {
    description: PropTypes.string,
    title: PropTypes.string,
};