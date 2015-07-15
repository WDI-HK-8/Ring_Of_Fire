$(document).ready(function(){

var cardFlipped = false;

//BEGIN THE GAME
$('#begin').click(function(){
  $('#general_rules').hide();
  $('#add_players_panel').fadeIn(1000);
});

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
    };
  });
}
addNewPlayer();

// THE PACK OF CARDS
var pack = [{"nameCard" : "Ace", "family" : "hearts", "ruleName" : "Waterfall", "ruleDescription" : "Everyone must keep drinking until the person who picked the card stops!"},
                        {"nameCard" : "Ace", "family" : "spades", "ruleName" : "Waterfall", "ruleDescription" : "Everyone must keep drinking until the person who picked the card stops!"},
                        {"nameCard" : "Ace", "family" : "squares", "ruleName" : "Waterfall", "ruleDescription" : "Everyone must keep drinking until the person who picked the card stops!"},
                        {"nameCard" : "Ace", "family" : "clubs", "ruleName" : "Waterfall", "ruleDescription" : "Everyone must keep drinking until the person who picked the card stops!"},
                        
                        {"nameCard" : "Two", "family" : "hearts", "ruleName" : "Choose", "ruleDescription" : "You can choose someone to drink!"},
                        {"nameCard" : "Two", "family" : "spades", "ruleName" : "Choose", "ruleDescription" : "You can choose someone to drink!"},
                        {"nameCard" : "Two", "family" : "squares", "ruleName" : "Choose", "ruleDescription" : "You can choose someone to drink!"},
                        {"nameCard" : "Two", "family" : "clubs", "ruleName" : "Choose", "ruleDescription" : "You can choose someone to drink!"},
                        
                        {"nameCard" : "Three", "family" : "hearts", "ruleName" : "Me", "ruleDescription" : "YOU must drink!"},
                        {"nameCard" : "Three", "family" : "spades", "ruleName" : "Me", "ruleDescription" : "YOU must drink!"},
                        {"nameCard" : "Three", "family" : "squares", "ruleName" : "Me", "ruleDescription" : "YOU must drink!"},
                        {"nameCard" : "Three", "family" : "clubs", "ruleName" : "Me", "ruleDescription" : "YOU must drink!"},
                        
                        {"nameCard" : "Four", "family" : "hearts", "ruleName" : "Whore", "ruleDescription" : "All girls drink!"},
                        {"nameCard" : "Four", "family" : "spades", "ruleName" : "Whore", "ruleDescription" : "All girls drink!"},
                        {"nameCard" : "Four", "family" : "squares", "ruleName" : "Whore", "ruleDescription" : "All girls drink!"},
                        {"nameCard" : "Four", "family" : "clubs", "ruleName" : "Whore", "ruleDescription" : "All girls drink!"},
                        
                        {"nameCard" : "Five", "family" : "hearts", "ruleName" : "Thumb Master", "ruleDescription" : "When you put your thumb on the table everyone must follow and whomever is last must drink. you are the thumb master till someone else picks a five."},
                        {"nameCard" : "Five", "family" : "spades", "ruleName" : "Thumb Master", "ruleDescription" : "When you put your thumb on the table everyone must follow and whomever is last must drink. you are the thumb master till someone else picks a five."},
                        {"nameCard" : "Five", "family" : "squares", "ruleName" : "Thumb Master", "ruleDescription" : "When you put your thumb on the table everyone must follow and whomever is last must drink. you are the thumb master till someone else picks a five."},
                        {"nameCard" : "Five", "family" : "clubs", "ruleName" : "Thumb Master", "ruleDescription" : "When you put your thumb on the table everyone must follow and whomever is last must drink. you are the thumb master till someone else picks a five."},
                        
                        {"nameCard" : "Six", "family" : "hearts", "ruleName" : "Dicks", "ruleDescription" : "All guys drink!"},
                        {"nameCard" : "Six", "family" : "spades", "ruleName" : "Dicks", "ruleDescription" : "All guys drink!"},
                        {"nameCard" : "Six", "family" : "squares", "ruleName" : "Dicks", "ruleDescription" : "All guys drink!"},
                        {"nameCard" : "Six", "family" : "clubs", "ruleName" : "Dicks", "ruleDescription" : "All guys drink!"},
                        
                        {"nameCard" : "Seven", "family" : "hearts", "ruleName" : "Heaven", "ruleDescription" : "Point your finger in the sky! Whoever is last must drink!"},
                        {"nameCard" : "Seven", "family" : "spades", "ruleName" : "Heaven", "ruleDescription" : "Point your finger in the sky! Whoever is last must drink!"},
                        {"nameCard" : "Seven", "family" : "squares", "ruleName" : "Heaven", "ruleDescription" : "Point your finger in the sky! Whoever is last must drink!"},
                        {"nameCard" : "Seven", "family" : "clubs", "ruleName" : "Heaven", "ruleDescription" : "Point your finger in the sky! Whoever is last must drink!"},
                        
                        {"nameCard" : "Eight", "family" : "hearts", "ruleName" : "Mate", "ruleDescription" : "Choose someone to drink with you!"},
                        {"nameCard" : "Eight", "family" : "spades", "ruleName" : "Mate", "ruleDescription" : "Choose someone to drink with you!"},
                        {"nameCard" : "Eight", "family" : "squares", "ruleName" : "Mate", "ruleDescription" : "Choose someone to drink with you!"},
                        {"nameCard" : "Eight", "family" : "clubs", "ruleName" : "Mate", "ruleDescription" : "Choose someone to drink with you!"},
                        
                        {"nameCard" : "Nine", "family" : "hearts", "ruleName" : "Busta'Rhyme", "ruleDescription" : "Pick a word such a dog and the person next to you must rhyme with dog, like log, and it goes to the next person and the next, in a circle, until someone messes up and he or she will have to drink"},
                        {"nameCard" : "Nine", "family" : "spades", "ruleName" : "Busta'Rhyme", "ruleDescription" : "Pick a word such a dog and the person next to you must rhyme with dog, like log, and it goes to the next person and the next, in a circle, until someone messes up and he or she will have to drink"},
                        {"nameCard" : "Nine", "family" : "squares", "ruleName" : "Busta'Rhyme", "ruleDescription" : "Pick a word such a dog and the person next to you must rhyme with dog, like log, and it goes to the next person and the next, in a circle, until someone messes up and he or she will have to drink"},
                        {"nameCard" : "Nine", "family" : "clubs", "ruleName" : "Busta'Rhyme", "ruleDescription" : "Pick a word such a dog and the person next to you must rhyme with dog, like log, and it goes to the next person and the next, in a circle, until someone messes up and he or she will have to drink"},
                        
                        {"nameCard" : "Ten", "family" : "hearts", "ruleName" : "Categories", "ruleDescription" : "Pick a category such a football and you go in a circle and everyone has to say a word that fits with football such as: touchdown, field goal, USC. Whoever messes up, drinks."},
                        {"nameCard" : "Ten", "family" : "spades", "ruleName" : "Categories", "ruleDescription" : "Pick a category such a football and you go in a circle and everyone has to say a word that fits with football such as: touchdown, field goal, USC. Whoever messes up, drinks."},
                        {"nameCard" : "Ten", "family" : "squares", "ruleName" : "Categories", "ruleDescription" : "Pick a category such a football and you go in a circle and everyone has to say a word that fits with football such as: touchdown, field goal, USC. Whoever messes up, drinks."},
                        {"nameCard" : "Ten", "family" : "clubs", "ruleName" : "Categories", "ruleDescription" : "Pick a category such a football and you go in a circle and everyone has to say a word that fits with football such as: touchdown, field goal, USC. Whoever messes up, drinks."},
                        
                        {"nameCard" : "Jack", "family" : "hearts", "ruleName" : "Make a Rule", "ruleDescription" : "You can make up any rule that everyone has to follow, such as you can only drink with your right hand. Everyone (including you) must follow this rule for the whole entire game and if you disobey you must drink."},
                        {"nameCard" : "Jack", "family" : "spades", "ruleName" : "Make a Rule", "ruleDescription" : "You can make up any rule that everyone has to follow, such as you can only drink with your right hand. Everyone (including you) must follow this rule for the whole entire game and if you disobey you must drink."},
                        {"nameCard" : "Jack", "family" : "squares", "ruleName" : "Make a Rule", "ruleDescription" : "You can make up any rule that everyone has to follow, such as you can only drink with your right hand. Everyone (including you) must follow this rule for the whole entire game and if you disobey you must drink."},
                        {"nameCard" : "Jack", "family" : "clubs", "ruleName" : "Make a Rule", "ruleDescription" : "You can make up any rule that everyone has to follow, such as you can only drink with your right hand. Everyone (including you) must follow this rule for the whole entire game and if you disobey you must drink."},
                        
                        {"nameCard" : "Queen", "family" : "hearts", "ruleName" : "Questions", "ruleDescription" : "Go around in a circle and you have to keep asking questions to each other. Doesn't matter what the question is, as long as its a question. Whoever messes up and does not say a question, drinks."},
                        {"nameCard" : "Queen", "family" : "spades", "ruleName" : "Questions", "ruleDescription" : "Go around in a circle and you have to keep asking questions to each other. Doesn't matter what the question is, as long as its a question. Whoever messes up and does not say a question, drinks."},
                        {"nameCard" : "Queen", "family" : "squares", "ruleName" : "Questions", "ruleDescription" : "Go around in a circle and you have to keep asking questions to each other. Doesn't matter what the question is, as long as its a question. Whoever messes up and does not say a question, drinks."},
                        {"nameCard" : "Queen", "family" : "clubs", "ruleName" : "Questions", "ruleDescription" : "Go around in a circle and you have to keep asking questions to each other. Doesn't matter what the question is, as long as its a question. Whoever messes up and does not say a question, drinks."},
                        
                        {"nameCard" : "King", "family" : "hearts", "ruleName" : "Pour", "ruleDescription" : "You must pour a little of your drink into the cup that is in the middle of the table. Whomever picks up the LAST king must drink the whole cup, which could be filled with different drinks, so who knows how bad it could taste!"},
                        {"nameCard" : "King", "family" : "spades", "ruleName" : "Pour", "ruleDescription" : "You must pour a little of your drink into the cup that is in the middle of the table. Whomever picks up the LAST king must drink the whole cup, which could be filled with different drinks, so who knows how bad it could taste!"},
                        {"nameCard" : "King", "family" : "squares", "ruleName" : "Pour", "ruleDescription" : "You must pour a little of your drink into the cup that is in the middle of the table. Whomever picks up the LAST king must drink the whole cup, which could be filled with different drinks, so who knows how bad it could taste!"},
                        {"nameCard" : "King", "family" : "clubs", "ruleName" : "Pour", "ruleDescription" : "You must pour a little of your drink into the cup that is in the middle of the table. Whomever picks up the LAST king must drink the whole cup, which could be filled with different drinks, so who knows how bad it could taste!"}];

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

    //Display the first name to play
    var name = players[0].namePlayer;
    $('#naming_player').text(name + ', you\'re starting, Pick a card');

    //EFFECTS
    $('#add_players_panel').hide();
    $('#game_playing_section').fadeIn(1000);

  }
})

