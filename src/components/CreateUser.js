import React from 'react'
import ReactDOM from 'react-dom';
import App from '../App';
import Myelement from './AddUser'
import AddUsers from './AddUsers'
import '../css/content.css';
import AddInput from './AddUsers'
import UsersList from './UsersList';


let notes = [
    'ლევან აბაშიძე - 35001164738 - მიხეილ - 1997-08-14',
    'მარიამ მჭედლიშვილი - 15001664999 - თემური - 1993-07-07',
    'ზურაბ დვალი - 15004638292 - გიორგი - 1994-02-11 ',
    'სანდრო საბახტარაშვილი - 35004653392 - მამუკა - 1984-05-05',
    'დავით თოდაძე - 15004657679 - ალექსანდრე - 1988-06-19',
    'დიანა ონიანი - 35004563721 - ვიქტორი - 1992-04-20'
]

function CreateUser() {
    let mybutton = document.getElementById('add-btn');
    const storage = window.localStorage;
    const notesStr = storage.getItem('notes');
    if (!notesStr) {
    storage.setItem('notes', JSON.stringify(notes));}
    else {notes = JSON.parse(notesStr);}
    for (let note of notes) {
        addNewNote(note);
    }

    let addButton = function() {
        let storage = window.localStorage;
            let input = document.getElementById('input1').value;
            let input2 = document.getElementById('input2').value;
            let input3 = document.getElementById('input3').value;
            let input4 = document.getElementById('input4').value;
            let input5 = document.getElementById('input5').value;
            let name = input.concat(' ', input2);
            let inputs = [name, input3, input4, input5];
            inputs = inputs.join(' - ');
            notes.push(inputs);
            storage.setItem('notes', JSON.stringify(notes));
            addNewNote(inputs);
            document.getElementsByClassName('input-style').value = "";
    }
    
    function addNewNote(note) {
        let listt = document.createElement("li");
        listt.className = 'ul-li';
        let liv = document.createTextNode(note);
        listt.appendChild(liv);
                let del = document.createElement("span");
                let edit = document.createElement("span");
                edit.appendChild(document.createTextNode("\uD83D\uDD89"));
                edit.className = 'edit';
                edit.id = 'edit';
                del.appendChild(document.createTextNode('\u00D7'));
                // \u00D7
                del.className = "close";
                listt.appendChild(edit);
                listt.appendChild(del);
        document.getElementById("ul-users").appendChild(listt);
        let closeBtns = document.getElementsByClassName("close");
        let editBtns = document.getElementsByClassName("edit");
    for (let i = 0; i < closeBtns.length; ++i) {
        closeBtns[i].onclick = function () {
            let div = closeBtns[i].parentElement;
            div.style.display = "none";
            notes.splice(i, 1);
            storage.setItem('notes', JSON.stringify(notes));
        }}
        for (let i = 0; i < editBtns.length; ++i) {
            editBtns[i].onclick = function () {
                console.log('ok')
                // let div = editBtns[i].parentElement;
                // let delt = document.getElementById('add-display')
                // delt.style.display = 'none';
                // AddInp();
                // storage.setItem('notes', JSON.stringify(notes));
            }}
        };
    
    mybutton.addEventListener('click', function() {
        let myinput = document.getElementById('input1');
        let inpLastname = document.getElementById('input2');
        let idNumber = document.getElementById('input3');
        let fatherName = document.getElementById('input4');
        let birthDate = document.getElementById('input5');
        if (myinput.value.length == 0) {
            myinput.style.borderColor = 'red'}
        else if (inpLastname.value.length == 0) {
            inpLastname.style.borderColor = 'red'
        }
        else if (idNumber.value.length == 0) {
            idNumber.style.borderColor = 'red'
        }
        else {
            myinput.style.borderColor = "";
            inpLastname.style.borderColor = "";
            idNumber.style.borderColor = "";
            addButton();
            myinput.value = "";
            inpLastname.value = '';
            idNumber.value = '';
            fatherName.value = '';
            birthDate.value = '';
        }
        })
};


function AddNewInput() {
    let mybtn = document.getElementById('mybtn');
    let btn = document.getElementById('btn');
    let mysearch = document.getElementById('mysearch');
    let mydiv = document.createElement('div')
    mydiv.className = 'add-display';
    mydiv.id = 'add-display';
    let input = document.createElement("input");
    // input.value = JSON.parse(localStorage.getItem('notes')[0])
    let input2 = document.createElement('input');
    let input3 = document.createElement('input');
    let input4 = document.createElement('input');
    let input5 = document.createElement('input');
    let mybutton = document.createElement('button');
    mybutton.className = 'addbutton';
    mybutton.id = 'add-btn';
    mybutton.innerHTML = 'დამატება';
    input.type = 'required';
    input.name = 'firstname';
    input.className = 'input-style';
    input.id = 'input1';
    input.placeholder = 'სახელი';
    input2.type = 'text';
    input2.name = 'lastname';
    input2.placeholder = 'გვარი';
    input2.className = 'input-style';
    input2.id = 'input2';
    input3.type = 'number';
    input3.name = 'ID';
    input3.placeholder = 'ID';
    input3.className = 'input-style';
    input3.id = 'input3';
    input4.type = 'text';
    input4.name = 'name';
    input4.placeholder = 'მამის სახელი';
    input4.className = 'input-style';
    input4.id = 'input4';
    input5.type = 'date';
    input5.name = 'birthdate';
    input5.placeholder = 'დაბადების თარიღი';
    input5.className = 'input-style';
    input5.id = 'input5';
    mydiv.appendChild(input);
    mydiv.appendChild(input2);
    mydiv.appendChild(input3);
    mydiv.appendChild(input4);
    mydiv.appendChild(input5);
    mydiv.appendChild(mybutton);
    btn.appendChild(mydiv);
    function remove() {
    mybtn.style.display= 'none';
    mysearch.style.display = 'none';
}
remove();
CreateUser();
}
export default CreateUser