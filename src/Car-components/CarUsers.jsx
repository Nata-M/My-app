import React from 'react';
import '../css/content.css';
import AddCar from './AddCar'
import CarsList from './CarsLIst'

function CarUsers() {
    return (
        <div id='content-users'>
            <h1>ავტომობილების ბაზა</h1>
            <AddCar />
            <CarsList />
        </div>
    )
}
export default CarUsers