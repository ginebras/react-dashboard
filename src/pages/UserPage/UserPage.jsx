import React from 'react';
import './UserPage.css';

export default function UserPage() {
  return (
    <div className="userPage">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <button className="createButton">Create</button>
      </div>

      <div className="userInfoContainer">
        <div className="showInfo">
          <div className="showTopInfo">
            <img
              src="https://images.unsplash.com/photo-1647737492369-fb6e7607cb4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDc1fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt="img-info"
              className="top-img"
            />

            <div className="userTopInfo">
              <span className="userName">Anna Becker</span>
              <span className="userProfession">Software Engineer</span>
            </div>
          </div>

          <div className="showBottomInfo">
            <span className="bottomTitle">Account Details</span>
            <div className="bottomInfoContainer">
              <div className="detailsContainer">
                <i className="bi bi-person"></i>
                <span className="infoDetail">annabeck69</span>
              </div>

              <div className="detailsContainer">
                <i className="bi bi-calendar"></i>
                <span className="infoDetail">10.12.2004</span>
              </div>
            </div>

            <span className="bottomTitle">Contact Details</span>
            <div className="bottomInfoContainer">
              <div className="detailsContainer">
                <i className="bi bi-phone"></i>
                <span className="infoDetail">+1 234 567 89</span>
              </div>

              <div className="detailsContainer">
                <i className="bi bi-envelope"></i>
                <span className="infoDetail">annabeck69@gmail.com</span>
              </div>

              <div className="detailsContainer">
                <i className="bi bi-heptagon"></i>
                <span className="infoDetail">New York,USA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="showCreate"></div>
      </div>
    </div>
  );
}
