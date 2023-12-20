import React from 'react';
import Button from '@mui/material/Button';
import { Container } from './style';
import { type Data } from '../../models';

const Table: React.FC<Data> = ({ type, value }) => {
  console.log(type);
  console.log(value);
  return (
    <Container>
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
    </Container>
  );
};

export default Table;
