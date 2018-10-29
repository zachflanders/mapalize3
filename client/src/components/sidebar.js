import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Icon from '@material-ui/core/Icon'

const styles = {
  sidebar: {
    zIndex: 1,
    position: 'relative',
  },
  drawer:{
    paddingTop: '88px',
    marginLeft: '15px',
    marginRight: '15px',
    width: '210px',
    textAlign:'center'
  },
  inputButton:{
    textAlign: 'left',
    padding:'5px',
    height:'100%',
    width:'210px'
  }
};

class Sidebar extends React.Component {
  render(){
    const { classes } = this.props;
    if(this.props.input == 'input'){
      return (
        <div>
          <Drawer variant="permanent" className={classes.sidebar}>
            <div className={classes.drawer}>
              <Typography variant='subheading'>Input</Typography>
              <br />
              <Divider />
              <br />
              <ToggleButtonGroup value='input' exclusive>
                <ToggleButton value='input' className={classes.inputButton} variant='outlined'>
                  <Icon className='fas fa-pencil-alt' style={{fontSize:15, marginRight:5}} /> Where would you bike if it was comfortable
                </ToggleButton><br />
                <ToggleButton value='results' className={classes.inputButton}>
                  <Icon className='fas fa-fire' style={{fontSize:15, marginRight:5}} /> Item 2
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
          </Drawer>
        </div>
      );
    }
    else{
      return(
        <div>
          <Drawer variant="permanent" className={classes.sidebar}>
            <div className={classes.drawer}>
              {this.props.input}

            </div>
          </Drawer>
        </div>
      )
    }


  }

}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sidebar);
