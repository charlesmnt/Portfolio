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
        backgroundColor: 'white',
      },
      bar: {
        backgroundColor: '#4a69bd',
      },  
}))(LinearProgress);

function LinearProgressWithLabel(props) {

    return (
        <Box display="flex" alignItems="center" justifyContent="flex-start">
            <Box width="100%" mr={1}>
                <BarProgress variant='determinate' value={props.value} />
            </Box>
            <Box minWidth={35}>
                <Typography variant="body2" color="textPrimary">{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}


const useStyles = makeStyles({
    root: {
        width: '60%',
    },
});

export default function LinearWithValueLabel({ value, name }) {

    const classes = useStyles();
    const [progress, setProgress] = React.useState(1);

    React.useEffect(() => {

        const timer = setInterval(() => {

            setProgress((prevProgress) => (prevProgress === value ? value : prevProgress + 1));
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
            <Typography>{name}</Typography>
            <LinearProgressWithLabel value={progress} name={name} />
        </div>
    );
}