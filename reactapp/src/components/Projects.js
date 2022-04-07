import React, { useEffect, useState } from "react";
import { Paper, makeStyles, Box} from '@material-ui/core';
import '../App.scss';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@mui/material/styles';


const useStyles = makeStyles({
    itemBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    }, 
});


function Projects({ title, text, icon, indice, smallIcon }) {

    
    const [stateElevation, setStateElevation] = useState(3);
    const [cardClass, setCardClass] = useState("card");
    const classes = useStyles();
    const theme = useTheme();
    const mediumScreen = useMediaQuery(theme.breakpoints.up('md'));


    useEffect (() => {
    
    
   

        const flipCard = () => {
            if(indice === 0 || indice === 2 || indice === 4 ) {
                if (cardClass === "card") {
                    setCardClass("card isFlipped360")
                    } else {
                    setCardClass("card initialPos")
                    } 
                }
            }

            setTimeout(flipCard, 2000)

        return clearTimeout(flipCard);
       },[])
    
    const turnCard = () => {
        if (cardClass === "card isFlipped") {
        setCardClass("card initialPos")
        } else {
        setCardClass("card isFlipped")
        }
    }


    return (
            <div id="card" className={cardClass} style={{width: mediumScreen?'30%':'60%', height: mediumScreen?'40%':'60%', marginBottom: mediumScreen?'':'3%'}}>
            <Paper elevation={stateElevation} className="paper front"  onMouseOver={() => setStateElevation(15)} onMouseLeave={() => setStateElevation(3)} 
            onClick={() => turnCard()}>
                    
                    <Box  className={classes.itemBox}>
       
                    <p className='content' style={{fontFamily: 'Fugaz One', fontSize: mediumScreen?"20px":"16px" , color: 'white', textTransform: 'uppercase', fontWeight: 'bold'}}>{title}</p> 
                    {icon}
                    </Box>
                    <div style={{ width: '100%', height: '15%', borderRadius: '100% 100% 0px 0px', 
                    backgroundColor: 'white', display: 'flex', justifyContent:'space-around', alignItems: 'flex-end', paddingBottom: '3%'}}>
                   
                    </div>            
            </Paper>

            <Paper elevation={stateElevation} className="paper back"  onMouseOver={() => setStateElevation(15)} onMouseLeave={() => setStateElevation(3)} 
            onClick={() => turnCard()}>
                    <div style={{ width: '100%', height: '10%', borderRadius: '0px 0px 100% 0px', backgroundImage: 'linear-gradient(to bottom right, #FFCE00, #FE4880)'}}></div>
                    <Box  className={classes.itemBox}>
       
                    <p className='content' style={{ fontSize: mediumScreen?"16px":"14px"}}>{text}</p> 
                    <p className='content' style={{ fontSize: mediumScreen?"16px":"14px", fontFamily: 'Fugaz One'}}>Les technos :</p> 
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-start', width: '100%'}}>
                    {smallIcon} 
                    </div>
                    </Box>
                    <div style={{ width: '100%', height: '10%', borderRadius: '100% 0px 0px 0px', backgroundImage: 'linear-gradient(to bottom right, #FFCE00, #FE4880)'}}></div>
                              
            </Paper>
            </div>
        
    )


}




export default Projects;