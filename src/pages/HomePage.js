import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  TextField,
  Typography,
  Icon,
  List,
  ListSubheader
} from '@material-ui/core';
import { loadCSS } from 'fg-loadcss';
import Typist from 'react-typist';
import Fade from 'react-reveal/Fade';
import Footer from '../components/Layout/Footer'

import '../App.css'

const useStyles = makeStyles((theme) => ({

  button: {
      boxShadow: '0px 4px 32px rgba(255, 255, 255, 0.4)',
      background:'black',
      borderRadius: 100,
      color:'white',
      width:200,
      marginBottom: theme.spacing(3),
      whiteSpace:'nowrap'
    },
}));


function Homepage ({ match }) {
  const [titleDone, setTitleDone] = React.useState(false)
  const styles = useStyles()
  function handleTitleDone() {
    setTitleDone(true)
  }
  React.useEffect(() => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );
  }, []);
  function body() {
    return (
      <Fade>
            <p className='body'> I'm a full-time first year Computer science student and a Full-Stack developer on the side.</p>
            <Grid
             container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={6}
            >
            <Button size='medium' className={styles.button} style={{marginTop:50}}> View my work </Button>
            </Grid>
      </Fade>
    )
  }

  return(
    <div >
      <div>
        <Typist 
          cursor={{show:false}}
          onTypingDone={handleTitleDone}
        >
          <p className='name'> Hello, I'm Hoya.</p> 
        </Typist>
        {
          titleDone ?  
         body()
         :null
        }

         <Footer />
    </div> 
    
  </div>
  )
}
export default Homepage
