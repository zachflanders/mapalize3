import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  appBar:{
    zIndex:2
  }
};


class Nav extends React.Component {
  toggleInput= (event, input) => this.props.changeInput(input);
  render(){
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="absolute" className={classes.appBar}>
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.grow}>
              Mapalize
            </Typography>
            <ToggleButtonGroup value={this.props.input} exclusive onChange={this.toggleInput} >
              <ToggleButton value='input'>
                <Icon className='fas fa-pencil-alt' style={{fontSize:15, marginRight:5}} /> Input
              </ToggleButton>
              <ToggleButton value='results'>
                <Icon className='fas fa-fire' style={{fontSize:15, marginRight:5}} /> Results
              </ToggleButton>
            </ToggleButtonGroup>
          </Toolbar>
        </AppBar>
      </div>
    );

  }


}

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Nav);
