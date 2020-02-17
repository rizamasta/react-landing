import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { COLOR, BOLD, COLUMN_CENNTER, BUTTON_OVAL, DARK } from '../../../assets/css/main';
import { Link } from "react-router-dom";
import { grey } from '@material-ui/core/colors';
import { MazdaLogo, BmwLogo, VwLogo, SuzukiLogo, AudiLogo, ToyotaLogo } from '../../../assets/img';

const overview = [
    {
        title: 'Pelajari Keterampilan Otomotif Terbaru',
        short_desc: 'Basic konsep otomotif, Penggunaan alat ukur, Fungsi umum komponen dalam kendaraan, dll.'
    },
    {
        title: 'Bersiaplah untuk Kariermu di masa depan',
        short_desc: 'Tersedia materi-materi untuk kamu yang masih baru dan pemula maupun ingin berkarir di bidang automotif.'
    },
    {
        title: 'Sertifikasi untuk Teknisi Ahli',
        short_desc: 'Dapatkan sertifikat dari lembaga terpercaya untuk kamu yang sudah mahir di bidang automotif.'
    },
    {
        title: 'Tingkatkan skill tim Kamu',
        short_desc: 'Tersedia training dan program pengembangan yang disesuaikan dengan tim Kamu.'
    }
];

const companies = [
    {
        alt: "BMW Companies",
        image: BmwLogo
    },
    {
        alt: "VW Groups",
        image: VwLogo
    },
    {
        alt: "Toyota Indonesia",
        image: ToyotaLogo
    },
    {
        alt: "Suzuki Mobil Indonesia",
        image: SuzukiLogo
    },
    {
        alt: "Audi Motors",
        image: AudiLogo
    },
    {
        alt: "Mazda Logo",
        image: MazdaLogo
    }
]
export default class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Grid container justify="center" alignContent="center">
                    <Grid item lg={12}>
                        <div style={{ height: window.innerHeight / 2, width: window.innerWidth, backgroundColor: COLOR.darkGrey }}>
                            <div style={{ paddingTop: 80, paddingLeft: 80 }}>
                                <h1>Belajar kapanpun kamu mau </h1>
                                <p>Pelajari topik mengenai dunia otomotif kapan saja dan dimana saja. Pilih dari ribuan kursus dari pengajar profesional sekarang. Gratis!</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item lg={12} style={{ backgroundColor: grey[200] }}>
                        <Grid container justify="center" direction="row" alignItems="flex-start">
                            <Grid item lg={10}>
                                <Grid container justify="center" direction="row" alignItems="flex-start">
                                    <Grid item md={10} style={{ textAlign: 'center', height: 120, marginTop: 50 }}>
                                        <h1>Capai tujuanmu bersama CARtech</h1>
                                    </Grid>
                                    {
                                        overview.map((value, i) => {
                                            return (<Grid key={i} item md={3} style={{ ...COLUMN_CENNTER }}>
                                                <div style={{ ...COLUMN_CENNTER, textAlign: 'center', width: 200 }}>
                                                    <div style={{ backgroundColor: COLOR.darkGrey, borderRadius: 10, height: 80, width: 80, marginBottom: 10 }}></div>
                                                    <div>
                                                        <span style={BOLD}>{value.title}</span>
                                                    </div>
                                                    <div>
                                                        <span style={{ color: COLOR.darkGrey, fontSize: 12 }}>{
                                                            value.short_desc
                                                        }</span>
                                                    </div>
                                                </div>
                                            </Grid>)
                                        })
                                    }
                                    <Grid item md={10} style={{ textAlign: 'center', height: 120, marginTop: 50 }}>
                                        <Link to="/users/login">
                                            <Button style={{ ...BUTTON_OVAL, ...DARK, width: "auto", paddingLeft: 20, paddingRight: 20 }}>
                                                Mulai Sekarang
                                        </Button>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={12} style={{ backgroundColor: 'white' }}>
                        <Grid container direction="row" justify="center" alignItems="flex-start">
                            <Grid item md={3} style={{ textAlign: 'center', marginTop: 50 }}>
                                <h2>Telah dipercaya oleh Perusahaan Otomotif Ternama</h2>
                            </Grid>
                        </Grid>
                        <Grid container direction="row" justify="center" alignItems="center">
                            {
                                companies.map((company, i) => {
                                    return (
                                        <Grid key={i} sm={1}>
                                            <img alt={company.alt} src={company.image} />
                                        </Grid>
                                    )
                                })
                            }
                            <Grid item md={12} style={{ height: 50 }}></Grid>
                            <Grid item md={4}>
                                <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 14 }}>
                                    Perusahaan otomotif ternama memberikan training kepada jutaan siswa tentang otomotif. Kami menyediakan platform untuk mengajarkan produk otomotif dari Brand Anda
                                </div>
                            </Grid>
                            <Grid item md={10} style={{ textAlign: 'center', height: 120, marginTop: 50 }}>
                                <Link to="/companies/register">
                                    <Button style={{ ...BUTTON_OVAL, ...DARK, width: "auto", paddingLeft: 20, paddingRight: 20 }}>
                                        Bergabung Sekarang
                                        </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }
}