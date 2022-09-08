import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'


export default function ExitButton() {
  return (
    <Stack direction="row" spacing={2}>
    <Link to="/">
      <Button variant="contained" color="error">             
        SAIR
      </Button>
      </Link>
    </Stack>
  );
}
