import React from 'react'

function Total() {
    let arr = JSON.parse(localStorage.getItem('notes'))
    let l = arr.length;
    let h1 = document.createElement('h1');
    h1.appendChild(document.createTextNode(l));

    document.getElementById('home').appendChild(h1);
    }

export default Total