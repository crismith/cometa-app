import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

export default function AccountMenu(propsData) {
  return (
    <React.Fragment>
      <Box sx={{ 
        width: '100%', 
        backgroundColor: '#fff', 
        display: 'flex', 
        padding: '1rem 0', 
        alignItems: 'center', 
        textAlign: 'center', 
        justifyContent: 'center', 
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 19px 38px, rgba(0, 0, 0, 0.1) 0px 15px 12px' }}>
        <Avatar alt="" src={propsData.school.logo} />
        <Typography sx={{ marginLeft: '0.5rem', minWidth: 100 }}>
          {propsData.school.name}
        </Typography>
      </Box>
      <Divider />
    </React.Fragment>
  );
}