//CARD 3D FLIP
$('#card_back_image').click(function(){
  $('#card_container #card').css('transform','rotateY(180deg)');
  $('#card_container #card').css('box-shadow','-5px 5px 5px #000000');
});

// PICK A CARD
var cardPicked;

$('#card_back_image').click(function(){
  if (cardFlipped == false) {
    if (pack.length > 0){
      //pick a card from the pack
      var ran = Math.floor(Math.random()*pack.length);
      var cardPicked = pack[ran];

      //remove the card picked from the pack
      pack.splice(ran, 1);
      $('#cards_left').text('Cards left :' + pack.length)
      
      //display the card picked in the game_playing_section
      $('.card_picked_type').text(cardPicked.nameCard);
      $('.card_picked_rule').text(cardPicked.ruleName);
      $('.card_picked_description').text(cardPicked.ruleDescription);

      //Make a rule case
      if(cardPicked.ruleName === "Make a Rule"){
        $('.pick_card_phase').hide();
        $('.make_a_rule_case').show();
      }else{
      // change the pick button to the next player button
      $('.pick_card_phase').fadeOut(0);
      $('.next_player_phase').fadeIn(2000);
      }
    }
    
    // WHEN THERE IS NO MORE CARDS THE GAME ENDS
    else{

      //EFFECTS
      $('#pick_button').hide();
      $('.add_sips').fadeOut(1500);
      $('#game_playing_section').slideUp(2000);
      $('#final_score_section').slideDown(2000);

      //CREATES THE FINAL SCORE TABLE
      for (var i = 0; i < players.length; i++){
        var finalName = players[i].namePlayer;
        var finalScore = players[i].score;
        var finalRow = '<tr><td>' + finalName + '</td><td class="score_displayed">' + finalScore + '</td></tr>';
        $(finalRow).appendTo(".final_score_table").hide().fadeIn(6000);
      };
    }
  cardFlipped = true;
  }
})

