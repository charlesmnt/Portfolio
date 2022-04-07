import React from "react";
import { Typography, Paper } from '@material-ui/core';
import styled, { keyframes } from 'styled-components';
import { FrontSkillsList } from './SkillsList';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import LinearWithValueLabel from './FrontSkills';
import { useTheme } from '@mui/material/styles';

const translateBoxFront = keyframes`
0% {
    opacity: 0;
    transform: translateX(75%)
}

50% {
    opacity: 0.5;
}

100% {
    opacity: 1;
}
`;

const TranslateBoxFront = styled.div`
animation: ${translateBoxFront} 2s 1;
`;



function BoxFront() {

    const theme = useTheme();
    const mediumScreen = useMediaQuery(theme.breakpoints.up('md'));
    const largeScreen = useMediaQuery(theme.breakpoints.up('lg'));

    const FrontSkillsListComponent = FrontSkillsList.map((e, i) => {
        return <LinearWithValueLabel name={e.name} value={e.purcent} type={e.type} key={i}/>
      })


    return (

        <TranslateBoxFront style={{ width: '100%' }} >
            <Paper elevation={6} style={{ width: largeScreen ? '70%' : mediumScreen ? '80%' : '90%' }}>
                <Typography variant={mediumScreen ? 'h3' : 'h5'} style={{ textAlign: 'start', marginBottom: '3%', marginTop: mediumScreen ? '3%' : '10%' }} >Front-End</Typography>
            </Paper>
            {FrontSkillsListComponent}
        </TranslateBoxFront>

    )
}

export default BoxFront;