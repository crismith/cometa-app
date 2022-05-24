import React, { useRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function CardShare({ name, due, price, interest, status, item, changeSetTotaltoPay}) {

  let statusName = status === "DUE" ? "Interes" : "Ahorras";  
  const taksNewRef = useRef();
  const isCheckboxChecked = (checked) => {
    changeSetTotaltoPay(item, checked);
  };

  // let { name, due, price, interest} = pending;
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <Typography sx={{ fontSize: 14, fontWeight: 600 }} color="text.secondary">
            {name}
          </Typography>
          <Typography sx={{ fontSize: 12 }}>
            Vencido el {due}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            <Typography sx={{ fontSize: 15, textAlign: 'right', fontWeight: 600 }}>
              $ {price}
            </Typography>
            <Typography sx={{ fontSize: 13 }} color="text.secondary">
              { statusName }: $ { interest ? interest : 0 }
            </Typography>
          </Box>
          <Box>
            <Checkbox {...label} ref={taksNewRef}
            onChange={(e) => isCheckboxChecked(e.target.checked)} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
