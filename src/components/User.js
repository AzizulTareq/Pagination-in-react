import React from 'react'

const User = ({user}) => {
    return (
        <div className="container">
        <div style={{padding: '5px', color: 'black', verticalAlign: 'middle', display: 'flex',   justifyContent: 'center'}}>
            <div className="ui card">
                <div className="content">
    <p className="header">{`${user.name.first} ${user.name.last}`}</p>
    <div className="meta">
      <p>{user.cell}</p>
      <p>{user.email}</p>
    </div>
  </div>
                </div>

        </div>
        </div>
    )
}

export default User
