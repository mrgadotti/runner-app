import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { type SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Table from '../components/Table';

import { Main } from './styles';

const Home: React.FC = () => {
  const [type, setType] = useState('pace');
  const [inputTime, setInputTime] = useState('');

  const handleChange = (event: SelectChangeEvent): void => {
    setType(event.target.value);
  };

  const maskTime = (input: string): string => {
    const numericInput = input.replace(/[^\d]/g, '');
    const truncatedInput = numericInput.substring(0, 4);
    return truncatedInput.replace(/(\d{2})(\d{2})/, '$1:$2');
  };

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
                placeholder='00:00'
                onChange={e => {
                  setInputTime(maskTime(e.target.value));
                }}
                value={inputTime}
              />
            </Box>
            <Table type={0} value={inputTime}></Table>
          </>
        )}
        {type === 'vel' && <h2>Conversor de Velocidade</h2>}
        {type === 'dist' && <h2>Conversor de Distância</h2>}
      </Box>
    </Main>
  );
};

export default Home;
