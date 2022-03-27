import React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import BrokenImageIcon from '@mui/icons-material/BrokenImage';
import { Link } from 'react-router-dom';

function Lists() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <List
    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
    component="nav"
    aria-labelledby="nested-list-subheader"
  >
    <ListItemButton onClick={handleClick}>
      <ListItemIcon>
        <BrokenImageIcon />
      </ListItemIcon>
      <ListItemText primary="Image Converter" />
      {open ? <ExpandLess /> : <ExpandMore />}
    </ListItemButton>
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>

        <Link to='/png-convert' className='link'>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon>
            <BrokenImageIcon />
          </ListItemIcon>
          <ListItemText primary="Convert To PNG" />
        </ListItemButton>
        </Link>

        <Link to='/jpeg-convert' className='link'>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon>
            <BrokenImageIcon />
          </ListItemIcon>
          <ListItemText primary="Convert To JPEG" />
        </ListItemButton>
        </Link>

      </List>
    </Collapse>
  </List>
  )
}

export default Lists