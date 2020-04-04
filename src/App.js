import React, {useState, useEffect} from 'react';
import moment from 'moment';
import logo from './logo.svg';
import './App.css';
import Ticketcontrol from'./components/Ticketcontrol';
import Frontpage from'./components/Frontpage';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
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

const useStyles12 = makeStyles({
  root: {
    fontFamily: "sans-serif",
    //background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
   // border: 0,
   // borderRadius: 3,
   // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: '#2E3B55',
    height: 48,
    //padding: '0 30px',
  },
});


function App() {

  const classes = useStyles();

  const classes12 = useStyles12();
  const [trainings, setTrainings] = useState([]);
  const [calenderevent, setCalenderevent] = useState([{ title: '', date: '' }]);
  const [open, setOpen] = useState(false);




  return (
    <div className="App">

<BrowserRouter>

<div className="header" >
</div>
<h1 className={classes12.root}>TicketGuru</h1>
<div>
 <Link to= "/" style={{ fontSize: 'large', fontFamily: "sans-serif", color: '#2E3B55', textDecoration: 'none' }}>Frontpage</Link>{' '}
 
 <Link to=  "/components/Ticketcontrol" style={{marginBottom: '30px',marginLeft: '40px',fontSize: 'large', fontFamily: "sans-serif", color: '#2E3B55', textDecoration: 'none' }} >Ticketcontrol</Link>{' '}
 
 <Switch>
 <Route exact path="/" component={Frontpage}/>
 <Route path="/components/Ticketcontrol" component={Ticketcontrol}/>
 
 <Route path="/components/Ticketcontrol"render={() => <h1>Contact address</h1>}/>
 <Route render={() => <h1></h1>}/>
 </Switch>
 </div>











  </BrowserRouter>

   
    </div>
  );
}

export default App;
