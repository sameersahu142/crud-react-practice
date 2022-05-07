import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = ({ addStudent }) => {
  let navigate = useNavigate();

  const initialFormState = { id: null, name: "", username: "", score: "" };
  const [student, setStudent] = useState(initialFormState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  return (
    <div className="container">
      <div className="form-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addStudent(student);
            setStudent(initialFormState);
            navigate("/");
          }}
        >
          <div className="label-input">
            <label style={{ width: "130px" }}>Name</label>
            <input
              type="text"
              name="name"
              value={student.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="label-input">
            <label style={{ width: "130px" }}>Username</label>
            <input
              type="text"
              name="username"
              value={student.username}
              onChange={handleInputChange}
            />
          </div>
          <div className="label-input">
            <label style={{ width: "130px" }}>Score</label>
            <input
              type="number"
              name="score"
              value={student.score}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <button>Add New Student</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
