import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { type SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { Main } from './styles';

const Home: React.FC = () => {
  const [type, setType] = useState('pace');

  const handleChange = (event: SelectChangeEvent): void => {
    setType(event.target.value);
  };

  useEffect(() => {
    console.log(type);
  }, [type]);

  return (
    <Main>
      <Box sx={{ minWidth: 300 }}>
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>
            Escolha o conversor
          </InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={type}
            label='Escolha o conversor'
            defaultValue='pace'
            onChange={handleChange}
            size='small'
          >
            <MenuItem value={'pace'}>Pace</MenuItem>
            <MenuItem value={'vel'}>Velocidade</MenuItem>
            <MenuItem value={'dist'}>Distância</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 300 }}>
        {type === 'pace' && (
          <>
            <h2>Conversor de Pace</h2>
            <Box sx={{ width: 150 }}>
              <TextField
                id='outlined-basic'
                label='Infome o Pace'
                variant='outlined'
                size='small'
                placeholder='00:00:00'
              />
            </Box>
            <div style={{ marginTop: '20px' }}>
              <Button variant='contained' size='medium'>
                Calcular
              </Button>
            </div>
          </>
        )}
        {type === 'vel' && <h2>Conversor de Velocidade</h2>}
        {type === 'dist' && <h2>Conversor de Distância</h2>}
      </Box>
    </Main>
  );
};

export default Home;
