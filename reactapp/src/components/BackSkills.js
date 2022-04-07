import React from "react";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


const BarProgress = withStyles(() => ({
    root: {
        height: 10,
        borderRadius: 5,
        border: 'solid #4a69bd 1px',
      },
      colorPrimary: {
        backgroundColor: '#4a69bd',
      },
      bar: {
        backgroundColor: 'white',
      },  
}))(LinearProgress);



function LinearProgressWithLabel(props) {

    return (
        <Box display="flex" alignItems="center" justifyContent="flex-end" >
            <Box minWidth={35}>
                <Typography variant="body2" color="textPrimary">{`${Math.round(
                    100 - props.value,
                )}%`}</Typography>
            </Box>
            <Box width="54%" mr={1}>
                <BarProgress variant='determinate' value={props.value} />
                {/* <LinearProgress variant='determinate' color="primary" value={props.value} classes={{class }} /> */}
            </Box>

        </Box>
    );
}

const useStyles = makeStyles({
    root: {
        width: '100%',
    },  
});


export default function LinearWithValueLabelBack({ value, name }) {

    const classes = useStyles();
    const [progress, setProgress] = React.useState(100);

    React.useEffect(() => {

        const timer = setInterval(() => {

            setProgress((prevProgress) => (prevProgress === value ? value : prevProgress - 1));
        }, 40);

        if (progress === value) {
            return () => {
                clearInterval(timer);
            }
        }
        ;
    }, []);

    return (
        <div className={classes.root}>
            <Typography style={{ textAlign: "end", marginRight: 10 }} >{name}</Typography>
            <LinearProgressWithLabel value={progress} name={name} />
        </div>
    );
}