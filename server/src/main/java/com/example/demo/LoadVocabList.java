package com.example.demo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/*
@Configuration
class LoadVocabList {

  private static final Logger log = LoggerFactory.getLogger(LoadVocabList.class);
  
  
  
  @Bean
  CommandLineRunner initDatabase(WordRepository wordRepository) {

    return args -> {
      
    	
    	wordRepository.findAll().forEach(employee -> log.info("Preloaded " + employee));
      
    };
  }
}*/