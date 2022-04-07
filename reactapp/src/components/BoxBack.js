import React from "react";
import { Typography, Paper } from '@material-ui/core';
import styled, { keyframes } from 'styled-components';
import { BackSkillsList } from './SkillsList';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import LinearWithValueLabelBack from './BackSkills';
import { useTheme } from '@mui/material/styles';

const translateBoxBack = keyframes`
0% {
    opacity: 0;
    transform: translateX(-75%)
}

50% {
    opacity: 0.5;
}

100% {
    opacity: 1;
}
`;

const TranslateBoxBack = styled.div`
animation: ${translateBoxBack} 2s 1;
`;



function BoxBack() {

    const theme = useTheme();
    const mediumScreen = useMediaQuery(theme.breakpoints.up('md'));
    const largeScreen = useMediaQuery(theme.breakpoints.up('lg'));

    const BackSkillsListComponent = BackSkillsList.map((e, i) => {
        return <LinearWithValueLabelBack name={e.name} value={e.purcent} type={e.type} key={i} />
      })


    return (

        <TranslateBoxBack style={{ widht: '100%' }} >
            <Typography variant={mediumScreen ? 'h3' : 'h5'} style={{ justifyContent: 'flex-end', display: 'flex', textAlign: 'end', marginBottom: '3%', marginTop: mediumScreen ? '3%' : '10%' }}>
                <Paper elevation={6} style={{ width: largeScreen ? '70%' : mediumScreen ? '80%' : '90%' }}>Back-End et Déploiement</Paper>
            </Typography>
            {BackSkillsListComponent}
        </TranslateBoxBack>

    )
}

export default BoxBack;