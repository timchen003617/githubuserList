import "./App.css";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers, fetchOneUser } from "./actions";
import Pagination from "./components/Pagination";
import CircularProgress from "@material-ui/core/CircularProgress";

let handleJumpPage = (pageNum, setCurrentPage) => () => {
  setCurrentPage(pageNum);
};

let handlePrevPage = (currentPage, setCurrentPage) => () => {
  let getPrevPage = currentPage - 1;
  if (getPrevPage < 1) {
    getPrevPage = 1;
  }
  setCurrentPage(getPrevPage);
};

let handleNextPage = (currentPage, lastPage, setCurrentPage) => () => {
  let getNexPage = currentPage + 1;
  if (getNexPage > lastPage) {
    getNexPage = lastPage;
  }
  setCurrentPage(getNexPage);
};

let App = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const defaultPerpage = 100;
  const rowsPerpage = 5;
  const { fetchUsers, users, getUsersIsLoading, fetchOneUser, oneuser } = props;

  useEffect(() => {
    fetchUsers({
      per_page: defaultPerpage,
    });
  }, []);

  return (
    <div className="App">
      <div className="App-body">
        {getUsersIsLoading ? (
          <CircularProgress />
        ) : (
          (rowsPerpage > 0
            ? users.slice(
                (currentPage - 1) * rowsPerpage,
                (currentPage - 1) * rowsPerpage + rowsPerpage
              )
            : users
          ).map((user, index) => (
            <div key={user.id} className="App-item">
              <img className="App-avatar" src={`${user.avatar_url}`} />
              <div>
                <h2>{user.login}</h2>
                <h2>{`site_admin: ${user.site_admin}`}</h2>
                <p className="numberofitems">{index + 1}</p>
                <a
                  href="#"
                  onClick={() => fetchOneUser({ username: user.login })}
                >
                  detail
                </a>
                <div>
                  {oneuser && oneuser.node_id === user.node_id && (
                    <div>
                      <h2>Detail:</h2>
                      <p>Login:{oneuser.login}</p>
                      <p>Name:{oneuser.name}</p>
                      <p>Bio:{oneuser.bio}</p>
                      <p>Location:{oneuser.location}</p>
                      <p>Blog:{oneuser.blog}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
        <div>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            perpage={rowsPerpage}
            handleJumpPage={handleJumpPage}
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
            dataLength={users && users.length}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    users: state.userList && state.userList.users,
    oneuser: state.oneuser && state.oneuser.userData,
    getUsersIsLoading: state.userList && state.userList.isLoading,
  };
};

const mapDispatchToProps = {
  fetchUsers,
  fetchOneUser,
};

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
