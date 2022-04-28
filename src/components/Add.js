import React from "react";

const Add = () => {
  return (
    <div className="container">
      <div className="form-container">
        <div className="label-input">
          <label style={{ width: "130px" }}>Name</label>
          <input type="text" name="name" />
        </div>
        <div className="label-input">
          <label style={{ width: "130px" }}>Username</label>
          <input type="text" name="username" />
        </div>
        <div className="label-input">
          <label style={{ width: "130px" }}>Score</label>
          <input type="number" name="score" />
        </div>
        <div>
          <button>Add New User</button>
        </div>
      </div>
    </div>
  );
};

export default Add;
