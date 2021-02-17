import React, { Fragment, useEffect, useState } from "react";

const UseEffectAPI = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await window.fetch("https://api.github.com/users");
    setUsers(await response.json());
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Fragment>
      <h2 className="text-center">List of Github Users</h2>
      <div className="container-fluid mt-5">
        <div className="row text-center">
          {users.map((currElem) => {
            return (
              <div className="col-10 col-md-4 mt-5">
                <div className="card p-2">
                  <div className="d-flex align-items-center">
                    <div className="image">
                      <img
                        src={currElem.avatar_url}
                        className="rounded"
                        width="155"
                      />
                    </div>
                    <div className="ml-3 w-100">
                      <h4 className="mb-0 mt-0 text-left">{currElem.login}</h4>
                      <span className="text-left">Web Developers</span>
                      <div className="p-2 mt-2 bg-primary d-flex justify-content-center rounded text-white ">
                        <div className="d-flex flex-column p-3 ">
                          <span className="articles">Articles</span>
                          <span className="number1">38</span>
                        </div>
                        <div className="d-flex flex-column p-3">
                          <span className="followers">Followers</span>
                          <span className="number2">980</span>
                        </div>
                        <div className="d-flex flex-column p-3">
                          <span className="rating">Rating</span>
                          <span className="number3">8.9</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default UseEffectAPI;
