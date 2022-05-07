import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./components/HomePage";
import Add from "./components/AddPage";
import Edit from "./components/EditPage";

function App() {
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

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home studentList={studentList} deleteStudent={deleteStudent} />
          }
        />
        <Route path="/add" element={<Add addStudent={addStudent} />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </Router>
  );
}

export default App;
