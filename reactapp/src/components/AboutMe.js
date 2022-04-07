import React from "react";
import { Typography, makeStyles, Grid } from '@material-ui/core';
import PhotoID from '../assets/PhotoID.jpg';
import Avatar from '@material-ui/core/Avatar';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(20),
      height: theme.spacing(20),
    },
  }));



function AboutMe() {
    const theme = useTheme();
    const mediumScreen = useMediaQuery(theme.breakpoints.up('md'));


    const classes = useStyles();

    return (
        <Grid style={{ display: 'flex', alignItems: 'center'}} xs={12} sm={8} lg={6} direction={mediumScreen?"row":"column"}>
            <div style={{marginRight: '2%'}}>
                <Avatar alt="Charles MONOT" src={PhotoID} className={classes.large} />
            </div>
            
                <Typography style={{textAlign: 'center', marginTop: mediumScreen? '' : '3%'}}>
                    Passioné par les technologies IT (et également par le vélo mais c'est un autre sujet) j'ai décidé d'en faire mon métier à temps !
                    Tu trouveras ici mes appétences pour chaque langages, framework ... ainsi que les projets sur lesquels j'ai pu travailler.
                    N'hésite pas à me contacter si tu souhaites que nous collaborions ensemble ou pour échanger
                
                </Typography>
            
        </Grid>

    )
}

export default AboutMe;