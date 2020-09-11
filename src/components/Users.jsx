import React from 'react';
import '../css/content.css';
import AddUser from './AddUser'
import UsersList from './UsersList'

function Users() {
    return (
        <div id='content-users'>
            <h1 >მომხმარებელთა ბაზა</h1>
            <AddUser />
            <UsersList />
        </div>
    )
}
export default Users