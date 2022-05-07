import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Edit = ({ currentStudent, updateStudent }) => {
  let navigate = useNavigate();

  const [student, setStudent] = useState(currentStudent);

  useEffect(() => {
    setStudent(currentStudent);
  }, [currentStudent]);

  console.log(currentStudent);
  console.log(student);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setStudent({...student, [name]: value});
};

  return (
    <div className="container">
      <div className="form-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            updateStudent(student.id, student);
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
            <button>Update Student</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
