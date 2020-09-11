import React from 'react'
import ReactDOM from 'react-dom';
import App from '../App';
import '../css/content.css';
import AddCarInput from './AddCarInput'
import CarsList from './CarsLIst';


let carnotes = [
    'ფორდი მუსტანგი - ZA9RU31B9XLA12338 - JJ-712-AA - წითელი', 
    'მერსედეს S100 - 2S3TD52V3Y6103456 - BG-293-AG - თეთრი',
    'ჰონდა CRV - 1N4AB41D7VC757660 - SF-102-FF - ლურჯი ',
    'ჰიუნდაი ელანტრა - 1D7HA18D44J218509 - QQ-050-QQ - შავი',
    'ტოიოტა პრიუსი - JH4KA4540JC050162 - MM-505-MM - შავი',
    'კია სპორტიჯი - 1FV3EFAC7TL676933 - GG-444-TT - თეთრი'
]

function CreateCar() {
    let mybutton = document.getElementById('add-btn');
    const storage = window.localStorage;
    const notesStr = storage.getItem('carnotes');
    if (!notesStr) {
    storage.setItem('carnotes', JSON.stringify(carnotes));}
    else {carnotes = JSON.parse(notesStr);}
    for (let note of carnotes) {
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
            carnotes.push(inputs);
            storage.setItem('carnotes', JSON.stringify(carnotes));
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
            carnotes.splice(i, 1);
            storage.setItem('carnotes', JSON.stringify(carnotes));
        }}
        for (let i = 0; i < editBtns.length; ++i) {
            editBtns[i].onclick = function () {
                let div = editBtns[i].parentElement;

                AddNewInput();
                // div.style.display = "none";
                // notes.splice(i, 1);
                storage.setItem('carnotes', JSON.stringify(carnotes));
            }}
        };

    
    mybutton.addEventListener('click', function() {
        let myinput = document.getElementById('input1');
        let inpLastname = document.getElementById('input2');
        let idNumber = document.getElementById('input3');
        let fatherName = document.getElementById('input4');
        let birthDate = document.getElementById('input5');
        if (idNumber.value.length == 0) {
            idNumber.style.borderColor = 'red'}
        else if (fatherName.value.length == 0) {
            fatherName.style.borderColor = 'red'
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
    input.value = JSON.parse(localStorage.getItem('notes')[0])
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
    input.placeholder = 'მარკა';
    input2.type = 'text';
    input2.name = 'lastname';
    input2.placeholder = 'მოდელი';
    input2.className = 'input-style';
    input2.id = 'input2';
    input3.type = 'text';
    input3.name = 'ID';
    input3.placeholder = 'VIN';
    input3.className = 'input-style';
    input3.id = 'input3';
    input4.type = 'text';
    input4.name = 'name';
    input4.placeholder = 'სახელმწიფო ნომერი';
    input4.className = 'input-style';
    input4.id = 'input4';
    input5.type = 'text';
    input5.name = 'birthdate';
    input5.placeholder = 'ფერი';
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
CreateCar();
}
export default CreateCar