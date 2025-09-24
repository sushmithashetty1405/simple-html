import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';

export default function Student() {
  const paperStyle = { padding: '50px 20px', width: 600, margin: '20px auto' };

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [students, setStudents] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    const student = { name, address };
    console.log(student);

    fetch("http://localhost:8080/student/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student)
    }).then(() => {
      console.log("New student added");
    });
  };

  useEffect(() => {
    fetch("http://localhost:8080/student/getAll")  // Adjust to match your backend
      .then(res => res.json())
      .then((result) => {
        setStudents(result);
      });
  }, []);

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{ color: 'blue' }}>
          <u>Add Student</u>
        </h1>

        <Box
          component="form"
          sx={{ '& > :not(style)': { m: 1, width: '100%' } }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="Student Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            label="Student Address"
            variant="outlined"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <Button variant="contained" color="secondary" onClick={handleClick}>
            Submit
          </Button>
        </Box>

        <p>{name}</p>
        <p>{address}</p>
      </Paper>

      <Paper elevation={3} style={paperStyle}>
        <h1>Students</h1>
        {students.map((student, index) => (
          <Paper key={index} style={{ margin: '10px', padding: '15px', textAlign: 'left' }}>
            Name: {student.name} <br />
            Address: {student.address}



            
          </Paper>
        ))}
      </Paper>
    </Container>
  );
}
