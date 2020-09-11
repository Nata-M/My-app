import React from 'react'
import CreateUser from './CreateUser'
import AddInput from './AddUsers'

let notes2 = [
    'ლევან აბაშიძე - 35001164738 - ბესარიონი - 1997-08-14',
    'მარიამ მჭედლიშვილი - 15001664999 - თემური - 1993-07-07',
    'ზურაბ დვალი - 15004638292 - გიორგი - 1994-02-11 ',
    'სანდრო საბახტარაშვილი - 35004653392 - მამუკა - 1984-05-05',
    'დავით თოდაძე - 15004657679 - ალექსანდრე - 1988-06-19',
    'დიანა ონიანი - 35004563721 - ვიქტორი - 1992-04-20'
]

function Mysearch() {
    let arr = JSON.parse(localStorage.getItem('notes'))
    for (let i = 0; i < arr.length; i++) {
        let str = arr[i].toString();
        let firstDotPos = str.indexOf("-");
        let yourString = str.substring(firstDotPos + 1, firstDotPos + 13);
        let numb = Number(yourString);
        console.log(yourString);
        let mysearch = document.getElementById('mysearch');
        let mybtn = document.getElementById('search-btn');
        mybtn.addEventListener('click', function(){
    if (mysearch.value == numb) {
            let users= document.getElementById('ul-users');
            let cont = document.getElementById('content').appendChild(users);
            let li = document.createElement('li');
            li.className = 'ul-li';
            let livv = document.createTextNode(str);
            li.appendChild(livv);
            users.appendChild(li);
            mysearch.value = '';
        } else {console.log('no')}
        })}}
    

export default Mysearch