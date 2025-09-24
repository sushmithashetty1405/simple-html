package com.BGI.Student_management.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.BGI.Student_management.model.Student;
import com.BGI.Student_management.repository.StudentRepository;
@Service
public class StudentServiceImpl implements StudentService {

	@Autowired
	private StudentRepository studentRepository;
	
	@Override
	public Student saveStudent(Student student) {
		return studentRepository.save(student);
	}
	@Override
	public List<Student> getAllStudents(){
		return studentRepository.findAll();
	}
}
