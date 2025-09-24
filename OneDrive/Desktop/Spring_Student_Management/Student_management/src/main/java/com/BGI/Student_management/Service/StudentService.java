package com.BGI.Student_management.Service;

import java.util.List;

import com.BGI.Student_management.model.Student;
import com.BGI.Student_management.repository.StudentRepository;

public  interface StudentService {

	public Student saveStudent(Student student);
	
	public List<Student> getAllStudents();
	
}
