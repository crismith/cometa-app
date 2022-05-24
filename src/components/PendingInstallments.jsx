import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CardShare from './CardShare';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function PendingInstallments({ pendingInstallmentsState, changeSetTotaltoPay }) {
  
  return (
    <div>
      <Accordion sx={{ marginTop: '1rem' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Box>
            <Typography sx={{ fontSize: 16, fontWeight: 600 }} color="text.primary">
              Cuotas pendientes
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary">
              Puedes elegir mas de uno
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          {pendingInstallmentsState.length === 0 ? (
            <div>Loading...</div>
          ) : (
            <section>
              {pendingInstallmentsState.map((pending) => (
                <Box key={pending.id} sx={{ marginTop: '1rem' }}>
                  <CardShare
                  changeSetTotaltoPay={changeSetTotaltoPay}
                  name={pending.name} 
                  due={pending.due}
                  price={pending.price} 
                  interest={pending.interest}
                  item={pending}
                  status={pending.status}> </CardShare>
                </Box>
              ))}
            </section>
          )}
        </AccordionDetails>
      </Accordion>
    </div>

  );
}
