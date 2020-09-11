import React from 'react'
import ReactDOM from 'react-dom';
import App from '../App';
import CreateCar from './CreateCar'
// import Myelement from './AddUser'
// import CreateUser from './CreateUser'
// import Mysearch from './Search';

// const FunctionElement = function AddFunction () {
//     console.log('ok');
//     return ( 
//         <div id='divdiv' className='add-display'>
//             <input type="text" placeholder="სახელი"/>
//             <input type="text" placeholder="გვარი"/>
//             <input type="number" placeholder="ID"/>
//             <input type="text" placeholder="მამის სახელი"/>
//             <input type="text" placeholder="დაბადების თარიღი"/>
//             <button>დამატება </button>
//         </div>
//     )
// }




     function AddCarInput() {
            let mybtn = document.getElementById('mybtn');
            let btn = document.getElementById('btn');
            let mysearch = document.getElementById('mysearch');
            let mydiv = document.createElement('div')
            mydiv.className = 'add-display';
            mydiv.id = 'add-display';
            let input = document.createElement("input");
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
            document.getElementById('search-btn').style.display = 'none';
            mybtn.style.display= 'none';
            mysearch.style.display = 'none';
        }
        remove();
        CreateCar();
        }

export default AddCarInput