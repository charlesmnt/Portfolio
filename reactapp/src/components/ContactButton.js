import React, { useState } from "react";
import { Button, Collapse, Box, TextField, makeStyles } from '@material-ui/core'
import SendIcon from '@mui/icons-material/Send';
import LoadingButton from '@mui/lab/LoadingButton';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: "linear-gradient(to bottom right, #00C9FF, #92FE9D)",
        boxShadow: '2px 2px 12px 2px grey',
        borderRadius: '10px',
        marginBottom: '5%',
        color: 'white',

    },
    send : {
        boxShadow: '2px 2px 12px 2px grey',
        borderRadius: '10px', 
        marginBottom: '5%',
    },
});


function ContactButton() {

    const [display, setDisplay] = useState(false);
    const [loading, setLoading] = useState(false);
    const [mailError, setMailError] = useState("");
    const [messageError, setMessageError] = useState("");
    const [disabled, setDisabled] = useState(true)
    const [statusIcon, setStatusIcon] = useState(<SendIcon />);
    const [mail, setMail] = useState("");
    const [message, setMessage] = useState("");

    const classes = useStyles();

    const validEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ;


     const validateEmail = (e) => {
         console.log(e)
         if (validEmail.test(e)) {
            setMailError(false);
            setMessageError("");
            setDisabled(false);
        } else if (validEmail.test(e) === false && e.length > 0) {
            setMailError(true);
            setMessageError("Email incorrect"); 
            setDisabled(true)
        } else {
            setMailError(false);
            setMessageError(""); 
            setDisabled(true)
        }

     };

    const sendMessage = async(mail, message) => {

        let request = await fetch("/send",
        {
            method: 'POST',
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            body: `mail=${mail}&message=${message}`
           }
          );

        let answer = await request.json()
        console.log(answer)
        if(answer.response === true) {  
        setLoading(false)  
        setStatusIcon(<DoneIcon style={{color: 'green'}} />)
        } else {
        setLoading(false)  
        setStatusIcon(<CloseIcon style={{color: 'red'}} />)  
        }    
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <Button variant="contained" onClick={() => {setDisplay(!display)}} className={classes.root}> Lancer une conversation </Button>
            <Collapse in={display} style={{ width: '70%' }} >
                <Box component="form" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}  >
                    <TextField
                        id="email"
                        label="Ton email"
                        autoComplete="off"
                        style={{ marginBottom: '3%', width: '30%' }}
                        onChange={(e) => {setMail(e.target.value); setStatusIcon(<SendIcon />); validateEmail(e.target.value)}}
                        value={mail}
                        error={mailError}
                        helperText={messageError}
                    />
                    <TextField
                        id="message"
                        label="Ton message"
                        autoComplete="off"
                        variant="filled"
                        multiline
                        rows={10}
                        style={{ width: '80%', marginBottom: '5%' }}
                        onChange={(e) => {setMessage(e.target.value); setStatusIcon(<SendIcon />)}}
                        value={message}
                    />
                    <LoadingButton
                        loading={loading}
                        size="large"
                        loadingPosition="end"
                        endIcon={statusIcon}
                        variant="outlined"
                        onClick={() =>{setLoading(!loading); sendMessage(mail, message)}}
                        className={classes.send}
                        disabled={disabled}
                    >
                    Envoyer
                    </LoadingButton>
                </Box>
            </Collapse>
        </div>
    )
}

export default ContactButton;