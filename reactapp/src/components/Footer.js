import React from "react";
import { Typography, Grid, makeStyles } from "@material-ui/core";


const useStyles = makeStyles({
    root: {
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      backgroundImage: "linear-gradient(to bottom right, #00C9FF, #92FE9D)",
      width: '100%',
      boxShadow: '2px 2px 12px 2px grey',
      borderRadius: '100% 100% 0px 0px',
      height: '10vh',
 
  }});



function Footer () {

const classes = useStyles();


return (
    <Grid className={classes.root}>
        <Typography variant='h6' style={{fontWeight: 'bolder'}}>HandCrafted with React</Typography>
        <Typography variant='subtitle1' style={{fontWeight: 'unset'}}>Réalisation personnelle - Tous droits réservés</Typography>
    </Grid>
)


}

export default Footer;
