package com.hangman.server.model;

public class Hangman {

    private String word;

    Hangman(){}

    public Hangman(String word) {
        this.word = word;
    } 

    public String getWord() {
        return this.word;
    }

    public void setWord(String word) {
        this.word = word;
    }

}
