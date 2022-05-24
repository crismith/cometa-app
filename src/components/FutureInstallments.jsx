import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CardShare from './CardShare';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function FutureInstallments({ futureInstallmentsState, changeSetTotaltoPay }) {
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
              Cuotas futuras
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary">
              Dale click para expandir
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          {futureInstallmentsState.length === 0 ? (
            <div>Loading...</div>
          ) : (
            <section>
              {futureInstallmentsState.map((pendingInstallments) => (
                <Box key={pendingInstallments.id} sx={{ marginTop: '1rem' }}>
                  <CardShare
                    changeSetTotaltoPay={changeSetTotaltoPay}
                    name={pendingInstallments.name} 
                    due={pendingInstallments.due}
                    price={pendingInstallments.price} 
                    interest={pendingInstallments.interest}
                    item={pendingInstallments}
                    status={pendingInstallments.status}>
                  </CardShare>
                </Box>
              ))}
            </section>
          )}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
