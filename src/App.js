import './App.css'
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from './actions'
import Pagination from './components/Pagination'


let handleJumpPage = (pageNum, setCurrentPage) => () => {
  return setCurrentPage(pageNum)
}

let handlePrevPage = (currentPage, setCurrentPage) => () => {
  let getPrevPage = currentPage - 1
  if (getPrevPage < 1) {
    getPrevPage = 1
  }
  return setCurrentPage(getPrevPage)
}

let handleNextPage = (currentPage, lastPage, setCurrentPage) => () => {
  let getNexPage = currentPage + 1
  if (getNexPage > lastPage) {
    getNexPage = lastPage
  }
  return setCurrentPage(getNexPage)
}

let App = props => {
  const [currentPage, setCurrentPage] = useState(1)
  const [perpage, setPerpage] = useState(100)
  const [rowsPerpage, setRowsPerpage] = useState(5)
  const { fetchUsers, users } = props

  useEffect(() => {
    fetchUsers({
      per_page: perpage
    })
  }, [])

  return (
    <div className="App">
      <div className="App-body">
        {
          (rowsPerpage > 0
            ? users.slice((currentPage - 1) * rowsPerpage, (currentPage - 1) * rowsPerpage + rowsPerpage)
            : users
          ).map((user, index) => (
            <div key={user.id} className="App-item">
              <img className="App-avatar" src={`${user.avatar_url}`} />
              <div>
                <h2>name: {user.login}</h2>
                <h2>{`site_admin: ${user.site_admin}`}</h2>
                <p className="numberofitems">{user.id}</p>
              </div>
            </div>
          ))
        }
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} perpage={rowsPerpage} handleJumpPage={handleJumpPage}
          handlePrevPage={handlePrevPage} handleNextPage={handleNextPage} dataLength={users && users.length}
        />
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
