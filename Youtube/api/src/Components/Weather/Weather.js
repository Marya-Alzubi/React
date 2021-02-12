import React from 'react';

const Weather = (props) => {
        return (
            <div>
               <p>temperature: {props.tempreature}</p>
                <p>city: {props.city}</p>
                <p>country: {props.country}</p>
                <p>humidity: {props.humidity}</p>
                <p>description: {props.description}</p>
            </div>
        );
}

export default Weather;