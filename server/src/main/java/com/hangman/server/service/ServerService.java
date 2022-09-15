package com.hangman.server.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import com.hangman.server.model.Hangman;

import org.springframework.stereotype.Service;

@Service
public class ServerService {
    
    List<String> wordList = new ArrayList<String>();
    Random rnd = new Random();

    // To be hardcoded for now to check the functionality

    private void addWords(){
        wordList.add("EGE");
        wordList.add("ABBAS");
        wordList.add("KAZIM");
    }

    private String getRandomWord() {
        addWords();
        return wordList.get(rnd.nextInt(wordList.size()-1));
    }

    public String getHangmanWord(){
        Hangman hangman = new Hangman(getRandomWord());
        return hangman.getWord();
    }

}
