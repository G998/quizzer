package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class WordController {
	@Autowired
	private WordRepository wordRepo;
	private Map<Integer, Word> map = new HashMap<>();

	@RequestMapping(value="/", method=RequestMethod.GET)
	public String hello() {return "Hello";}

	@RequestMapping(value="vocabList", method=RequestMethod.GET)
	public List<Word> getList() {
		return wordRepo.findAll();
	}
	@RequestMapping(value="customList", method=RequestMethod.POST)
	public void putList(@RequestBody List<List<String>> list){ //input is a list of lists, a big list of a word,meaning pairs ex: [["yes","agreed"],["no","disagree"],...]
		int counter = 0;
		for(List<String> pair: list){
			counter++;
			map.put(counter, new Word(pair.get(0), pair.get(1)));
		}
	}
}