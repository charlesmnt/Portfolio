
import React, { useRef } from 'react';
import { Button, Typography, makeStyles, Grid } from '@material-ui/core';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import 'fontsource-roboto';
import './App.scss';


import Image from './assets/cycling-picture_large.jpeg';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';

import ContactButton from './components/ContactButton';
import BoxFront from './components/BoxFront';
import BoxBack from './components/BoxBack';
import BoxProjects from './components/BoxProjects';


const useStyles = makeStyles({
  root: {
    borderRadius: 15,
    color: 'white',
    backgroundColor: '#b71540',
    marginTop: 30,
    '&:hover': {
      color: "white",
      backgroundColor: '#f6b93b',
    },
  },
  image: {
    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover',

    zIndex: 2,
  },
  hide: {
    opacity: 0,
  },

});


function App() {

  const targetScroll = useRef(null);
  const theme = useTheme();
  const mediumScreen = useMediaQuery(theme.breakpoints.up('md'));

  const classes = useStyles();
  const [ref1, inView1] = useInView({ threshold: 1, triggerOnce: true });
  const [ref2, inView2] = useInView({ threshold: 1, triggerOnce: true });
  const [ref3, inView3] = useInView({ threshold: 0.4, triggerOnce: true });

  function ButtonDive() {
    const executeScroll = () => targetScroll.current.scrollIntoView({ behavior: "smooth" });

    return <Button className="btn" style={{ marginTop: '3%', color: 'white', fontSize: mediumScreen ? '24px' : '20px' }} href='#myTechno' onClick={() => executeScroll()}>
      Let's ride together
    </Button>
  }

  return (
    <Grid container >
      <Grid className={classes.image} style={{ height: '100vh', width: '100vw' }} xs={12}>
        <div style={{ height: '90%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <Typography variant='h3' style={{ color: 'white', textAlign: 'center' }}>
            Hello, I'm Charles
          </Typography>
          <Typography variant='h3' style={{ color: 'white', textAlign: 'center' }}>
            FullStack Web Developer
          </Typography>
          <ButtonDive />
        </div>

        <div style={{ height: '10%', display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start' }} >
          <LinkedInIcon className='foo' fontSize='large' color='info' style={{ marginLeft: '3%' }} onClick={() => window.open("https://www.linkedin.com/in/charles-monot-profile/", "_blank")} />
        </div>
      </Grid>

      <Grid style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} xs={12} >
        <div className='containerSkills' ref={targetScroll} >
          <AboutMe />
          <Grid item ref={ref1} xs={11} lg={8} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', width: '80%', marginTop: '1%' }}>
            {inView1 &&
              <BoxFront />
            }
          </Grid>
          <Grid item ref={ref2} xs={11} lg={8} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', width: '80%', marginTop: '3%' }}>
            {inView2 &&
              <BoxBack />
            }
          </Grid>
        </div>

        <Grid ref={ref3} className="containerProjects" xs={12} sm={10} md={9} >

          <Typography variant={mediumScreen ? 'h2' : 'h4'} style={{ textAlign: 'center', marginBottom: '3%', fontFamily: 'Fugaz One' }}>Mes réalisations</Typography>

          {inView3 &&
            <BoxProjects />
          }
        </Grid>

        <Grid style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh', marginTop: '5%', marginBottom: '2%', width: '100%' }} xs={12} sm={10} md={9} >

          <ContactButton />

        </Grid>

      </Grid>
      <Footer />
    </Grid>
  );
}

export default App;
