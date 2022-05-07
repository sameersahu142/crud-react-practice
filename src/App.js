import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import "./App.css";
import Home from "./components/HomePage";
import Add from "./components/AddPage";
import Edit from "./components/EditPage";

function App() {
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

  const addStudent = (student) => {
    student.id = studentList.length + 1;
    setStudentList([...studentList, student]);
  };

  const initialFormState = { id: null, name: "", username: "", score: "" };
  const [currentStudent, setCurrentStudent] = useState(initialFormState);

  const editRow = student => {
    setCurrentStudent({ id: student.id, name: student.name, username: student.username, score: student.score });
    navigate("/edit");
  }

  const updateStudent = (id, updateStudent) => {
    setStudentList(studentList.map(student => (student.id === id ? updateStudent : student)));
  }

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Home studentList={studentList} deleteStudent={deleteStudent} editRow={editRow} />
          }
        />
        <Route path="/add" element={<Add addStudent={addStudent} />} />
        <Route path="/edit" element={<Edit currentStudent={currentStudent} updateStudent={updateStudent} />} />
      </Routes>
    </div>
  );
}

export default App;
