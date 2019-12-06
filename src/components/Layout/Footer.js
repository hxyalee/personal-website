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

import '../../App.css'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > .fa': {
      margin: theme.spacing(2),
      
    },
  }
 }))


function Footer() {
  const styles = useStyles()
  
  function toFacebook() {
    window.location.href = "http://www.facebook.com/hoya.lee0";
  }
  function toInstagram() {
    window.location.href = "http://www.instagram.com/hxyalee";    
  }
  function toGithub() {
    window.location.href = "https://github.com/hxyalee";    
  }
  function toLinkedin() {
    window.location.href = "https://www.linkedin.com/in/hoya-lee/";    
  } 
  React.useEffect(() => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );
  }, []);
  return (
  	<div className={styles.root}>
      <Grid
      container
      direction="row"
      justify="center"
      alignItems="flex-end"
      spacing={10}
      >
        <div style={{marginBottom:50, position:'absolute', bottom:'0'}}>
          <Button onClick={toFacebook}>
            <Icon className="fab fa-facebook"  style={{fontSize:50, margin:20}}/>
          </Button>
          <Button onClick={toInstagram}>
            <Icon className="fab fa-instagram" style={{fontSize:50, margin:20}}/>
          </Button>
          <Button onClick={toGithub}>
            <Icon className="fab fa-github" style={{fontSize:50, margin:20}}/>
          </Button>
          <Button onClick={toLinkedin}>
            <Icon className="fab fa-linkedin" style={{fontSize:50, margin:20}}/>
          </Button>
  
		</div>
      </Grid>
    </div>
  	)
}
export default Footer