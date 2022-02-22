let questions=["Who was the youngest president in America history?","When is presidents day?","What city was the first capital of the United States?","Who first discovered America?",
"When was the Declaration of Independence signed","Where did the pilgrims land in America?","What started the great Chicago fire of 1871?","Why does the Liberty Bell have a crack in it?",
"When did the American Civil War end?"]
let answers=["Theodore Roosevelt","Monday, February 21, 2022","New York City","Christopher Columbus is credited with discovering the Americas in 1492.","July 4, 1776  August 2, 1776",
"Mayflower arrived in New England on November 11, 1620 after a voyage of 66 days.","The fire started at a farm","Philadelphia in August 1752. It cracked during a test strike and had to be recast twice.",
"April 12, 1861  April 9, 1865"]
let questionnumber=1
$(document).ready(function() {
    
	$("#question").click(function(){
		
	$("#answer").fadeToggle("slow");
    
  });
    $("#left").click(function(){   
        
    $("#question").text(questions[questionnumber]);    
    $("#answer").hide();    
     $("#answer").text(answers[questionnumber]); 
     if (questionnumber < 10)
     {         
     questionnumber=questionnumber+1
     }
     });   
	 $("#right").click(function(){   
        
    $("#question").text(questions[questionnumber]);    
    $("#answer").hide();    
     $("#answer").text(answers[questionnumber]);    
     if (questionnumber > 0)
     {
     questionnumber=questionnumber-1
     }
     });   

		
	});
	
	
	

		
	


