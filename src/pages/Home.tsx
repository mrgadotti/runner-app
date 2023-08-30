import React, { useState } from 'react';
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
              <Button
                variant='contained'
                size='medium'
                onClick={() => {
                  console.log('bt');
                }}
              >
                Calcular
              </Button>
            </div>
            <div style={{ marginTop: '20px' }}>
              <table
                style={{
                  border: '1px solid black',
                  width: '100%',
                  borderCollapse: 'collapse'
                }}
              >
                <tr>
                  <td
                    style={{
                      border: '1px solid #dddddd',
                      padding: '8px',
                      textAlign: 'right'
                    }}
                  >
                    00:00
                  </td>
                  <th
                    style={{
                      border: '1px solid #dddddd',
                      padding: '8px',
                      textAlign: 'center'
                    }}
                  >
                    min/km
                  </th>
                </tr>
                <tr>
                  <td
                    style={{
                      border: '1px solid #dddddd',
                      padding: '8px',
                      textAlign: 'right'
                    }}
                  >
                    0.0
                  </td>
                  <th
                    style={{
                      border: '1px solid #dddddd',
                      padding: '8px',
                      textAlign: 'center'
                    }}
                  >
                    km/h
                  </th>
                </tr>
                <tr>
                  <td
                    style={{
                      border: '1px solid #dddddd',
                      padding: '8px',
                      textAlign: 'right'
                    }}
                  >
                    00:00
                  </td>
                  <th
                    style={{
                      border: '1px solid #dddddd',
                      padding: '8px',
                      textAlign: 'center'
                    }}
                  >
                    min/mi
                  </th>
                </tr>
                <tr>
                  <td
                    style={{
                      border: '1px solid #dddddd',
                      padding: '8px',
                      textAlign: 'right'
                    }}
                  >
                    0.0
                  </td>
                  <th
                    style={{
                      border: '1px solid #dddddd',
                      padding: '8px',
                      textAlign: 'center'
                    }}
                  >
                    mi/min
                  </th>
                </tr>
                <tr>
                  <td
                    style={{
                      border: '1px solid #dddddd',
                      padding: '8px',
                      textAlign: 'right'
                    }}
                  >
                    00:00
                  </td>
                  <th
                    style={{
                      border: '1px solid #dddddd',
                      padding: '8px',
                      textAlign: 'center'
                    }}
                  >
                    min/400m
                  </th>
                </tr>
              </table>
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
