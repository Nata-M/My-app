import React from 'react'

function TotalCars() {
    let arr = JSON.parse(localStorage.getItem('carnotes'))
    let l = arr.length;
    let h1 = document.createElement('h1');
    h1.appendChild(document.createTextNode(l));
    document.getElementById('home-car').appendChild(h1);
    }

export default TotalCars