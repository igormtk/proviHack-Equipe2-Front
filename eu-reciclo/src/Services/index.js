import axios from "axios";

const api = axios.create({
  baseURL: "https://eu-reciclo.herokuapp.com",
});

export default api;

const ACCESS_TOKEN_MAP_BOX = `access_token=pk.eyJ1Ijoid2lsbGlhbmQxIiwiYSI6ImNsMm5jeXRlMjA0ajAzY28wcHVoaDQ1YmMifQ.mzoXDafxXBR6E1Jb9rSPfw`;

export const fetchLocalMapBox = (local) =>
  fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?${ACCESS_TOKEN_MAP_BOX}`
  )
    .then((response) => response.json())
    .then((data) => data);

export const ViaCep = axios.create({
  baseURL: "https://viacep.com.br/ws",
});
