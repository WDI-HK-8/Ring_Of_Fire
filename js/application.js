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
      $('#input_new_player_name').val("");
      console.log(players);

    };

  });
}
addNewPlayer();

// THE PACK OF CARDS
var pack = [{"nameCard" : "ace", "family" : "hearts", "ruleName" : "Waterfall", "ruleDescription" : "Everyone must keep drinking until the person who picked the card stops!"},
                        {"nameCard" : "ace", "family" : "spades", "ruleName" : "Waterfall", "ruleDescription" : "Everyone must keep drinking until the person who picked the card stops!"},
                        {"nameCard" : "ace", "family" : "squares", "ruleName" : "Waterfall", "ruleDescription" : "Everyone must keep drinking until the person who picked the card stops!"},
                        {"nameCard" : "ace", "family" : "clubs", "ruleName" : "Waterfall", "ruleDescription" : "Everyone must keep drinking until the person who picked the card stops!"},
                        
                        {"nameCard" : "two", "family" : "hearts", "ruleName" : "Choose", "ruleDescription" : "You can choose someone to drink!"},
                        {"nameCard" : "two", "family" : "spades", "ruleName" : "Choose", "ruleDescription" : "You can choose someone to drink!"},
                        {"nameCard" : "two", "family" : "squares", "ruleName" : "Choose", "ruleDescription" : "You can choose someone to drink!"},
                        {"nameCard" : "two", "family" : "clubs", "ruleName" : "Choose", "ruleDescription" : "You can choose someone to drink!"},
                        
                        {"nameCard" : "three", "family" : "hearts", "ruleName" : "Me", "ruleDescription" : "YOU must drink!"},
                        {"nameCard" : "three", "family" : "spades", "ruleName" : "Me", "ruleDescription" : "YOU must drink!"},
                        {"nameCard" : "three", "family" : "squares", "ruleName" : "Me", "ruleDescription" : "YOU must drink!"},
                        {"nameCard" : "three", "family" : "clubs", "ruleName" : "Me", "ruleDescription" : "YOU must drink!"},
                        
                        {"nameCard" : "four", "family" : "hearts", "ruleName" : "Whore", "ruleDescription" : "All girls drink!"},
                        {"nameCard" : "four", "family" : "spades", "ruleName" : "Whore", "ruleDescription" : "All girls drink!"},
                        {"nameCard" : "four", "family" : "squares", "ruleName" : "Whore", "ruleDescription" : "All girls drink!"},
                        {"nameCard" : "four", "family" : "clubs", "ruleName" : "Whore", "ruleDescription" : "All girls drink!"},
                        
                        {"nameCard" : "five", "family" : "hearts", "ruleName" : "Thumb Master", "ruleDescription" : "When you put your thumb on the table everyone must follow and whomever is last must drink. you are the thumb master till someone else picks a five."},
                        {"nameCard" : "five", "family" : "spades", "ruleName" : "Thumb Master", "ruleDescription" : "When you put your thumb on the table everyone must follow and whomever is last must drink. you are the thumb master till someone else picks a five."},
                        {"nameCard" : "five", "family" : "squares", "ruleName" : "Thumb Master", "ruleDescription" : "When you put your thumb on the table everyone must follow and whomever is last must drink. you are the thumb master till someone else picks a five."},
                        {"nameCard" : "five", "family" : "clubs", "ruleName" : "Thumb Master", "ruleDescription" : "When you put your thumb on the table everyone must follow and whomever is last must drink. you are the thumb master till someone else picks a five."},
                        
                        {"nameCard" : "six", "family" : "hearts", "ruleName" : "Dicks", "ruleDescription" : "All guys drink!"},
                        {"nameCard" : "six", "family" : "spades", "ruleName" : "Dicks", "ruleDescription" : "All guys drink!"},
                        {"nameCard" : "six", "family" : "squares", "ruleName" : "Dicks", "ruleDescription" : "All guys drink!"},
                        {"nameCard" : "six", "family" : "clubs", "ruleName" : "Dicks", "ruleDescription" : "All guys drink!"},
                        
                        {"nameCard" : "seven", "family" : "hearts", "ruleName" : "Heaven", "ruleDescription" : "Point your finger in the sky! Whoever is last must drink!"},
                        {"nameCard" : "seven", "family" : "spades", "ruleName" : "Heaven", "ruleDescription" : "Point your finger in the sky! Whoever is last must drink!"},
                        {"nameCard" : "seven", "family" : "squares", "ruleName" : "Heaven", "ruleDescription" : "Point your finger in the sky! Whoever is last must drink!"},
                        {"nameCard" : "seven", "family" : "clubs", "ruleName" : "Heaven", "ruleDescription" : "Point your finger in the sky! Whoever is last must drink!"},
                        
                        {"nameCard" : "eight", "family" : "hearts", "ruleName" : "Mate", "ruleDescription" : "Choose someone to drink with you!"},
                        {"nameCard" : "eight", "family" : "spades", "ruleName" : "Mate", "ruleDescription" : "Choose someone to drink with you!"},
                        {"nameCard" : "eight", "family" : "squares", "ruleName" : "Mate", "ruleDescription" : "Choose someone to drink with you!"},
                        {"nameCard" : "eight", "family" : "clubs", "ruleName" : "Mate", "ruleDescription" : "Choose someone to drink with you!"},
                        
                        {"nameCard" : "nine", "family" : "hearts", "ruleName" : "Rhyme", "ruleDescription" : "Pick a word such a dog and the person next to you must rhyme with dog, like log, and it goes to the next person and the next, in a circle, until someone messes up and he or she will have to drink"},
                        {"nameCard" : "nine", "family" : "spades", "ruleName" : "Rhyme", "ruleDescription" : "Pick a word such a dog and the person next to you must rhyme with dog, like log, and it goes to the next person and the next, in a circle, until someone messes up and he or she will have to drink"},
                        {"nameCard" : "nine", "family" : "squares", "ruleName" : "Rhyme", "ruleDescription" : "Pick a word such a dog and the person next to you must rhyme with dog, like log, and it goes to the next person and the next, in a circle, until someone messes up and he or she will have to drink"},
                        {"nameCard" : "nine", "family" : "clubs", "ruleName" : "Rhyme", "ruleDescription" : "Pick a word such a dog and the person next to you must rhyme with dog, like log, and it goes to the next person and the next, in a circle, until someone messes up and he or she will have to drink"},
                        
                        {"nameCard" : "ten", "family" : "hearts", "ruleName" : "Categories", "ruleDescription" : "Pick a category such a football and you go in a circle and everyone has to say a word that fits with football such as: touchdown, field goal, USC. Whoever messes up, drinks."},
                        {"nameCard" : "ten", "family" : "spades", "ruleName" : "Categories", "ruleDescription" : "Pick a category such a football and you go in a circle and everyone has to say a word that fits with football such as: touchdown, field goal, USC. Whoever messes up, drinks."},
                        {"nameCard" : "ten", "family" : "squares", "ruleName" : "Categories", "ruleDescription" : "Pick a category such a football and you go in a circle and everyone has to say a word that fits with football such as: touchdown, field goal, USC. Whoever messes up, drinks."},
                        {"nameCard" : "ten", "family" : "clubs", "ruleName" : "Categories", "ruleDescription" : "Pick a category such a football and you go in a circle and everyone has to say a word that fits with football such as: touchdown, field goal, USC. Whoever messes up, drinks."},
                        
                        {"nameCard" : "jack", "family" : "hearts", "ruleName" : "Make a Rule", "ruleDescription" : "You can make up any rule that everyone has to follow, such as you can only drink with your right hand. Everyone (including you) must follow this rule for the whole entire game and if you disobey you must drink."},
                        {"nameCard" : "jack", "family" : "spades", "ruleName" : "Make a Rule", "ruleDescription" : "You can make up any rule that everyone has to follow, such as you can only drink with your right hand. Everyone (including you) must follow this rule for the whole entire game and if you disobey you must drink."},
                        {"nameCard" : "jack", "family" : "squares", "ruleName" : "Make a Rule", "ruleDescription" : "You can make up any rule that everyone has to follow, such as you can only drink with your right hand. Everyone (including you) must follow this rule for the whole entire game and if you disobey you must drink."},
                        {"nameCard" : "jack", "family" : "clubs", "ruleName" : "Make a Rule", "ruleDescription" : "You can make up any rule that everyone has to follow, such as you can only drink with your right hand. Everyone (including you) must follow this rule for the whole entire game and if you disobey you must drink."},
                        
                        {"nameCard" : "queen", "family" : "hearts", "ruleName" : "Questions", "ruleDescription" : "Go around in a circle and you have to keep asking questions to each other. Doesn’t matter what the question is, as long as its a question. Whoever messes up and does not say a question, drinks."},
                        {"nameCard" : "queen", "family" : "spades", "ruleName" : "Questions", "ruleDescription" : "Go around in a circle and you have to keep asking questions to each other. Doesn’t matter what the question is, as long as its a question. Whoever messes up and does not say a question, drinks."},
                        {"nameCard" : "queen", "family" : "squares", "ruleName" : "Questions", "ruleDescription" : "Go around in a circle and you have to keep asking questions to each other. Doesn’t matter what the question is, as long as its a question. Whoever messes up and does not say a question, drinks."},
                        {"nameCard" : "queen", "family" : "clubs", "ruleName" : "Questions", "ruleDescription" : "Go around in a circle and you have to keep asking questions to each other. Doesn’t matter what the question is, as long as its a question. Whoever messes up and does not say a question, drinks."},
                        
                        {"nameCard" : "king", "family" : "hearts", "ruleName" : "Pour", "ruleDescription" : "You must pour a little of your drink into the cup that is in the middle of the table. Whomever picks up the LAST king must drink the whole cup, which could be filled with different drinks, so who knows how bad it could taste!"},
                        {"nameCard" : "king", "family" : "spades", "ruleName" : "Pour", "ruleDescription" : "You must pour a little of your drink into the cup that is in the middle of the table. Whomever picks up the LAST king must drink the whole cup, which could be filled with different drinks, so who knows how bad it could taste!"},
                        {"nameCard" : "king", "family" : "squares", "ruleName" : "Pour", "ruleDescription" : "You must pour a little of your drink into the cup that is in the middle of the table. Whomever picks up the LAST king must drink the whole cup, which could be filled with different drinks, so who knows how bad it could taste!"},
                        {"nameCard" : "king", "family" : "clubs", "ruleName" : "Pour", "ruleDescription" : "You must pour a little of your drink into the cup that is in the middle of the table. Whomever picks up the LAST king must drink the whole cup, which could be filled with different drinks, so who knows how bad it could taste!"}];

