package com.hangman.server.controller;

import com.hangman.server.service.ServerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = {"http://localhost:3000"})
@RequestMapping("/api/v1/hangman")
public class ServerController {

    @Autowired
    private ServerService serverService;

    @GetMapping("/start")
    public String start(){
        return serverService.getHangmanWord();
    }
    
}