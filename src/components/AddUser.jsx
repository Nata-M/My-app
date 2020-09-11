import React from 'react'
import '../css/content.css';
import AddInput from './AddUsers'
import CreateUser from './CreateUser'
import Mysearch from './Search'

function AddUser() {
    
    return (
        <div id='btn'>
            <button id='mybtn' onClick={AddInput}> +   ახალი მომხმარებლის დამატება</button>
            <input id='mysearch' type="text" placeholder="ძებნა პირადი ნომრით..." onClick={Mysearch}/>
            <button id = 'search-btn'><i class="fa fa-search"></i></button>
        </div>
    )
}

export default AddUser