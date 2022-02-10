const getFahrenheitFromCelcius = (celcius) => (celcius * 9) / 5 + 32;
const getKelvinFromCelcius = (celcius) => celcius + 273;
const getReamurFromCelcius = (celcius) => (celcius * 4) / 5;

const getCelciusFromFahrenheit = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
const getKelvinFromFahrenheit = (fahrenheit) =>
  getCelciusFromFahrenheit(fahrenheit) + 273;
const getReamurFromFahrenheit = (fahrenheit) => ((fahrenheit - 32) * 4) / 9;

const getCelciusFromKelvin = (kelvin) => kelvin - 273;
const getFahrenheitFromKelvin = (kelvin) =>
  getFahrenheitFromCelcius(kelvin - 273);
const getReamurFromKelvin = (kelvin) => getReamurFromCelcius(kelvin - 273);

const getCelciusFromReamur = (reamur) => (reamur * 5) / 4;
const getFahrenheitFromReamur = (reamur) =>
  getFahrenheitFromCelcius((reamur * 5) / 4);
const getKelvinFromReamur = (reamur) => getCelciusFromReamur(reamur) + 273;
