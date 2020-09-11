import React from 'react';
import '../css/content.css';
import Users from '../components/Users'
import Total from './total'
import TotalCars from './totalCars'
import CreateCar from '../Car-components/CreateCar'

function Home() {
    return (
        <div className='content home-' id='content'>
            <div className='home' id='home' onClick={Total}> სულ მომხმარებლები</div>
            <div className='home' id='home-car' onClick={TotalCars}>სულ ავტომობილები</div>
        </div>
    )
}
export default Home