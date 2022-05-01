import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function ResiduesCard({ data }) {
  const meses = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ];
  let date = new Date(data.date);
  let dataFormatada =
    date.getDate() +
    ' ' +
    meses[date.getMonth()] +
    ' ' +
    date.getFullYear() +
    ' ' +
    date.getHours() +
    ':' +
    date.getMinutes();

  return (
    <Card
      sx={{
        width: 280,
        minHeight: 220,
        textAlign: 'center',
        backgroundColor: '#0df10e0d',
      }}
      variant="outlined"
    >
      <CardContent>
        <Typography variant="h3" color="#28b411">
          {data.user.name}
        </Typography>
        <Typography color="black" variant="subtitle1">
          <b>Endereço:</b> {data.address.complement} {data.address.street},{' '}
          {data.address.number} - {data.address.district}, {data.address.city} -
          {data.address.state}, {data.address.cep}
        </Typography>
        <Typography color="black" variant="subtitle1">
          <b>Tipo:</b> {data.type}
        </Typography>
        <Typography color="black" variant="subtitle1">
          <b>Quantidade:</b> {data.quantity}
        </Typography>
        <Typography color="black" variant="subtitle1">
          <b>Coleta:</b> {dataFormatada}hr
        </Typography>
      </CardContent>
    </Card>
  );
}
