import React,{useState} from 'react'
import "./main.css"
import {Container,Button,Typography,TextField} from '@material-ui/core';
import axios from "axios"
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
function Main() {


    const [state, setstate] = useState({

      username:"",
      email:""

    })

var     change=(e)=>{
    
    setstate({
        ...state,
        [e.target.name]:e.target.value
    })


}

const [open, setOpen] = React.useState(false);
const [open1, setOpen1] = React.useState("");

var submit=(e)=>{
    e.preventDefault()
   // console.log(state)

    axios.post("https://fivrr5.herokuapp.com/getdata",state).then((res)=>{setOpen1(res.data.msg);setOpen(true);})
}


const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

    return (
        <div id="div1">

        <video id="videoBG"  autoplay="autoplay" muted loop>
            <source type="video/mp4" src={process.env.PUBLIC_URL+"./stix.mp4"}></source>
</video>

<div  class="content">
  
  
  <img width="400px" src={process.env.PUBLIC_URL+"./logo.png"}/>
    <Typography variant="h4" style={{color:"#A0A0A0	",marginBottom:"20px"}}>
        <b>
            <center>
    Earn, Save, And Spend, All In One Place
    </center>
    </b>
    </Typography>

    <form onSubmit={submit} noValidate autoComplete="off">
      
      <TextField name="username" onChange={change} value={state.username}   color="secondary" size="small" placeholder="Username" style={{padding:"5px",backgroundColor:"white",width:"320px"}}  id="outlined-basic" variant="outlined" />
      <br/>
      <TextField name="email" onChange={change} value={state.email}  color="secondary" margin="normal" placeholder="Email Address" size="small" style={{padding:"5px",backgroundColor:"white",width:"320px"}}  id="outlined-basic"  variant="outlined" />
      <br/>
      <Button type="submit" variant="contained" color="secondary" >Get Early Access</Button>
    </form>
</div>


<Snackbar open={open} onClose={handleClose} autoHideDuration={3000} >

<MuiAlert onClose={handleClose}  severity="success" elevation={6} variant="filled">
    {open1}
</MuiAlert>


</Snackbar>

        </div>
    )
}

export default Main
