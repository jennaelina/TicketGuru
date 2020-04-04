import React, {useState, useEffect} from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import QRCode from "qrcode.react";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import QrReader from 'react-qr-reader'
import ReactTable from 'react-table';
import 'react-table/react-table.css';


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
  


export default function Ticketcontrol (){

    const [eventtime,setEventtime] =React.useState('');
	const [event,setEvent] =React.useState('');
        
    const [ticketid,setTicketid] =React.useState('');
	const [checkCode,setCheckCode] =React.useState('');
	const [usedticket,setUsedticket] =React.useState('');
        
	const [categorytype,setCategorytype] =React.useState('');
	const [price,setPrice] =React.useState('');
        
    const [weather,setWeather] =React.useState('');
	const [main,setMain] =React.useState('');
	const [kysymys,setKysymys] =React.useState('');
 	const [time,setTime] =React.useState('');
	const [category,setCategory] =React.useState('');
	const [categoryname,setCategoryname] =React.useState('');

	const [info, setInfo] = useState([]);
	
        
        
    const [code,setCode] =React.useState('');
	const [used,setUsed] =React.useState('');
	const [ticketused,setTicketused] =React.useState('');
	
	 
	
	    
    const [url, setUrl] = React.useState({question: ''});
   const [open, setOpen] = useState(false);
   const classes = useStyles();
  
  const [state, setState] = useState({
	results: 'No result'

  });

  const handleScan = data => {
	  if (data) {
		  setState({
			  result: data
			  
		  });

		  
		    
	  }

	  
  };

  const handleError = err=> {
	  console.error(err);
  };

 /* useEffect(()=> ticketInfo());

  const ticketInfo = ()=> {
		
	fetch('http://localhost:8080/api/ticket?checkCode='+state.result)
	.then(response=> response.json())
	.then(responseData=> {
	console.log(responseData);
	
	setInfo(responseData);
	setTicketid(responseData.id);	
	setCheckCode(responseData.checkCode);
	setUsedticket(responseData.used);
        
    setEvent(responseData.event.name);
    setEventtime(responseData.event.time);
        
        
	setCategorytype(responseData.ticketCategory.ticketCategoryType);
	setPrice(responseData.ticketCategory.price);
	
	setUrl(responseData.url);
	
	setUrl(responseData.url);
	
	})
	.catch(err => {
	// Something went wrong
	});
  };*/

	const inputChanged = (event)=> {
	    setCode(event.target.value); 
		setUsed(moment().format());
	   };
	   
	  
	const formSubmitted = (event) => {
	//setCode(event.target.value); 
	//setKp(kaupunki + " weather");	
	   event.preventDefault();




	fetch('http://localhost:8080/api/ticket?checkCode='+code)
	.then(response=> response.json())
	.then(responseData=> {
	console.log(responseData);
	
	
	setTicketid(responseData.id);	
	setCheckCode(responseData.checkCode);
	setUsedticket(responseData.used);
        
    setEvent(responseData.event.name);
    setEventtime(responseData.event.time);
        
        
	setCategorytype(responseData.ticketCategory.ticketCategoryType);
	setPrice(responseData.ticketCategory.price);
	
	setUrl(responseData.url);
	
	setUrl(responseData.url);
	
	})
	.catch(err => {
	// Something went wrong
	});

	



	
	}


	const formSubmitted1 = (event) => {
	   event.preventDefault();

		var fields = used.split('+');
		var name = fields[0];
			fetch('http://localhost:8080/api/tickets/'+ticketid, {
				method: 'PATCH',
				body: JSON.stringify({
				//used: name
				}),
					headers: {
					"Content-type": "application/json; charset=UTF-8"
				}
			})
		.then(response => response.json())
		.then(json => console.log(json))


    fetch('http://localhost:8080/api/ticket?checkCode='+code)
	.then(response=> response.json())
	.then(responseData=> {
	console.log(responseData);
	
	
	setTicketid(responseData.id);	
	setCheckCode(responseData.checkCode);
	setUsedticket(responseData.used);
        
    setEvent(responseData.event.name);
    setEventtime(responseData.event.time);
        
        
	setCategorytype(responseData.ticketCategory.ticketCategoryType);
	setPrice(responseData.ticketCategory.price);
	
	setUrl(responseData.url);
	
	
	
	})
	.catch(err => {
	// Something went wrong
	});




	}

	const formSubmitted2 = (event) => {
		event.preventDefault();

		fetch('http://localhost:8080/api/ticket?checkCode='+state.result)
	  .then(response=> response.json())
	  .then(responseData=> {
	  console.log(responseData);
	  
	  
	  setTicketid(responseData.id);	
	  setCheckCode(responseData.checkCode);
	  setUsedticket(responseData.used);
		  
	  setEvent(responseData.event.name);
	  setEventtime(responseData.event.time);
		  
		  
	  setCategorytype(responseData.ticketCategory.ticketCategoryType);
	  setPrice(responseData.ticketCategory.price);
	  
	  setUrl(responseData.url);
	  
	  setUrl(responseData.url);
	  
	  })
	  .catch(err => {
	  // Something went wrong
	  });
  
	};


	const mystyle1 = {
		margin: '20px',
    	
      	color: "#103D60",
      	//backgroundColor: "DodgerBlue",
      	//padding: "10px",
      	fontFamily: "Arial",
		marginBottom: '5px',
		fontSize: "20px"
		//textAlign: "center"
    };

	const mystyle2 = {
		margin: '20px',
    	width: '300px',
    	height: '30px',
		marginBottom: '50px',
      	color: "DodgerBlue",
      	//backgroundColor: "white",
      	//padding: "10px",
      	fontFamily: "Arial",
		fontSize: "40px"
		
    };

	const mystyle3 = {
		margin: '20px',
		color: "DodgerBlue",
		fontSize: "20px"
    	
      	
    };

		const mystyle4 = {
		margin: '20px',
		color: "DodgerBlue",
		fontSize: "20px"
    	
      	
    };
		const mystyle5 = {
		width: '250px',
		margin: '5px',
		fontSize: "20px"
    	
      	
	};
	
	


	  

	  

    return (
        <div>

<AppBar position="static" style={{ background: '#2E3B55' }}>
        <Toolbar >


          <Typography variant="h6" className={classes.title}>
            Ticketcontrol
          </Typography>
         
         
        
          

       
         
        </Toolbar>
      </AppBar>

	 

	  <QrReader
          delay={300}
          style={{width:500}}
          onError={handleError}
          onScan={handleScan}
          />
        <p>{state.result}</p>
		<form onSubmit={formSubmitted2}>
		<label htmlFor="formGroupExampleInput" style={mystyle1}>QR code:</label>		
<input type="text" style={mystyle5} name="state.result"  value={state.result} onChange={inputChanged} />
<input type="submit" style={mystyle4} value="Get Qr info" />
</form>

<form onSubmit={formSubmitted}>


<label htmlFor="formGroupExampleInput" style={mystyle1}>Checkcode:</label>

<input type="text" style={mystyle5} name="code"  value={code} onChange={inputChanged} />

<input type="submit" style={mystyle4} value="Get ticket info" />




<table>
                <tbody>
                <tr><th>Check code</th><th>Ticket used</th><th>Event</th><th>Event time</th><th>Ticket category</th><th>Price</th></tr>
                    {
                       
                        <tr>
                           
                            <td>{checkCode}</td>
                            <td>{usedticket}</td> 
							<td>{event}</td> 
							<td>{eventtime}</td> 
							<td>{categorytype}</td> 
							<td>{price}</td> 
                        
                            
               

                           
                           
                        </tr>
                        

                    }
                </tbody>
            </table>


</form>

<form onSubmit={formSubmitted1}>
<input type="submit" style={mystyle3} value="Ticket used" />
</form>


<div>

  <QRCode
    id={checkCode}
    value={checkCode}
    size={290}
    level={"H"}
    includeMargin={true}
  />
 
</div>

           

        </div>
    )
}


