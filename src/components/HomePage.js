import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  const studentsData = [
    { id: 1, name: "Sameer", username: "sameersahu", score: "987" },
    { id: 2, name: "Sumit", username: "sumitpanda", score: "852" },
    { id: 3, name: "Pritish", username: "pritishsamal", score: "212" },
  ];

  const [studentList, setStudentList] = useState(studentsData);

  const deleteStudent = (id) => {
    setStudentList(studentList.filter((each) => each.id !== id));
  };

  return (
    <div className="container">
      <h1>All Student List</h1>
      <button onClick={() => navigate("/add")}>Add student</button>
      <div className="table-list">
        <table cellPadding="5" cellSpacing="5">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>score</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {studentList.length > 0 ? (
              studentList.map((each) => (
                <tr key={each.id}>
                  <td>{each.name}</td>
                  <td>{each.username}</td>
                  <td>{each.score}</td>
                  <td>
                    <button onClick={() => navigate("/edit")}>Edit</button>
                    <button onClick={() => deleteStudent(each.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colspan={5}>No users</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
