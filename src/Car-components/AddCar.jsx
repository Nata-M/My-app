import React from 'react'
import '../css/content.css';
import AddCarInput from './AddCarInput'
import MyCarsearch from './CarSearch';

function AddCar() {
    
    return (
        <div id='btn'>
            <button id='mybtn' onClick={AddCarInput}> + ახალი ავტომობილის დამატება</button>
            <input id='mysearch' type="text" placeholder="ძებნა VIN ნომრით..." onClick={MyCarsearch}/>
            <button id = 'search-btn'><i class="fa fa-search"></i></button>
        </div>
    )
}

export default AddCar