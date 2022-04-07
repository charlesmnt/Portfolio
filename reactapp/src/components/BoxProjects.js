import React from "react";
import { Grid } from '@material-ui/core';
import styled, { keyframes } from 'styled-components';
import Projects from "./Projects";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ProjectList } from './ProjectList';
import { useTheme } from '@mui/material/styles';

const translateBoxProjects = keyframes`
0% {
    opacity: 0;
    transform: translateY(75%)
}

50% {
    opacity: 0.5;
}

100% {
    opacity: 1;
}
`;

const TranslateBoxProjects = styled.div`
animation: ${translateBoxProjects} 2s 1;
`;



function BoxProjects() {

    const theme = useTheme();
    const mediumScreen = useMediaQuery(theme.breakpoints.up('md'));
    const largeScreen = useMediaQuery(theme.breakpoints.up('lg'));

    const ProjectListComponent = ProjectList.map((e, i) => {
        return <Projects title={e.title} text={e.text} icon={e.icon} indice={i} smallIcon={e.smallIcon} key={i+1} />
      })


    return (

        <TranslateBoxProjects >
        <Grid style={{ width: '100%', display: 'flex', flexDirection: mediumScreen? 'row' : 'column',
        height: largeScreen? '90vh' : mediumScreen? '120vh' : '250vh', justifyContent: 'space-around', alignItems: 'center', flexWrap: mediumScreen? 'wrap': 'nowrap' }}>
          {ProjectListComponent}
        </Grid>
      </TranslateBoxProjects>

    )
}

export default BoxProjects;