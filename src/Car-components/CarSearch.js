import React from 'react'
import CreateCar from './CreateCar'
import AddCarInput from './AddCarInput'

function MyCarsearch() {
    let arr = JSON.parse(localStorage.getItem('carnotes'))
    for (let i = 0; i < arr.length; i++) {
        let str = arr[i].toString()
        let firstDotPos = str.indexOf("-");
        let yourString = str.substring(firstDotPos + 2, firstDotPos + 19);
        let mysearch = document.getElementById('mysearch');
        let mybtn = document.getElementById('search-btn');
        mybtn.addEventListener('click', function(){
    if (mysearch.value == yourString) {
            let users= document.getElementById('ul-users');
            let cont = document.getElementById('content').appendChild(users);
            let li = document.createElement('li');
            li.className = 'ul-li';
            let livv = document.createTextNode(str);
            li.appendChild(livv);
            users.appendChild(li);
            mysearch.value = '';
            console.log('yes');
        } else {console.log('No')}
        })}}

export default MyCarsearch