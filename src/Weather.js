import axios from "axios"
import './Weather.css'

import { useEffect, useState } from "react"
import SearchWeather from "./SearchWeather";
import WeatherItem from "./WeatherItem";
//component funkcyjny weather. Musi byc eksportowany i zwracac widok
const Weather = (props) => {

    const [weatherData, setWeatherData] = useState([]); //pusta tablica ze trzeba zmapować
    // lista bazowa
    const [weatherDataAfterFilter, setWeatherDataAfterFilter] = useState([]);
    // lise przefiltrowana 
    console.log(Weather);
    // stan hook ktory przetrzymoje wartosc 



    const getWeatherData = () => {
        // axios get(pobierz) prametr tej metody adres api.(podobne do jsosn i fecz api)
        axios.get('https://danepubliczne.imgw.pl/api/data/synop')
            // parametrem ' then"jest funkcja zwrotna ktora przyjemi parametr odpowiedzi.
            .then((res) => {
                setWeatherData(res.data);
                setWeatherDataAfterFilter(res.data); //pobrane dane 
                // tablica o pogdzie znajduje sie w obiekcie res .data
                console.log('res');// logujemy stan
                //funkcja zwrotna res gdzie przyjmie  parament odpowiedzi
            });
    };


    
    const filterWeather = (searchValue) => {
        console.log(searchValue);
        //robimy  filtr naszej talicy 
        //weatherData Tablica  filter (weatheritem zwracal lub tylko zwracal ktore maja weather item stacja jest zawart ten ciag znakow w inpucie w serach zawartosci ) Metoda includes true lub fals zwraca
        const filterWeatherData = weatherData.filter(weatherItem => weatherItem.stacja.toLowerCase().includes(searchValue.toLowerCase()));

        //toLowercase zamienia na male literry

        console.log(filterWeatherData);

        // filterWeatherData jest tutaj stanem
        setWeatherDataAfterFilter(filterWeatherData);
        //potrzebny jest 

    };
    //city jest parametrem gdyz filtrujemy za pomoca miast


    useEffect(() => {
        // use efektu odpowiada za cykl zycia naszego  komponent 
        // useEfekt dziala tak wywolujemy funkcje wewnatrz naszego ekomponentu przekazujemy funkcje jako parament i przekazujemy tablice zaleznosci czyli useefekt wykona sie tylko raz bo nasza tabblica jest pusta
        getWeatherData();
        console.log('test useEfekt');

    }, []);
    console.log(weatherData);

    return (
        <div className="weather">
            <h2>Prognoza Pogody</h2> {props.Weather}


            <SearchWeather filterWeather={filterWeather} />

            <div className="weatherList">
                
                {weatherDataAfterFilter.map((weatherItem) => {// potrzeba ja mapowac 
                    console.log('test2');
                    // o co chodzi z kluczem tego nie wiem?
                    // czy dzieki temu kluczowi pobierane sa dane?>?>?
                    // do kluczowania szukamy unikatowych indyfikatorow
                    return <WeatherItem weatherItem={weatherItem} key={weatherItem.id_stacji} />


                })}
            </div>
        </div>
    );

};

export default Weather