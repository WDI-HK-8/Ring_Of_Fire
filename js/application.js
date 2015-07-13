$(document).ready(function(){

// THE PLAYERS

var players = [];

// ADDING PLAYERS

var addNewPlayer = function(){
	
	$('#add_button').click(function(){
		var newPlayerName = $('#input_new_player_name').val();
		var newPlayer = '<li>' + newPlayerName + '</li>';
		
		if (newPlayerName == ""){
			alert('Please input a name first');
		}else{
			$(newPlayer).appendTo("#list_of_players").hide().fadeIn(500);
			players.push({"namePlayer": newPlayerName,"score": 0});        
		};

	});
}
addNewPlayer();

// THE PACK OF CARDS

var pack = [{"nameCard" : "ace", "family" : "hearts", "ruleName" : "Waterfall", "ruleDescription" : ""},
						{"nameCard" : "ace", "family" : "spades", "ruleName" : "Waterfall", "ruleDescription" : ""},
						{"nameCard" : "ace", "family" : "squares", "ruleName" : "Waterfall", "ruleDescription" : ""},
						{"nameCard" : "ace", "family" : "clubs", "ruleName" : "Waterfall", "ruleDescription" : ""},
						
						{"nameCard" : "two", "family" : "hearts", "ruleName" : "Choose", "ruleDescription" : ""},
						{"nameCard" : "two", "family" : "spades", "ruleName" : "Choose", "ruleDescription" : ""},
						{"nameCard" : "two", "family" : "squares", "ruleName" : "Choose", "ruleDescription" : ""},
						{"nameCard" : "two", "family" : "clubs", "ruleName" : "Choose", "ruleDescription" : ""},
						
						{"nameCard" : "three", "family" : "hearts", "ruleName" : "Me", "ruleDescription" : ""},
						{"nameCard" : "three", "family" : "spades", "ruleName" : "Me", "ruleDescription" : ""},
						{"nameCard" : "three", "family" : "squares", "ruleName" : "Me", "ruleDescription" : ""},
						{"nameCard" : "three", "family" : "clubs", "ruleName" : "Me", "ruleDescription" : ""},
						
						{"nameCard" : "four", "family" : "hearts", "ruleName" : "Whore", "ruleDescription" : ""},
						{"nameCard" : "four", "family" : "spades", "ruleName" : "Whore", "ruleDescription" : ""},
						{"nameCard" : "four", "family" : "squares", "ruleName" : "Whore", "ruleDescription" : ""},
						{"nameCard" : "four", "family" : "clubs", "ruleName" : "Whore", "ruleDescription" : ""},
						
						{"nameCard" : "five", "family" : "hearts", "ruleName" : "Thumb Master", "ruleDescription" : ""},
						{"nameCard" : "five", "family" : "spades", "ruleName" : "Thumb Master", "ruleDescription" : ""},
						{"nameCard" : "five", "family" : "squares", "ruleName" : "Thumb Master", "ruleDescription" : ""},
						{"nameCard" : "five", "family" : "clubs", "ruleName" : "Thumb Master", "ruleDescription" : ""},
						
						{"nameCard" : "six", "family" : "hearts", "ruleName" : "Dicks", "ruleDescription" : ""},
						{"nameCard" : "six", "family" : "spades", "ruleName" : "Dicks", "ruleDescription" : ""},
						{"nameCard" : "six", "family" : "squares", "ruleName" : "Dicks", "ruleDescription" : ""},
						{"nameCard" : "six", "family" : "clubs", "ruleName" : "Dicks", "ruleDescription" : ""},
						
						{"nameCard" : "seven", "family" : "hearts", "ruleName" : "Heaven", "ruleDescription" : ""},
						{"nameCard" : "seven", "family" : "spades", "ruleName" : "Heaven", "ruleDescription" : ""},
						{"nameCard" : "seven", "family" : "squares", "ruleName" : "Heaven", "ruleDescription" : ""},
						{"nameCard" : "seven", "family" : "clubs", "ruleName" : "Heaven", "ruleDescription" : ""},
						
						{"nameCard" : "eight", "family" : "hearts", "ruleName" : "Mate", "ruleDescription" : ""},
						{"nameCard" : "eight", "family" : "spades", "ruleName" : "Mate", "ruleDescription" : ""},
						{"nameCard" : "eight", "family" : "squares", "ruleName" : "Mate", "ruleDescription" : ""},
						{"nameCard" : "eight", "family" : "clubs", "ruleName" : "Mate", "ruleDescription" : ""},
						
						{"nameCard" : "nine", "family" : "hearts", "ruleName" : "Rhyme", "ruleDescription" : ""},
						{"nameCard" : "nine", "family" : "spades", "ruleName" : "Rhyme", "ruleDescription" : ""},
						{"nameCard" : "nine", "family" : "squares", "ruleName" : "Rhyme", "ruleDescription" : ""},
						{"nameCard" : "nine", "family" : "clubs", "ruleName" : "Rhyme", "ruleDescription" : ""},
						
						{"nameCard" : "ten", "family" : "hearts", "ruleName" : "Categories", "ruleDescription" : ""},
						{"nameCard" : "ten", "family" : "spades", "ruleName" : "Categories", "ruleDescription" : ""},
						{"nameCard" : "ten", "family" : "squares", "ruleName" : "Categories", "ruleDescription" : ""},
						{"nameCard" : "ten", "family" : "clubs", "ruleName" : "Categories", "ruleDescription" : ""},
						
						{"nameCard" : "jack", "family" : "hearts", "ruleName" : "Make a Rule", "ruleDescription" : ""},
						{"nameCard" : "jack", "family" : "spades", "ruleName" : "Make a Rule", "ruleDescription" : ""},
						{"nameCard" : "jack", "family" : "squares", "ruleName" : "Make a Rule", "ruleDescription" : ""},
						{"nameCard" : "jack", "family" : "clubs", "ruleName" : "Make a Rule", "ruleDescription" : ""},
						
						{"nameCard" : "queen", "family" : "hearts", "ruleName" : "Questions", "ruleDescription" : ""},
						{"nameCard" : "queen", "family" : "spades", "ruleName" : "Questions", "ruleDescription" : ""},
						{"nameCard" : "queen", "family" : "squares", "ruleName" : "Questions", "ruleDescription" : ""},
						{"nameCard" : "queen", "family" : "clubs", "ruleName" : "Questions", "ruleDescription" : ""},
						
						{"nameCard" : "king", "family" : "hearts", "ruleName" : "Pour", "ruleDescription" : ""},
						{"nameCard" : "king", "family" : "spades", "ruleName" : "Pour", "ruleDescription" : ""},
						{"nameCard" : "king", "family" : "squares", "ruleName" : "Pour", "ruleDescription" : ""},
						{"nameCard" : "king", "family" : "clubs", "ruleName" : "Pour", "ruleDescription" : ""}];

// PICK A CARD

var cardPicked;

var pickACard = function(){
  var ran = Math.floor(Math.random()*pack.length);
	var cardPicked = pack[ran];
	
	// TEST
	console.log("You picked a " + cardPicked.nameCard + " , the rule is : " + cardPicked.ruleName);
	
	pack.splice(ran, 1);
	return cardPicked;
};










})

