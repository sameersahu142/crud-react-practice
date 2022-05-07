import React from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ studentList, deleteStudent, editRow }) => {
  let navigate = useNavigate();

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
                    <button onClick={() => editRow(each)}>Edit</button>
                    <button onClick={() => deleteStudent(each.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colspan={5}>No students</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
