import './App.css';
import Weather from './component/weather';
import Detail from './component/details';
import { useEffect, useState } from 'react';
import { geolocated } from 'react-geolocated';
import logo from '../src/logo192.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function App() {
  const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?';
  const appId = '48887d7f6b72eb3be5c5fd8a8ed4ae1c';
  const [lat, setLat] = useState(21.028511);
  const [long, setLong] = useState(105.804817);
  const [data, setData] = useState(null);
  const [city, setCity] = useState('');

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

  const handleSubmit = () => {
    loadData(city);
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  }




  async function loadData(city) {
    if (city == undefined) {
      try {
        getLocation();
        const response = await fetch(`${baseUrl}lat=${lat}&lon=${long}&units=metric&appid=${appId}`);
        const data = await response.json();
        setData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const response = await fetch(`${baseUrl}q=${city}&units=metric&appid=${appId}`);
        const data = await response.json();
        setData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }

    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    data != undefined ? (
      <div className='App'>
        <div className='header'>
          <div className='header-inner'>
            <div className='logo-inner'>
              <a href='/' className='link'>
                <img src={logo} alt='logo' />
                <div className='app-name'>Simple Weather</div>
              </a>
            </div>
            <div className='search'>
              <input type='text' placeholder='Enter the city name' value={city} onChange={(e) => setCity(e.target.value)} onKeyUp={handleKeyPress} />
              < FontAwesomeIcon icon={faSearch} color='#fff' size='lg' className='icon-search' onClick={handleSubmit} />
            </div>
          </div>
        </div>
        <Weather data={data} />
        <Detail data={data} />
      </div>
    ) : (
      <div className='App'>
        <div className='header'>
          <div className='header-inner'>
            <div className='logo-inner'>
              <a href='/' className='link'>
                <img src={logo} alt='logo' />
                <div className='app-name'>Simple Weather</div>
              </a>
            </div>
            <div className='search'>
              <input type='text' placeholder='Enter the city name' value={city} onChange={(e) => setCity(e.target.value)} onKeyUp={handleSubmit} />
              < FontAwesomeIcon icon={faSearch} color='#fff' size='lg' className='icon-search' onClick={handleKeyPress} />
            </div>
          </div>
        </div>
        <h1>Loading
        </h1>

      </div>
    )
  );
}

export default App;
