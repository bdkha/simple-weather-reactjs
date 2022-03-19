
import './App.css';
import Weather from './component/weather';
import Detail from './component/details';
import { useEffect, useState } from 'react';
import { geolocated } from 'react-geolocated';

function App() {
  const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?';
  const appId = '48887d7f6b72eb3be5c5fd8a8ed4ae1c';
  const [lat, setLat] = useState(21.028511);
  const [long, setLong] = useState(105.804817);
  const [data, setData] = useState(null);
  const [city, setCity] = useState(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          if (position.coords.latitude && position.coords.longitude) {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
          }
          console.log(lat);
          console.log(long);
        },
        error => {
          console.log(error);
        }

      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  };




  async function loadData() {
    try {
      getLocation();
      const response = await fetch(`${baseUrl}lat=${lat}&lon=${long}&units=metric&appid=${appId}`);
      const data = await response.json();
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    lat && long ? (
      <div className='App'>
        <Weather data={data} />
        <Detail data={data} />

      </div>
    ) : (
      <div className='App'>
        <h1>Loading...</h1>
        {loadData()}
      </div>
    )
  );
}

export default App;
