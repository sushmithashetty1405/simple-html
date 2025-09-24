package com.BGI.Student_management.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.BGI.Student_management.Service.StudentService;
import com.BGI.Student_management.model.Student;

@RestController
@RequestMapping("/student")
@CrossOrigin

public class StudentController {
	@Autowired
	
	private StudentService studentservice;
	@PostMapping("/add")
	public String add(@RequestBody Student student) {
		studentservice.saveStudent(student);
		return "New Student is added";
		
	}
	
	@GetMapping("/getAll")
	public List<Student> getAllStudents(){
		return studentservice.getAllStudents();
	}

}