//START THE GAME
$('#start_game').click(function(){

  //CREATE SCORE TABLE
  if (players.length < 1){
    alert('Add some players you moron!');
  }
  else if (players.length < 2){
    alert('Are you sure you want to drink on your own? You must be at leat 2 to play!');
  }
  else{
    for (var i = 0; i < players.length; i++){
      var getName = players[i].namePlayer; 
      var getScore = players[i].score;
      var newRow = '<tr><td>' + getName + '</td><td class="score_displayed">' + getScore + '</td><td><button class="add_sips">+</button></td></tr>';
      $(newRow).appendTo(".score_table");

    }

  //EFFECTS
  $('#game_setting_section').slideUp(1000);
  $('#game_playing_section').show();
  }
})

// PICK A CARD

var cardPicked;

$('#pick_button').click(function(){
  if (pack.length > 0){
          //pick a card from the pack
    var ran = Math.floor(Math.random()*pack.length);
    var cardPicked = pack[ran];

          //remove the card picked from the pack
    pack.splice(ran, 1);
    $('#cards_left').text('Cards left :' + pack.length)
          //display the card picked in the game_playing_section
    $('#card_picked_rule').text(cardPicked.ruleName);
    $('#card_picked_description').text(cardPicked.ruleDescription);
    
          // change the pick button to the next player button
    $('.pick_card_phase').fadeOut(0);
    $('.next_player_phase').fadeIn(1000);

  }
  // WHEN THERE IS NO MORE CARDS THE GAME ENDS
  else{

    //EFFECTS
    $('#pick_button').hide();
    $('.add_sips').fadeOut(1500);
    $('#game_playing_section').slideUp(2000);
    $('#final_score_section').slideDown(2000);

    for (var i = 0; i < players.length; i++){
      var finalName = players[i].namePlayer;
      var finalScore = players[i].score;
      var finalRow = '<tr><td>' + finalName + '</td><td class="score_displayed">' + finalScore + '</td></tr>';
      $(finalRow).appendTo(".final_score_table").hide().fadeIn(6000);
    };
  }

})

  //NEXT PLAYER TO PLAY
$('#next_player_button').click(function(){
  $('.pick_card_phase').fadeIn(1000);
  $('.next_player_phase').fadeOut(0);
})

// ADD SIPS
$(document).on('click', '.add_sips', function(){
  for (var i = 0; i < players.length; i++){
    if($(this).parent().parent()[0] == $('#player_table tr')[i]){
        players[i].score ++;
        $($('.score_displayed')[i]).text(players[i].score);
    }
  }
})

})

