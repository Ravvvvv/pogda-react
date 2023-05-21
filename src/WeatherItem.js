const WeatherItem = (props) => {
    return (
        <div className="weatherItem" >
            <h2>{props.weatherItem.stacja} </h2>
            <p>Temperatura: {props.weatherItem.temperatura} st.C </p>
            <p>Cisnienie:{"  "} {props.weatherItem.cisnienie ? props.weatherItem.cisnienie + 'hpa' : 'brak danych'}  </p>
            <p>predkosc wiatru: {props.weatherItem.predkosc_wiatru} km/h </p>
            <p>Godzina pomiaru: {props.weatherItem.godzina_pomiaru} h </p>

        </div>
    )
}


export default WeatherItem;