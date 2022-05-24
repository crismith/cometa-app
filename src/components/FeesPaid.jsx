import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FeesPaid({ feesPaidState }) {
  return (
    <div>
      <Accordion sx={{ marginTop: '1rem' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Box>
            <Typography sx={{ fontSize: 18, fontWeight: 600 }} color="text.primary">
              Cuotas Pagadas
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary">
              Dale click para expandir
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          </Box>

          {feesPaidState.length === 0 ? (
            <div>Loading...</div>
          ) : (
            <section>
              {feesPaidState.map((feesPaid) => (
                <Box key={feesPaid.id} sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
                  <Box>
                    <Typography sx={{ fontSize: 14, fontWeight: 600 }} color="text.secondary">
                      {feesPaid.name}
                    </Typography>
                    <Typography sx={{ fontSize: 14, fontWeight: 600 }} color="text.secondary">
                      Pagado el {feesPaid.due}
                    </Typography>
                  </Box>
                  <Box>
                    <ArrowForwardIosIcon></ArrowForwardIosIcon>
                  </Box>
                </Box>
              ))}
            </section>
          )}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
