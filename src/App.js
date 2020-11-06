import './App.css'
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from './actions'

let App = props => {

  const { fetchUsers, users } = props

  useEffect(() => {
    fetchUsers({
      per_page: 100
    })
  }, [])

  return (
      <div className="App">
        <div className="App-body">
          {
            users.map((user, index) => (
              <div key={user.id} className="App-item">
                <img className="App-avatar" src={`${user.avatar_url}`} />
                <div>
                <h2>name: {user.login}</h2>
                <h2>{`site_admin: ${user.site_admin}`}</h2>
                <p className="numberofitems">{index + 1}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
  );
}

const mapStateToProps = (state, props) => {
  return {
    users: state.userList && state.userList.users
  }
}

const mapDispatchToProps = {
  fetchUsers
}

App = connect(mapStateToProps, mapDispatchToProps)(App)

export default App;