//MAKE A RULE CASE GO BACK
$('#finish_rule').click(function(){
  $('.make_a_rule_case').hide();
  $('.next_player_phase').fadeIn(2000);

  var contentRuleCreated = $('#input_make_a_rule').val();
  var newRule = '<p>' + contentRuleCreated + '</p>';
  $('#rules_added').hide().fadeIn(1000);
  $(newRule).appendTo('#rules_added').hide().fadeIn(2000);
})

//NEXT PLAYER TO PLAY
var listTurnQuotes = [', your turn!',' dig in!',', you\'re up!',' WAKE UP!', ', the others are thirsty.',', breathe... you can do this.'];
var yourTurnQuote = function(){
  var turnQuote = listTurnQuotes[Math.floor(Math.random()*listTurnQuotes.length)];
  return turnQuote;
};

var a;
var j = 1;
$('#next_player_button').click(function(){

  cardFlipped = false;

  //CLEAR PREVIOUS CARD
  $('#card_container #card').css('transform','');
  $('#card_container #card').css('box-shadow','');

  $('#card_picked_type').text("");
  $('#card_picked_rule').text("");
  $('#card_picked_description').text("");

  //SWITCH PLAYERS
  a = yourTurnQuote().toString();
  if(j === 0){
    j++;
    $('#naming_player').text(players[j].namePlayer + a + ' Pick a Card!');
    j++;
  }
  else if(j < players.length){
    $('#naming_player').text(players[j].namePlayer + a + ' Pick a Card!');
    j++
  }else if(j === players.length){
    j = 0;
    $('#naming_player').text(players[j].namePlayer + a + ' Pick a Card!');
  };

  //EFFECTS
  $('.pick_card_phase').fadeIn(2000);
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

}) //end document.ready

