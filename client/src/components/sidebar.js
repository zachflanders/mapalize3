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
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

const styles = {
  sidebar: {
    zIndex: 1,
    position: 'relative',
    paddingTop: '100px',
    width: '240px'
  },
  list:{
    paddingTop: '88px',
    width: '240px'
  }
};

function Sidebar(props) {
  const { classes } = props;
  return (
    <div>
      <Drawer variant="permanent" className={classes.sidebar}>
        <List className={classes.list}>
          <ListItem button>
           <ListItemText primary="Item 1" />
         </ListItem>
         <ListItem button>
           <ListItemText primary="Item 2" />
         </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sidebar);
