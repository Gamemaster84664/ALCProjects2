//Keeps the true ending from happening until players have reached it
var ending = false;
Game();

function Game() {

    //Starts the whole Game.
    //If players have reached the ending, they will find either pills or a knife on the counter instead of breakfast
    alert("You are awake.");
    var playerName = prompt("What is your name?");
    
    if(playerName == "climax") {
        Climax();
    }
    alert("Welcome to Dream Simulator: Text Edition, " + playerName + ".");
    
    if (!confirm("Are you ready to start your intense psychological journey?")) {
        alert("Too bad. Here goes.");
    }
    
    else {
        alert("Good. Here goes.");
    }
    FirstMorningBed();
    
    
    
    //First Morning
    function FirstMorningBed() {
        //First Prompt
        alert("The smell of bacon and eggs wafts its way upstairs to your room.");
        var inBed = prompt("Do you leave your bed? \n - Yes \n - No").toLowerCase();
        
        if(inBed == "yes" || inBed == "y") {
            FirstMorningRoom();
            
            function FirstMorningRoom() {
                //Naked or Dressed prompt
                var outBed = prompt("You stand half naked in your room. Thankfully, your door is closed. \n - Get dressed \n - Open door").toLowerCase();

                if(outBed == "get dressed" || outBed == "dress" || outBed == "g" || outBed == "dressed") {
                    FirstMorningDressPrompt();
                    
                    function FirstMorningDressPrompt() {
                        var dressed = prompt("You finally put clothes on. Your door is still closed. \n - Open door").toLowerCase();

                        if(dressed == "open door" || dressed == "open" || dressed == "o" || dressed == "door") {
                            alert("Your door swings open.");
                            alert("The smell of delicious typical morning food intensifies.");
                            FirstMorningUpstairsDressed();
                        }
                        else {
                            alert("You have chosen an answer that either leads to nothing or doesn't make sense. Please try again.");
                            FirstMorningDressPrompt();
                        }
                    }
                }

                else if(outBed == "open door" || outBed == "open" || outBed == "o" || outBed == "door") {
                    alert("Your door swings open.");
                    alert("The smell of delicious typical morning food intensifies.");
                    FirstMorningUpstairsNaked();
                }

                else {
                    alert("You have chosen an answer that either leads to nothing or doesn't make sense. Please try again.");
                    FirstMorningRoom();
                }
            }
        }
        
        else if(inBed == "no" || inBed == "n") {
            alert("You wait another ten minutes in bed. Nothing happens.");
            FirstMorningBed();
        }
        
        else {
            alert("You have chosen an answer that either leads to nothing or doesn't make sense. Please try again.");
            FirstMorningBed();
        }
    }
    
    
    //First Morning after dressed. Nothing really happens.
    function FirstMorningUpstairsDressed() {
        alert("There are no other rooms open upstairs. You head downstairs.");
        FirstMorningDownstairsDressed();
    }
    
    
    //First Morning after refusing dressed
    function FirstMorningUpstairsNaked() {
        FirstUpstairsPrompt();
        
        function FirstUpstairsPrompt() {
            var upstairs = prompt("There is one other door open upstairs. \n - Enter room \n - Go downstairs").toLowerCase();
            
            if(upstairs == "enter room" || upstairs == "enter" || upstairs == "e" || upstairs == "room" || upstairs == "r") {
                FirstGreenBathroom();
                
                function FirstGreenBathroom() {
                    var greenBathroom = prompt("You enter a small, green bathroom. There is a mirror over the sink. \n - Look at mirror \n - Leave room").toLowerCase();

                    if(greenBathroom == "look at mirror" || greenBathroom == "look" || greenBathroom == "look a" || greenBathroom == "mirror" || greenBathroom == "look m") {
                        FirstUpstairsMirror();
                        
                        function FirstUpstairsMirror() {
                            var greenBathroomPrompt = prompt("You look shamefully at your awkward, undressed self in the mirror. \n - Go get dressed \n - Forget this").toLowerCase();
                            
                            if(greenBathroomPrompt == "go get dressed" || greenBathroomPrompt == "get dressed" || greenBathroomPrompt == "g" || greenBathroomPrompt == "go" || greenBathroomPrompt == "dressed" || greenBathroomPrompt == "d") {
                                alert("You finally put clothes on. Since there's nothing else to do, you head downstairs.");
                                FirstMorningDownstairsDressed();
                            }
                            
                            else if(greenBathroomPrompt == "forget this" || greenBathroomPrompt == "forget" || greenBathroomPrompt == "f" || greenBathroomPrompt == "forget t") {
                                alert("Fine. You refuse to get dressed like a normal person. Since there's nothing else to do, you head downstairs.");
                                FirstMorningDownstairsNaked();
                            }
                            
                            else {
                                alert("You have chosen an answer that either leads to nothing or doesn't make sense. Please try again.");
                                FirstUpstairsMirror();
                            }
                        }
                    }
                    
                    else if(greenBathroom == "leave room" || greenBathroom == "leave" || greenBathroom == "room" || greenBathroom == "leave r") {
                        alert("You refuse to look at your undressed self in the mirror. Since there's nothing else to do, you head downstairs.");
                        FirstMorningDownstairsNaked();
                    }
                    
                    else {
                        alert("You have chosen an answer that either leads to nothing or doesn't make sense. Please try again.");
                        FirstGreenBathroom();
                    }
                }
            }
            
            else if(upstairs == "go downstairs" || upstairs == "go" || upstairs == "downstairs" || upstairs == "g" || upstairs == "d" || upstairs == "go d") {
                FirstMorningDownstairsNaked();
            }
            
            else {
                alert("You have chosen an answer that either leads to nothing or doesn't make sense. Please try again.");
                FirstUpstairsPrompt();
            }
        }
    }
    
    
    //First Breakfast after dressed
    function FirstMorningDownstairsDressed() {
        //True ending morning
        if(ending == true) {
            var trueEnding = prompt("Entering the kitchen, you see pills on the counter. \n - End it \n - Try to sleep").toLowerCase();
            
            //Bad ending
            if(trueEnding == "end it" || trueEnding == "end" || trueEnding == "it" || trueEnding == "e" || trueEnding == "end i") {
                alert("You pop the pills in your mouth.");
                alert("A burning sensation removes all sense of taste.");
                alert("You run into the bathroom and try to spit them out in the sink.");
                alert("The pills are gone, as well as most of your tongue.");
                alert("Gagging on singed tongue and blood, you pass out.");
                alert("It is dark");
                alert("Are you still asleep?");
                alert("The answer to that will never be known...");
                Credits();
            }
            
            //Decent ending
            else if(trueEnding == "try to sleep" || trueEnding == "sleep" || trueEnding == "try" || trueEnding == "t" || trueEnding == "s" || trueEnding == "try sleep" || trueEnding == "try s") {
                alert("You pass out.");
                alert("You try to open your eyes, but they seem to be sealed shut.");
                alert("It is dark.");
                alert("Are you still asleep?");
                alert("The answer to that will never be known...");
                Credits();
            }
            
            else {
                alert("You have chosen an answer that either leads to nothing or doesn't make sense. Please try again.");
                FirstMorningDownstairsDressed();
            }
        }
        
        //Default morning
        else{
            alert("Entering the kitchen, you see a plate of bacon and eggs on the counter. Your mother appears from behind the fridge and places a small jar next to the plate.");
            prompt("She says, \"Ah, " + playerName + "! You're finally awake! How are you feeling?\"");
            alert("\"...\"");
            alert("\"I see...\"");
            prompt("\"You mentioned yesterday that you were having trouble sleeping?\"");
            alert("\"Well, anyway...\"");
            alert("She gestures to the small jar.");
            alert("\"I managed to have these pills prescribed for you, they might help you sleep more soundly.\"");
            FirstMorningBreakfast();
        }
        
        function FirstMorningBreakfast() {
            var firstMorningDrug = prompt("Pills, or breakfast first? *This choice will matter* \n - Pills \n - Breakfast").toLowerCase();
            
            if(firstMorningDrug == "pills" || firstMorningDrug == "p") {
                alert("You take the pills. Then you wolf down your breakfast.");
                alert("Your mom gives you a disapproving look.");
                alert("\"Head on back to bed.\"");
                FirstMorningDrugSleep();
                
                function FirstMorningDrugSleep() {
                    var firstMorningBackBedDrug = prompt("You head back upstairs where your bed looks very inviting. \n - Sleep").toLowerCase();
                    
                    if(firstMorningBackBedDrug == "sleep" || firstMorningBackBedDrug == "s") {
                        alert("You body slam your bed, shaking the house.");
                        alert("You begin to drift out of consciousness.");
                        FirstDrugDream();
                    }
                    
                    else {
                        alert("You have chosen an answer that either leads to nothing or doesn't make sense. Please try again.");
                        FirstMorningDrugSleep();
                    }
                }
            }
            
            else if(firstMorningDrug == "breakfast" || firstMorningDrug == "b") {
                alert("You wolf down your breakfast. Then you take your pills.");
                alert("Your mom gives you a blank stare.");
                alert("\"Head on back to bed.\"");
                FirstMorningSleep();
                
                function FirstMorningSleep() {
                    var firstMorningBackBed = prompt("You head back upstairs where your bed looks very inviting. \n - Sleep").toLowerCase();
                    
                    if(firstMorningBackBed == "sleep" || firstMorningBackBed == "s") {
                        alert("You body slam your bed, shaking the house.");
                        alert("You begin to drift out of consciousness.");
                        FirstDream();
                    }
                    
                    else {
                        alert("You have chosen an answer that either leads to nothing or doesn't make sense. Please try again.");
                        FirstMorningSleep();
                    }
                }
            }
            
            else {
                alert("You have chosen an answer that either leads to nothing or doesn't make sense. Please try again.");
                FirstMorningBreakfast();
            }
        }
    }
    
    
    //First Breakfast after refusing dressed
    function FirstMorningDownstairsNaked() {
        //True ending morning
        if(ending == true) {
            var trueEnding = prompt("Entering the kitchen, you see a knife on the counter. \n - End it \n - Try to sleep");
            
            //Bad ending
            if(trueEnding == "end it" || trueEnding == "end" || trueEnding == "it" || trueEnding == "e" || trueEnding == "end i") {
                alert("You pick up the knife. Your warped face is reflected in the blade.");
                alert("Driving the knife into your stomach, you pass out.");
                alert("It is dark.");
                alert("Are you still asleep?");
                alert("The answer to that will never be known...");
                Credits();
            }
            
            //Decent ending
            else if(trueEnding == "try to sleep" || trueEnding == "sleep" || trueEnding == "try" || trueEnding == "t" || trueEnding == "s" || trueEnding == "try sleep" || trueEnding == "try s") {
                alert("You pass out.");
                alert("You try to open your eyes, but they seem to be sealed shut.");
                alert("It is dark.");
                alert("Are you still asleep?");
                alert("The answer to that will never be known...");
                Credits();
            }
            
            else {
                alert("You have chosen an answer that either leads to nothing or doesn't make sense. Please try again.");
                FirstMorningDownstairsNaked();
            }
        }
        
        //Default morning
        else {
            alert("Entering the kitchen, you see a plate of bacon and eggs on the counter. Your mother appears from behind the fridge and places a small jar next to the plate.");
            prompt("She says, startled, \"AH! " + playerName + "?! Where are your clothes?!\"");
            alert("\"Nevermind.\"");
            alert("\"I don't want to know.\"");
            prompt("\"You mentioned yesterday that you were having trouble sleeping?\"");
            alert("\"Well, anyway...\"");
            alert("She gestures to the small jar.");
            alert("\"I managed to have these pills prescribed for you, they might help you sleep more soundly.\"");
            FirstMorningBreakfastNaked();
        }
        
        function FirstMorningBreakfastNaked() {
            var firstMorningDrugNaked = prompt("Pills, or breakfast first? *This choice will matter* \n - Pills \n - Breakfast");
            
            if(firstMorningDrugNaked == "pills" || firstMorningDrugNaked == "p") {
                alert("You take the pills. Then you wolf down your breakfast.");
                alert("Your mom gives you a disapproving look.");
                alert("\"Head on back to bed.\"");
                FirstMorningDrugSleepNaked();
                
                function FirstMorningDrugSleepNaked() {
                    var firstMorningBackBedDrugNaked = prompt("You head back upstairs where your bed looks very inviting. \n - Sleep").toLowerCase();
                    
                    if(firstMorningBackBedDrugNaked == "sleep" || firstMorningBackBedDrugNaked == "s") {
                        alert("You body slam your bed, shaking the house.");
                        alert("You begin to drift out of consciousness.");
                        FirstDrugDream();
                    }
                    
                    else {
                        alert("You have chosen an answer that either leads to nothing or doesn't make sense. Please try again.");
                        FirstMorningDrugSleepNaked();
                    }
                }
            }
            
            else if(firstMorningDrugNaked == "breakfast" || firstMorningDrugNaked == "b") {
                alert("You wolf down your breakfast. Then you take your pills.");
                alert("Your mom gives you a blank stare.");
                alert("\"Head on back to bed.\"");
                FirstMorningSleepNaked();
                
                function FirstMorningSleepNaked() {
                    var firstMorningBackBedNaked = prompt("You head back upstairs where your bed looks very inviting. \n - Sleep").toLowerCase();
                    
                    if(firstMorningBackBedNaked == "sleep" || firstMorningBackBedNaked == "s") {
                        alert("You body slam your bed, shaking the house.");
                        alert("You begin to drift out of consciousness.");
                        FirstDream();
                    }
                    
                    else {
                        alert("You have chosen an answer that either leads to nothing or doesn't make sense. Please try again.");
                        FirstMorningSleepNaked();
                    }
                }
            }
            
            else {
                alert("You have chosen an answer that either leads to nothing or doesn't make sense. Please try again.");
                FirstMorningBreakfastNaked();
            }
        }
    }
    
    
    
    //First Dream from breakfast first
    //Players must search for coins before they can wake up. They are allowed to roam freely until they do so
    function FirstDream() {
        alert("You are asleep.");
        
        var coinInventory = 0;
        
        var yourClosetSearch = true;
        var parentsClosetSearch = true;
        var couchSearch = true;
        var studyShelfSearch = true;
        var fridgeSearch = true;
        var cabinetSearch = true;
        
        alert("You must find all six coins before leaving.");
        alert("You have " + coinInventory + " coins so far.");
        alert("You are in your room at night. It sounds like there are many people downstairs.");
        FirstDreamFirstRoom();
        
        
        //First Dream your bedroom
        function FirstDreamFirstRoom() {
            var firstDreamFirstRoomSearch = prompt("What do you do? \n - Go to bed \n - Search closet \ - Search bed \- Enter hallway").toLowerCase();
            
            if(firstDreamFirstRoomSearch == "go to bed" || firstDreamFirstRoomSearch == "go" || firstDreamFirstRoomSearch == "g" || firstDreamFirstRoomSearch == "go bed" || firstDreamFirstRoomSearch == "go b" || firstDreamFirstRoomSearch == "g bed") {
                if(coinInventory == 6) {
                    alert("You have collected all the coins. You sink slowly into your bed.");
                    SecondMorning();
                }
                else {
                    alert("You must find all six coins before leaving.");
                    alert("You have " + coinInventory + " coins so far.");
                    FirstDreamFirstRoom();
                }
            }
            
            else if(firstDreamFirstRoomSearch == "search closet" || firstDreamFirstRoomSearch == "closet" || firstDreamFirstRoomSearch == "c" || firstDreamFirstRoomSearch == "search c" || firstDreamFirstRoomSearch == "s closet") {
                if(yourClosetSearch == true) {
                    yourClosetSearch = false;
                    coinInventory += 1;
                    if(coinInventory == 6) {
                        alert("You found all the coins! Head back to bed!");
                    }
                    else {
                        alert("You found a coin! You have " + coinInventory + " coins so far.");
                    }
                    FirstDreamFirstRoom();
                }
                else {
                    alert("There's nothing here.");
                    FirstDreamFirstRoom();
                }
            }
            
            else if(firstDreamFirstRoomSearch == "search bed" || firstDreamFirstRoomSearch == "search b" || firstDreamFirstRoomSearch == "s bed") {
                alert("There's nothing here.");
                FirstDreamFirstRoom();
            }
            
            else if(firstDreamFirstRoomSearch == "enter hallway" || firstDreamFirstRoomSearch == "enter" || firstDreamFirstRoomSearch == "e" || firstDreamFirstRoomSearch == "enter h" || firstDreamFirstRoomSearch == "hallway" || firstDreamFirstRoomSearch == "h" || firstDreamFirstRoomSearch == "e hallway") {
                alert("You leave your room and enter the hallway.");
                FirstDreamUpstairsHallway();
            }
                
            else {
                alert("You have either chosen an answer that leads to nothing or doesn't make sense. Please try again.");
                FirstDreamFirstRoom();
            }
        }
        
        //First Dream upstairs
        function FirstDreamUpstairsHallway() {
            var upstairsPrompt = prompt("There are three doors open upstairs. The sound of people downstairs is accompanied by muffled dance music. \n - Enter your bedroom \n - Enter parents' bedroom \n - Enter bathroom \n - Go downstairs").toLowerCase();
            
            if(upstairsPrompt == "enter your bedroom" || upstairsPrompt == "your bedroom" || upstairsPrompt == "your" || upstairsPrompt == "y" || upstairsPrompt == "enter y" || upstairsPrompt == "your b" || upstairsPrompt == "y bedroom" || upstairsPrompt == "e your bedroom" || upstairsPrompt == "e your" || upstairsPrompt == "enter your") {
                alert("You enter your bedroom.");
                FirstDreamFirstRoom();
            }
            
            else if(upstairsPrompt == "enter parents bedroom" || upstairsPrompt == "enter parents' bedroom" || upstairsPrompt == "parents bedroom" || upstairsPrompt == "parents' bedroom" || upstairsPrompt == "p" || upstairsPrompt == "enter p" || upstairsPrompt == "e parents'" || upstairsPrompt == "e parents") {
                alert("You enter your parents' bedroom.");
                FirstDreamParentsRoom();
            }
            
            else if(upstairsPrompt == "enter bathroom" || upstairsPrompt == "bathroom" || upstairsPrompt == "b" || upstairsPrompt == "enter b" || upstairsPrompt == "e bathroom") {
                alert("You enter a small, green bathroom.");
                FirstDreamGreenBathroom();
            }
            
            else if(upstairsPrompt == "go downstairs" || upstairsPrompt == "go" || upstairsPrompt == "downstairs" || upstairsPrompt == "g" || upstairsPrompt == "d" || upstairsPrompt == "go d" || upstairsPrompt == "g downstairs" || upstairsPrompt == "go down" || upstairsPrompt == "down" || upstairsPrompt == "g down") {
                alert("You head downstairs.");
                FirstDreamLivingRoom();
            }
            
            else {
                alert("You have chosen an answer that either leads to nothing or doesn't make sense. Please try again.");
                FirstDreamUpstairsHallway();
            }
        }
        
        //First Dream parents room
        function FirstDreamParentsRoom() {
            var parentsRoomSearch = prompt("The sounds from downstairs dampen when you enter. \n - Search closet \n - Search bed \n - Enter hallway").toLowerCase();
            
            if(parentsRoomSearch == "enter hallway" || parentsRoomSearch == "enter" || parentsRoomSearch == "hallway" || parentsRoomSearch == "e" || parentsRoomSearch == "h" || parentsRoomSearch == "enter h" || parentsRoomSearch == "e hallway") {
                alert("You leave your parents' bedroom and enter the hallway.");
                FirstDreamUpstairsHallway();
            }
            
            else if(parentsRoomSearch == "search closet" || parentsRoomSearch == "closet" || parentsRoomSearch == "c" || parentsRoomSearch == "search c" || parentsRoomSearch == "s closet") {
                if(parentsClosetSearch == true) {
                    parentsClosetSearch = false;
                    coinInventory += 1;
                    if(coinInventory == 6) {
                        alert("You found all the coins! Head back to bed!");
                    }
                    else {
                        alert("You found a coin! You have " + coinInventory + " coins so far.");
                    }
                    FirstDreamParentsRoom();
                }
                else {
                    alert("There's nothing here.");
                    FirstDreamParentsRoom();
                }
            }
            
            else if(parentsRoomSearch == "search bed" || parentsRoomSearch == "bed" || parentsRoomSearch == "b" || parentsRoomSearch == "search b" || parentsRoomSearch == "s bed") {
                alert("There's nothing here.");
                FirstDreamParentsRoom();
            }
            
            else {
                alert("You have chosen an answer that either leads to nothing or doesn't make sense. Please try again.");
                FirstDreamParentsRoom();
            }
        }
        
        //First Dream upstairs bathroom
        function FirstDreamGreenBathroom() {
            var firstDreamGreenBathroomSearch = prompt("There is a mirror on the wall. \n - Look at mirror \n- Leave bathroom").toLowerCase();
            
            if(firstDreamGreenBathroomSearch == "look at mirror" || firstDreamGreenBathroomSearch == "look" || firstDreamGreenBathroomSearch == "mirror" || firstDreamGreenBathroomSearch == "look mirror" || firstDreamGreenBathroomSearch == "look m" || firstDreamGreenBathroomSearch == "look at" || firstDreamGreenBathroomSearch == "l mirror" || firstDreamGreenBathroomSearch == "l at mirror") {
                alert("Your face is intensely warped and continually twisting to horrifying shapes in the mirror. Not that there's anything different.");
                FirstDreamGreenBathroom();
            }
            
            else if(firstDreamGreenBathroomSearch == "leave bathroom" || firstDreamGreenBathroomSearch == "leave" || firstDreamGreenBathroomSearch == "leave b" || firstDreamGreenBathroomSearch == "l bathroom" || firstDreamGreenBathroomSearch == "bathroom" || firstDreamGreenBathroomSearch == "b") {
                alert("You leave the green bathroom and enter the hallway.");
                FirstDreamUpstairsHallway();
            }
            
            else {
                alert("You have chosen an answer that either leads to nothing or doesn't make sense. Please try again.");
                FirstDreamGreenBathroom();
            }
        }
        
        //First Dream downstairs
        function FirstDreamLivingRoom() {
            var downstairsParty = prompt("You are in the living room, where a massive party is taking place. The music heard earlier is now pounding and shaking the walls. Many people are getting quite drunk, including your mother. \n - Talk to mom \n - Enter kitchen \n - Enter study \n - Search couch \n - Go upstairs").toLowerCase();
            
            if(downstairsParty == "talk to mom" || downstairsParty == "talk" || downstairsParty == "mom" || downstairsParty == "t" || downstairsParty == "m" || downstairsParty == "talk mom" || downstairsParty == "talk m") {
                alert("You walk up to your mother, who greets you with a sluggish hug and unpleasant breath.");
                prompt("\"How ya doon, " + playerName + "?\"");
                alert("She seems to ignore you. Pretty accurate to real life.");
                alert("\"Anyhoooo...\"");
                alert("\"Stay awhile, have a drink or three! Or seven!\"");
                FirstDreamLivingRoom();
            }
            
            else if(downstairsParty == "enter kitchen" || downstairsParty == "kitchen" || downstairsParty == "k" || downstairsParty == "enter k" || downstairsParty == "e kitchen") {
                alert("You enter the kitchen.");
                FirstDreamKitchen();
            }
            
            else if(downstairsParty == "enter study" || downstairsParty == "study" || downstairsParty == "enter s" || downstairsParty == "e study") {
                alert("You enter your father's study.");
                FirstDreamStudy();
            }
            
            else if(downstairsParty == "search couch" || downstairsParty == "couch" || downstairsParty == "search" || downstairsParty == "s" || downstairsParty == "c" || downstairsParty == "search c" || downstairsParty == "s couch") {
                alert("You shove people one by one off of the couch and throw the cushions behind you.");
                if(couchSearch == true) {
                    couchSearch = false;
                    coinInventory += 1;
                    if(coinInventory == 6) {
                        alert("You found all the coins! Head upstairs and go back to bed!");
                    }
                    else {
                        alert("You found a coin! You have " + coinInventory + " coins so far.");
                    }
                    FirstDreamLivingRoom();
                }
                else {
                    alert("There's nothing here.");
                    FirstDreamLivingRoom();
                }
            }
            
            else if(downstairsParty == "go upstairs" || downstairsParty == "go" || downstairsParty == "upstairs" || downstairsParty == "g" || downstairsParty == "u" || downstairsParty == "go u" || downstairsParty == "g upstairs") {
                alert("You head back upstairs.");
                FirstDreamUpstairsHallway();
            }
            
            else {
                alert("You have chosen an answer that either leads to nothing or doesn't make sense. Please try again.");
                FirstDreamLivingRoom();
            }
        }
        
        //First Dream study
        function FirstDreamStudy() {
            var studySearch = prompt("Nobody seems to want to party in the study. Shocker. \n - Search bookshelf \n - Leave study").toLowerCase();
            
            if(studySearch == "search bookshelf" || studySearch == "search" || studySearch == "bookshelf" || studySearch == "s" || studySearch == "b" || studySearch == "search b" || studySearch == "s bookshelf") {
                if(studyShelfSearch == true) {
                    studyShelfSearch = false;
                    coinInventory += 1;
                    if(coinInventory == 6) {
                        alert("You found all the coins! Head upstairs and go back to bed!");
                    }
                    else {
                        alert("You found a coin! You have " + coinInventory + " coins so far.");
                    }
                    FirstDreamStudy();
                }
                else {
                    alert("There's nothing here.");
                    FirstDreamStudy();
                }
            }
            
            else if(studySearch == "leave study" || studySearch == "leave" || studySearch == "l" || studySearch == "leave s" || studySearch == "l study" || studySearch == "study") {
                alert("You leave your father's study.");
                FirstDreamLivingRoom();
            }
            
            else {
                alert("You have chosen an answer that either leads to nothing or doesn't make sense. Please try again.");
                FirstDreamStudy();
            }
        }
        
        //First Dream kitchen
        function FirstDreamKitchen() {
            var kitchenSearch = prompt("There are a few people in here eating out of the fridge and spilling their drinks casually onto the floor. \n - Search fridge \n - Search trash \n - Enter bathroom \n - Enter living room").toLowerCase();
            
            if(kitchenSearch == "search fridge" || kitchenSearch == "fridge" || kitchenSearch == "f" || kitchenSearch == "s fridge" || kitchenSearch == "search f") {
                alert("You shove two guys out of the way, knocking them and their drinks to the floor.");
                if(fridgeSearch == true) {
                    fridgeSearch = false;
                    coinInventory += 1;
                    if(coinInventory == 6) {
                        alert("You found all the coins! Head upstairs and go back to bed!");
                    }
                    else {
                        alert("You found a coin! You have " + coinInventory + " coins so far.");
                    }
                    FirstDreamKitchen();
                }
                else {
                    alert("There's nothing here.");
                    FirstDreamKitchen();
                }
            }
            
            else if(kitchenSearch == "search trash" || kitchenSearch == "trash" || kitchenSearch == "t" || kitchenSearch == "search t" || kitchenSearch == "s trash") {
                alert("There's nothing here.");
                FirstDreamKitchen();
            }
            
            else if(kitchenSearch == "enter bathroom" || kitchenSearch == "bathroom" || kitchenSearch == "b" || kitchenSearch == "enter b" || kitchenSearch == "e bathroom") {
                alert("You enter a large, yellow bathroom.");
                FirstDreamYellowBathroom();
            }
            
            else if(kitchenSearch == "enter living room" || kitchenSearch == "living room" || kitchenSearch == "living" || kitchenSearch == "l" || kitchenSearch == "enter l" || kitchenSearch == "e living room" || kitchenSearch == "e living") {
                alert("You enter the living room.");
                FirstDreamLivingRoom();
            }
            
            else {
                alert("You have chosen an answer that either leads to nothing or doesn't make sense. Please try again.");
                FirstDreamKitchen();
            }
        }
        
        //First Dream downstairs bathroom
        function FirstDreamYellowBathroom() {
            var yellowBathroomSearch = prompt("There is a cabinet over the sink. The sink is full of various alcoholic liquids. \n - Search cabinet \n - Leave bathroom").toLowerCase();
            
            if(yellowBathroomSearch == "search cabinet" || yellowBathroomSearch == "search" || yellowBathroomSearch == "cabinet" || yellowBathroomSearch == "s" || yellowBathroomSearch == "c" || yellowBathroomSearch == "search c" || yellowBathroomSearch == "s cabinet") {
                if(cabinetSearch == true) {
                    cabinetSearch = false;
                    coinInventory += 1;
                    if(coinInventory == 6) {
                        alert("You found all the coins! Head upstairs and go back to bed!");
                    }
                    else {
                        alert("You found a coin! You have " + coinInventory + " coins so far.");
                    }
                    FirstDreamYellowBathroom();
                }
                else {
                    alert("There's nothing here.");
                    FirstDreamYellowBathroom();
                }
            }
            
            else if(yellowBathroomSearch == "leave bathroom" || yellowBathroomSearch == "leave" || yellowBathroomSearch == "l" || yellowBathroomSearch == "leave b" || yellowBathroomSearch == "l bathroom") {
                alert("You head back into the kitchen.");
                FirstDreamKitchen();
            }
            
            else {
                alert("You have chosen an answer that either leads to nothing or doesn't make sense. Please try again.");
                FirstDreamYellowBathroom();
            }
        }
    }
    
        
    
    //First Dream from pills first
    //Players must search for pills before they can wake up. They are allowed to roam freely until they do so
    function FirstDrugDream() {
        alert("You are asleep.");
        
        var drugInventory = 0;
        
        var yourBedSearch = true;
        var parentsBedSearch = true;
        var couchSearch = true;
        var studyShelfSearch = true;
        var trashSearch = true;
        var sinkSearch = true;
        
        alert("You must find all six pills before leaving.");
        alert("You have " + drugInventory + " pills so far.");
        alert("You are in your room at night. The walls are swaying to an unknown rhythm.");
        FirstDrugDreamFirstRoom();
        
        //First Drug Dream your bedroom
        function FirstDrugDreamFirstRoom() {
            var firstDrugDreamFirstRoomSearch = prompt("What do you do? \n - Go to bed \n - Search closet \ - Search bed \- Enter hallway").toLowerCase();
            
            if(firstDrugDreamFirstRoomSearch == "go to bed" || firstDrugDreamFirstRoomSearch == "go" || firstDrugDreamFirstRoomSearch == "g" || firstDrugDreamFirstRoomSearch == "go bed" || firstDrugDreamFirstRoomSearch == "g bed" || firstDrugDreamFirstRoomSearch == "go b") {
                if(drugInventory == 6) {
                    alert("You have collected all the pills. You sink slowly into your bed.");
                    SecondMorning();
                }
                else {
                    alert("You must find all six pills before leaving.");
                    alert("You have " + drugInventory + " pills so far.");
                    FirstDrugDreamFirstRoom();
                }
            }
            
            else if(firstDrugDreamFirstRoomSearch == "search bed" || firstDrugDreamFirstRoomSearch == "search b" || firstDrugDreamFirstRoomSearch == "s bed") {
                if(yourBedSearch == true) {
                    yourBedSearch = false;
                    drugInventory += 1;
                    if(drugInventory == 6) {
                        alert("You found all the pills! Head back to bed!");
                    }
                    else {
                        alert("You found a pill! You have " + drugInventory + " pills so far.");
                    }
                    FirstDrugDreamFirstRoom();
                }
                else {
                    alert("There's nothing here.");
                    FirstDrugDreamFirstRoom();
                }
            }
            
            else if(firstDrugDreamFirstRoomSearch == "search closet" || firstDrugDreamFirstRoomSearch == "closet" || firstDrugDreamFirstRoomSearch == "c" || firstDrugDreamFirstRoomSearch == "search c" || firstDrugDreamFirstRoomSearch == "s closet") {
                alert("There's nothing here.");
                FirstDrugDreamFirstRoom();
            }
            
            else if(firstDrugDreamFirstRoomSearch == "enter hallway" || firstDrugDreamFirstRoomSearch == "enter" || firstDrugDreamFirstRoomSearch == "e" || firstDrugDreamFirstRoomSearch == "enter h" || firstDrugDreamFirstRoomSearch == "e hallway") {
                alert("You leave your room and enter the hallway.");
                FirstDrugDreamUpstairsHallway();
            }
                
            else {
                alert("You have either chosen an answer that leads to nothing or doesn't make sense. Please try again.");
                FirstDrugDreamFirstRoom();
            }
        }
        
        //First Drug Dream upstairs
        function FirstDrugDreamUpstairsHallway() {
            var upstairsPrompt = prompt("There are three doors open upstairs. The walls are still swaying. \n - Enter your bedroom \n - Enter parents' bedroom \n - Enter bathroom \n - Go downstairs").toLowerCase();
            
            if(upstairsPrompt == "enter your bedroom" || upstairsPrompt == "your bedroom" || upstairsPrompt == "your" || upstairsPrompt == "y" || upstairsPrompt == "enter your" || upstairsPrompt == "enter y" || upstairsPrompt == "e your bedroom" || upstairsPrompt == "e your" || upstairsPrompt == "your b" || upstairsPrompt == "y bedroom") {
                alert("You enter your bedroom.");
                FirstDrugDreamFirstRoom();
            }
            
            else if(upstairsPrompt == "enter parents bedroom" || upstairsPrompt == "enter parents' bedroom" || upstairsPrompt == "parents bedroom" || upstairsPrompt == "parents' bedroom" || upstairsPrompt == "p" || upstairsPrompt == "enter p" || upstairsPrompt == "e parents'" || upstairsPrompt == "e parents") {
                alert("You enter your parents' bedroom.");
                FirstDrugDreamParentsRoom();
            }
            
            else if(upstairsPrompt == "enter bathroom" || upstairsPrompt == "bathroom" || upstairsPrompt == "b" || upstairsPrompt == "enter b" || upstairsPrompt == "e bathroom") {
                alert("You enter a small, green bathroom.");
                FirstDrugDreamGreenBathroom();
            }
            
            else if(upstairsPrompt == "go downstairs" || upstairsPrompt == "go" || upstairsPrompt == "downstairs" || upstairsPrompt == "g" || upstairsPrompt == "d" || upstairsPrompt == "go d" || upstairsPrompt == "g downstairs" || upstairsPrompt == "g down" || upstairsPrompt == "go down" || upstairsPrompt == "down") {
                alert("You head downstairs.");
                FirstDrugDreamLivingRoom();
            }
            
            else {
                alert("You have chosen an answer that either leads to nothing or doesn't make sense. Please try again.");
                FirstDrugDreamUpstairsHallway();
            }
        }
        
        //First Drug Dream parents room
        function FirstDrugDreamParentsRoom() {
            var parentsRoomSearch = prompt("The walls continue to sway in here. \n - Search closet \n - Search bed \n - Enter hallway").toLowerCase();
            
            if(parentsRoomSearch == "enter hallway" || parentsRoomSearch == "enter" || parentsRoomSearch == "hallway" || parentsRoomSearch == "e" || parentsRoomSearch == "h" || parentsRoomSearch == "enter h" || parentsRoomSearch == "e hallway") {
                alert("You leave your parents' bedroom and enter the hallway.");
                FirstDrugDreamUpstairsHallway();
            }
            
            else if(parentsRoomSearch == "search bed" || parentsRoomSearch == "bed" || parentsRoomSearch == "b" || parentsRoomSearch == "search b" || parentsRoomSearch == "s bed") {
                if(parentsBedSearch == true) {
                    parentsBedSearch = false;
                    drugInventory += 1;
                    if(drugInventory == 6) {
                        alert("You found all the pills! Head back to bed!");
                    }
                    else {
                        alert("You found a pill! You have " + drugInventory + " pills so far.");
                    }
                    FirstDrugDreamParentsRoom();
                }
                else {
                    alert("There's nothing here.");
                    FirstDrugDreamParentsRoom();
                }
            }
            
            else if(parentsRoomSearch == "search closet" || parentsRoomSearch == "closet" || parentsRoomSearch == "c" || parentsRoomSearch == "search c" || parentsRoomSearch == "s closet") {
                alert("There's nothing here.");
                FirstDrugDreamParentsRoom();
            }
            
            else {
                alert("You have chosen an answer that either leads to nothing or doesn't make sense. Please try again.");
                FirstDrugDreamParentsRoom();
            }
        }
        
        //First Drug Dream upstairs bathroom
        function FirstDrugDreamGreenBathroom() {
            var firstDreamGreenBathroomSearch = prompt("There is a mirror on the wall. \n - Look at mirror \n- Leave bathroom").toLowerCase();
            
            if(firstDreamGreenBathroomSearch == "look at mirror" || firstDreamGreenBathroomSearch == "look" || firstDreamGreenBathroomSearch == "mirror" || firstDreamGreenBathroomSearch == "look mirror" || firstDreamGreenBathroomSearch == "look m" || firstDreamGreenBathroomSearch == "l mirror" || firstDreamGreenBathroomSearch == "l at mirror" || firstDreamGreenBathroomSearch == "look at") {
                alert("Your face is gone.");
                FirstDrugDreamGreenBathroom();
            }
            
            else if(firstDreamGreenBathroomSearch == "leave bathroom" || firstDreamGreenBathroomSearch == "leave" || firstDreamGreenBathroomSearch == "bathroom" || firstDreamGreenBathroomSearch == "l bathroom" || firstDreamGreenBathroomSearch == "leave b" || firstDreamGreenBathroomSearch == "b") {
                alert("You leave the green bathroom and enter the hallway.");
                FirstDrugDreamUpstairsHallway();
            }
            
            else {
                alert("You have chosen an answer that either leads to nothing or doesn't make sense. Please try again.");
                FirstDrugDreamGreenBathroom();
            }
        }
        
        //First Drug Dream downstairs
        function FirstDrugDreamLivingRoom() {
            var downstairsParty = prompt("You are in the living room, where the floor is covered in gray, murky water. \n - Enter kitchen \n - Enter study \n - Search couch \n - Go upstairs").toLowerCase();
            
            if(downstairsParty == "enter kitchen" || downstairsParty == "kitchen" || downstairsParty == "k" || downstairsParty == "e kitchen" || downstairsParty == "enter k") {
                alert("You enter the kitchen.");
                FirstDrugDreamKitchen();
            }
            
            else if(downstairsParty == "enter study" || downstairsParty == "study" || downstairsParty == "enter s" || downstairsParty == "e study") {
                alert("You enter your father's study.");
                FirstDrugDreamStudy();
            }
            
            else if(downstairsParty == "search couch" || downstairsParty == "couch" || downstairsParty == "search" || downstairsParty == "s" || downstairsParty == "c" || downstairsParty == "search c" || downstairsParty == "s couch") {
                alert("The cushions and fabrics shrivel away into the frame.");
                if(couchSearch == true) {
                    couchSearch = false;
                    drugInventory += 1;
                    if(drugInventory == 6) {
                        alert("You found all the pills! Head upstairs and go back to bed!");
                    }
                    else {
                        alert("You found a pill! You have " + drugInventory + " pills so far.");
                    }
                    FirstDrugDreamLivingRoom();
                }
                else {
                    alert("There's nothing here.");
                    FirstDrugDreamLivingRoom();
                }
            }
            
            else if(downstairsParty == "go upstairs" || downstairsParty == "go" || downstairsParty == "upstairs" || downstairsParty == "g" || downstairsParty == "u" || downstairsParty == "g upstairs" || downstairsParty == "go u") {
                alert("You head back upstairs.");
                FirstDrugDreamUpstairsHallway();
            }
            
            else {
                alert("You have chosen an answer that either leads to nothing or doesn't make sense. Please try again.");
                FirstDrugDreamLivingRoom();
            }
        }
        
        //First Drug Dream study
        function FirstDrugDreamStudy() {
            var studySearch = prompt("There is a man standing frozen by the bookshelf staring at you. He is pointing a finger at one of the books. \n - Search bookshelf \n - Leave study").toLowerCase();
            
            if(studySearch == "search bookshelf" || studySearch == "search" || studySearch == "bookshelf" || studySearch == "s" || studySearch == "b" || studySearch == "search b" || studySearch == "s bookshelf") {
                alert("You move the book the man was pointing to.");
                if(studyShelfSearch == true) {
                    studyShelfSearch = false;
                    drugInventory += 1;
                    if(drugInventory == 6) {
                        alert("You found all the pills! Head upstairs and go back to bed!");
                    }
                    else {
                        alert("You found a pill! You have " + drugInventory + " pills so far.");
                    }
                    FirstDrugDreamStudy();
                }
                else {
                    alert("There's nothing here.");
                    FirstDrugDreamStudy();
                }
            }
            
            else if(studySearch == "leave study" || studySearch == "leave" || studySearch == "l" || studySearch == "study" || studySearch == "l study" || studySearch == "leave s") {
                alert("You leave your father's study.");
                FirstDrugDreamLivingRoom();
            }
            
            else {
                alert("You have chosen an answer that either leads to nothing or doesn't make sense. Please try again.");
                FirstDrugDreamLivingRoom();
            }
        }
        
        //First Drug Dream kitchen
        function FirstDrugDreamKitchen() {
            var kitchenSearch = prompt("The fridge is pulsing with bulging veins. \n - Search fridge \n - Search trash \n - Enter bathroom \n - Enter living room").toLowerCase();
            
            if(kitchenSearch == "search trash" || kitchenSearch == "trash" || kitchenSearch == "t" || kitchenSearch == "search t" || kitchenSearch == "s trash") {
                if(trashSearch == true) {
                    trashSearch = false;
                    drugInventory += 1;
                    if(drugInventory == 6) {
                        alert("You found all the pills! Head upstairs and go back to bed!");
                    }
                    else {
                        alert("You found a pill! You have " + drugInventory + " pills so far.");
                    }
                    FirstDrugDreamKitchen();
                }
                else {
                    alert("There's nothing here.");
                    FirstDrugDreamKitchen();
                }
            }
            
            else if(kitchenSearch == "search fridge" || kitchenSearch == "fridge" || kitchenSearch == "f" || kitchenSearch == "search f" || kitchenSearch == "s fridge") {
                alert("There's nothing here. No pills anyway. There are hundreds of jars of white olives that look suspiciously like eyes, watching you.");
                FirstDrugDreamKitchen();
            }
            
            else if(kitchenSearch == "enter bathroom" || kitchenSearch == "bathroom" || kitchenSearch == "b" || kitchenSearch == "enter b" || kitchenSearch == "e bathroom") {
                alert("You enter a large, yellow bathroom.");
                FirstDrugDreamYellowBathroom();
            }
            
            else if(kitchenSearch == "enter living room" || kitchenSearch == "living room" || kitchenSearch == "living" || kitchenSearch == "l" || kitchenSearch == "enter l" || kitchenSearch == "e living" || kitchenSearch == "e living room") {
                alert("You enter the living room.");
                FirstDrugDreamLivingRoom();
            }
            
            else {
                alert("You have chosen an answer that either leads to nothing or doesn't make sense. Please try again.");
                FirstDrugDreamKitchen();
            }
        }
        
        //First Drug Dream downstairs bathroom
        function FirstDrugDreamYellowBathroom() {
            var yellowBathroomSearch = prompt("The sink is full of a black, tar-like substance. \n - Search sink \n - Leave bathroom").toLowerCase();
            
            if(yellowBathroomSearch == "search sink" || yellowBathroomSearch == "search" || yellowBathroomSearch == "sink" || yellowBathroomSearch == "s" || yellowBathroomSearch == "s sink" || yellowBathroomSearch == "search s") {
                alert("You plunge your hand into the dark liquid. It has an almost alive warmth to it.");
                if(sinkSearch == true) {
                    sinkSearch = false;
                    drugInventory += 1;
                    if(drugInventory == 6) {
                        alert("You found all the pills! Head upstairs and go back to bed!");
                    }
                    else {
                        alert("You found a pill! You have " + drugInventory + " pills so far.");
                    }
                    FirstDrugDreamYellowBathroom();
                }
                else {
                    alert("There's nothing here.");
                    FirstDrugDreamYellowBathroom();
                }
            }
            
            else if(yellowBathroomSearch == "leave bathroom" || yellowBathroomSearch == "leave" || yellowBathroomSearch == "l" || yellowBathroomSearch == "l bathroom" || yellowBathroomSearch == "leave b") {
                alert("You head back into the kitchen.");
                FirstDrugDreamKitchen();
            }
            
            else {
                alert("You have chosen an answer that either leads to nothing or doesn't make sense. Please try again.");
                FirstDrugDreamYellowBathroom();
            }
        }
    }
    
    
    
    //Morning after dream
    //Depending on the choice, players will have to run from/fight mom for the "final" stretch of the game
    function SecondMorning() {
        alert("You are in your room.");
        alert("It's morning.");
        alert("Your mother has approached your bed carrying a tray with a plate of pancakes.");
        prompt("\"How did you sleep last night?\"");
        alert("\"I'm sure you were fine.\"");
        alert("A small jar has materialized on the tray.");
        Climax();
    }
    
    //Fighting mom
    function Climax() {
            var secondMorningPrompt = prompt("\"Would you like some more pills?\" \n *This choice will also matter* \n - Pills \n - \"This isn't real!\"").toLowerCase();
            
            //Starts the drug dream
            if(secondMorningPrompt == "p" || secondMorningPrompt == "pills" || secondMorningPrompt == "yes" || secondMorningPrompt == "y") {
                alert("You take the pills.");
                alert("She smiles as you drift asleep.");
                FirstDrugDream();
            }
        
            //Starting a climactic ending where mom attacks you
            else if(secondMorningPrompt == "this isnt real" || secondMorningPrompt == "this isn't real" || secondMorningPrompt == "this" || secondMorningPrompt == "not real" || secondMorningPrompt == "no pills" || secondMorningPrompt == "t" || secondMorningPrompt == "real" || secondMorningPrompt == "r" || secondMorningPrompt == "no" || secondMorningPrompt == "n") {
                alert("Your mom gives you a disapproving look.");
                alert("She throws the tray at the wall. The plate shatters, spilling pancakes and broken glass onto the floor.");
                var climaxRun = prompt("She pulls out a large knife. \n - Run!").toLowerCase();
                
                if(climaxRun == "run" || climaxRun == "r") {
                    var upstairsClimax = prompt("You dash out of your room right as your mother slashes the pillow. \n - Bathroom \n - Downstairs").toLowerCase();
                    
                    //Bad ending
                    if(upstairsClimax == "bathroom" || upstairsClimax == "b") {
                        var bathroomClimax = prompt("You run into the green bathroom and slam the door. \n - Lock the door").toLowerCase();
                        
                        if(bathroomClimax == "lock the door" || bathroomClimax == "lock" || bathroomClimax == "door" || bathroomClimax == "l" || bathroomClimax == "d" || bathroomClimax == "lock door" || bathroomClimax == "l door" || bathroomClimax == "lock d") {
                            alert("You twist the lock.");
                            alert("A loud thud comes from the other side, followed by splintering wood.");
                            alert("You look for an exit.");
                            alert("The sound of chopping and splintering wood intensifies.");
                            alert("The window is sealed shut.");
                            alert("A blade pierces through the center of the door.");
                            alert("You cower in the furthest corner from the door.");
                            alert("Her whole hand plunges through the wood with the knife.");
                            alert("It flies out of her hand towards you.");
                            Death();
                        }
                        
                        else {
                            alert("The door remains unlocked. It swings open to reveal your mom hunched over and shuddering in the doorway.");
                            Death();
                        }
                    }
                    
                    else if(upstairsClimax == "downstairs" || upstairsClimax == "d") {
                        var downstairsClimax = prompt("You stumble down the stairs. \n - Front door \n - Kitchen window").toLowerCase();
                        
                        if(downstairsClimax == "front door" || downstairsClimax == "front" || downstairsClimax == "door" || downstairsClimax == "f" || downstairsClimax == "d") {
                            alert("You run for the nearest door.");
                            alert("It's locked.");
                            var escapeDoor = prompt("Her shadow covers the door. \n - Fight \n - Flight");
                            
                            //Good ending
                            if(escapeDoor == "fight") {
                                alert("You turn around and lunge at her.");
                                alert("Somehow, you ended up plowing the knife into her stomach.");
                                alert("You both fall to the floor. Your body lands on the handle and drives the blade even further.");
                                alert("She coughs and gasps through a mouth full of blood and broken glass.");
                                alert("Her spastic movements eventually stop.");
                                Victory();
                            }
                            
                            //Bad ending
                            else if(escapeDoor == "flight") {
                                alert("You try to dart past her.");
                                alert("She grabs you and pulls you closer.");
                                alert("Looking up, you see her wicked smile is full of shards of broken glass. Blood drips from the corners of her mouth.");
                                Death();
                            }
                            
                            else {
                                Death(); 
                            }
                        }
                        
                        else if(downstairsClimax == "kitchen window" || downstairsClimax == "kitchen" || downstairsClimax == "window" || downstairsClimax == "k" || downstairsClimax == "w") {
                            alert("You run to the kitchen window.");
                            alert("It's open.");
                            alert("She appears from around the corner, blood dripping from the corners of her mouth.");
                            var escapeWindow = prompt("She appears from around the corner. \n - Fight \n - Flight").toLowerCase();
                            
                            //Bad ending
                            if(escapeWindow == "fight") {
                                alert("You run at her, fists swinging wildly.");
                                alert("A few punches hit her, but she's not phased at all.");
                                Death();
                            }
                            
                            //Good ending
                            else if(escapeWindow == "flight") {
                                alert("You scramble through the window.");
                                alert("A deep, stinging sensation forms behind your left thigh.");
                                alert("You fall out of the window, landing hard on the knife in your leg.");
                                alert("Looking through the window, your mother stares back and screams. Blood flies from her mouth, which is full of glass shards. Apparently, she can't get to you and is quite pissed about it.");
                                Victory();
                            }
                            
                            else {
                                alert("She approaches you.");
                                alert("As her lips part into a sickening grin, shards of broken glass slowly cut across and shear them open.");
                                Death();
                            }
                        }
                        
                        else {
                            alert("Your mother leaps at you from the top of the stairs.");
                            Death();
                        }
                    }
                    
                    else {
                        alert("Your mother creeps up behind you.");
                        Death();
                    }
                }
                
                else {
                    alert("You stay in your bed.");
                    Death();
                }
            }

            else {
                alert("You have chosen an answer that either leads to nothing or doesn't make sense. Please try again.");
                Climax();
            }
        }
    
    //Esaping mom and starting a true ending
    function Victory() {
        alert("You have escaped!");
        alert("However...");
        alert("The walls on your house are swaying.");
        alert("You try to fall asleep, but can't.");
        alert("You pinch and slap yourself a few times, but you're still outside.");
        alert("You close your eyes and count to three.");
        ending = true;
        Game();
    }
    
    //Death by mom
    function Death() {
        alert("The knife is driven deep into your head.");
        var restart = prompt("You have died. \n - Type R to restart at the last *Important* choice.").toLowerCase();
        
        switch(restart) {
            
            case "r":
                Climax();
                break;

            default:
                while (!confirm("You don't want to restart at the last *Important* prompt?")) {
                    alert("You will restart at the last *Important* prompt.");
                    Climax();
                }

                alert("Alright then.");
                alert("If you want to come back here, choose \"climax\" as your name.");
                Game();
                break;
        }
    }
    
    //Closes page to reveal credits
    function Credits() {
        page.close
    }
}