import React, {useState, useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';







const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  
  const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
  };
  
export default function Frontpage (){
    const classes = useStyles();
  
   
    return (
        <div>

<AppBar position="static" style={{ background: '#2E3B55' }}>
        <Toolbar >


          <Typography variant="h6" className={classes.title}>
            Frontpage
          </Typography>
         
         
        
          

       
         
        </Toolbar>
      </AppBar>
    <h1>Tämä on etusivu</h1>
           
           
           
     
        </div>
    )
}