import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function CardStudent({student, totaltoPay = 0}) {
  return (
    <Card sx={{ minWidth: 310, margin: '1rem 0' }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between'  }}>
          <Typography sx={{ fontSize: 16, fontWeight: 600  }} color="text.secondary" gutterBottom>
            {`${student.first_name} ${student.last_name}` } 
          </Typography>
          <Typography sx={{ fontSize: 16, fontWeight: 600 }} color="text.secondary" gutterBottom>
            {student.cohort} 
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between'  }}>
          <Typography sx={{ fontSize: 16, fontWeight: 600}} color="text.secondary" gutterBottom>
            Total a Pagar
          </Typography>
          <Typography  sx={{ fontSize: 16, fontWeight: 600}} color="text.secondary" gutterBottom>
            $ {totaltoPay}
          </Typography>
        </Box>
      </CardContent>
      
    </Card>
  );
}
