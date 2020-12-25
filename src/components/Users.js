import React from 'react'
import { ITEM_PER_PAGE } from './utils/ConstantVariable'
import User from './User'


const Users = ({ users, page }) => {

    const startIndex = (page - 1) * ITEM_PER_PAGE;
    const selectUsers = users.slice(startIndex, startIndex + ITEM_PER_PAGE);
    return selectUsers.map(user => (
            <User user={user} key={user.login.uuid} />
       ))
}

export default Users;
