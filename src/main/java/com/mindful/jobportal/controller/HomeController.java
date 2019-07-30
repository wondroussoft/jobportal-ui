package com.mindful.jobportal.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;@Controller
public class HomeController {

	@GetMapping("/")
	public String GetHomepage(Model model) {
		return "home";
	}

	@GetMapping("/login")
	public String GetLogin(Model model) {
		return "login";
	}

	@PostMapping("/candidate_workspace")
	public String Getworkspace(Model model) {
		return "candidate_workspace";
	}

	@GetMapping("/my-account")
	public String GetMyaccount(Model model) {
		return "candidate_myaccount";
	}

	@GetMapping("/register")
	public String GetRegister(Model model) {
		return "signup2";
	}

	/*
	 * @GetMapping("/register") public String GetRegister1(Model model) { return
	 * "signup2"; }
	 */

	@PostMapping("/employer_workspace")
	public String GetEmpworkspace(Model model) {
		return "employer_workspace";
	}

	@GetMapping("/employer_register")
	public String Gete_Register(Model model) {
		return "employerreg";
	}

	@GetMapping("/e_workspace")
	public String GetWorkSpace(Model model) {
		return "employer_workspace";
	}

	@GetMapping("/c_workspace")
	public String GetCworkspace(Model model) {
		return "candidate_workspace";
	}

	@GetMapping("/employer")
	public String Getemployer(Model model) {
		return "employer";
	}

	@GetMapping("/services")
	public String Getservices(Model model) {
		return "services";
	}

	@GetMapping("/aboutus")
	public String Getaboutus(Model model) {
		return "aboutus";
	}

	@GetMapping("/contactus")
	public String Getcontactus(Model model) {
		return "contactus";
	}

	@GetMapping("/review")
	public String Getreview(Model model) {
		return "review";
	}

	@GetMapping("/resume")
	public String Getresume(Model model) {
		return "resume_upload";
	}

	@GetMapping("/jobs")
	public String Getjobs(Model model) {
		return "jobs";
	}

	@GetMapping("/employers")
	public String Getemployers(Model model) {
		return "post_job";
	}

	@GetMapping("/applynow")
	public String Getapplynow(Model model) {
		return "apply_now";
	}

	@GetMapping("/viewmore")
	public String Getviewmore(Model model) {
		return "view_more";
	}

	@GetMapping("/candidatedashboard")
	public String Getcandidatedashboard(Model model) {
		return "candidate_dashboard";
	}

	@GetMapping("/findjobs")
	public String Getfindjobs(Model model) {
		return "findjobs";
	}

	@GetMapping("/mycv")
	public String Getmycv(Model model) {
		return "mycv";
	}

	@GetMapping("/myapplications")
	public String Getmyapplication(Model model) {
		return "myapplication";
	}

	@GetMapping("/myvisibility")
	public String Getmyvisibility(Model model) {
		return "myvisibility";
	}

	@GetMapping("/cvservices")
	public String Getcvservices(Model model) {
		return "cvservices";
	}
	@GetMapping("/cvsearch")
	public String Getcvsearch(Model model) {
		return "cv_search";
	}
	@GetMapping("/recruitmentsolutions")
	public String Getrecruitmentsolutions(Model model) {
		return "recruitmentsolutions";
	}
	@GetMapping("/hrsolutions")
	public String Gethrsolutions(Model model) {
		return "hrsolutions";
	}
	@GetMapping("/post_job")
	public String Getpostjob(Model model) {
		return "post_job";
	}
	
	@GetMapping("/post_newjob")
	public String Getpostnewjob(Model model) {
		return "postnewjob";
	}
	
	@GetMapping("/starthiring")
	public String Getstarthiring(Model model) {
		return "starthiring";
	}
	@GetMapping("/loginemploye")
	public String Getloginemploye(Model model) {
		return "signup2";
	}
	
}