import ReactWeather, { useOpenWeather } from 'react-open-weather';
import React, { useEffect } from 'react';
import * as FullStory from '@fullstory/browser';
import './App.css';



function App() {
  useEffect(() => {
    FullStory.init({ orgId: '<Replace with your orgID>' });

  }, []);

  const { data, isLoading, errorMessage } = useOpenWeather({
    key: '4cf55dfa9a0ab63a939fffb8ae325498',
    lat: '1.2921',
    lon: '36.8219',
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  });

  return (
    <div className='App'>
      <ReactWeather
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang='en'
        locationLabel='Nairobi'
        unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
        showForecast
      />
    </div>
  );
}

export default App;
