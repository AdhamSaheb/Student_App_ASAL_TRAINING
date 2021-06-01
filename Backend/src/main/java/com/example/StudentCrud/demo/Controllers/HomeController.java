package com.example.StudentCrud.demo.Controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
        @RequestMapping("/home")
        String home() {
           return  "Hello World!" ;
        }
}
