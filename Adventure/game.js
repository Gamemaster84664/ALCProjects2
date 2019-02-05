Game();

function Game() {

    //Starts the whole Game.
    alert("You are awake.");
    var playerName = prompt("What is your name?");
    alert("Welcome to Dream Simulator: Text Edition, " + playerName + ".");
    confirm("Are you ready to start your intense psychological journey?");
    alert("Good. Here goes.");
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

                if(outBed == "get dressed" || outBed == "dress" || outBed == "g") {
                    FirstMorningDressPrompt();
                    
                    function FirstMorningDressPrompt() {
                        var dressed = prompt("You finally put clothes on. Your door is still closed. \n - Open door").toLowerCase();

                        if(dressed == "open door" || dressed == "open" || dressed == "o") {
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

                else if(outBed == "open door" || outBed == "open" || outBed == "o") {
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
    
    /*var restart = prompt("You have died. \n - Press R to restart.").toLowerCase();
            
            if(restart == "r") {
                Game();
            }
    */
    
    //First Morning after dressed
    function FirstMorningUpstairsDressed() {
        alert("There are no other rooms open upstairs. You head downstairs.");
        FirstMorningDownstairsDressed();
    }
    
    
    //First Morning after refusing dressed
    function FirstMorningUpstairsNaked() {
        FirstUpstairsPrompt();
        
        function FirstUpstairsPrompt() {
            var upstairs = prompt("There is one other door open upstairs. \n - Enter room \n - Go downstairs").toLowerCase();
            
            if(upstairs == "enter room" || upstairs == "enter" || upstairs == "e") {
                FirstGreenBathroom();
                
                function FirstGreenBathroom() {
                    var greenBathroom = prompt("You enter a small, green bathroom. There is a mirror over the sink. \n - Look at mirror \n - Leave room").toLowerCase();

                    if(greenBathroom == "look at mirror" || greenBathroom == "look") {
                        FirstUpstairsMirror();
                        
                        function FirstUpstairsMirror() {
                            var greenBathroomPrompt = prompt("You look shamefully at your awkward, undressed self in the mirror. \n - Go get dressed \n - Forget this").toLowerCase();
                            
                            if(greenBathroomPrompt == "go get dressed" || greenBathroomPrompt == "get dressed" || greenBathroomPrompt == "g") {
                                alert("You finally put clothes on. Since there's nothing else to do, you head downstairs.");
                                FirstMorningDownstairsDressed();
                            }
                            
                            else if(greenBathroomPrompt == "forget this" || greenBathroomPrompt == "forget" || greenBathroomPrompt == "f") {
                                alert("Fine. You refuse to get dressed like a normal person. Since there's nothing else to do, you head downstairs.");
                                FirstMorningDownstairsNaked();
                            }
                            
                            else {
                                alert("You have chosen an answer that either leads to nothing or doesn't make sense. Please try again.");
                                FirstUpstairsMirror();
                            }
                        }
                    }
                    
                    else if(greenBathroom == "leave room" || greenBathroom == "leave") {
                        alert("You refuse to look at your undressed self in the mirror. Since there's nothing else to do, you head downstairs.");
                        FirstMorningDownstairsNaked();
                    }
                    
                    else {
                        alert("You have chosen an answer that either leads to nothing or doesn't make sense. Please try again.");
                        FirstGreenBathroom();
                    }
                }
            }
            
            else if(upstairs == "go downstairs" || upstairs == "go" || upstairs == "downstairs" || upstairs == "g") {
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
        alert("Entering the kitchen, you see a plate of bacon and eggs on the counter. Your mother appears from behind the fridge and places a small jar next to the plate.");
        prompt("She says, \"Ah, " + playerName + "! You're finally awake! How are you feeling?\"");
        alert("\"...\"");
        alert("\"I see...\"");
        prompt("\"You mentioned yesterday that you were having trouble sleeping?\"");
        alert("\"Well, anyway...\"");
        alert("She gestures to the small jar.");
        alert("\"I managed to have these pills prescribed for you, they might help you sleep more soundly.\"");
        FirstMorningBreakfast();
        
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
        alert("Entering the kitchen, you see a plate of bacon and eggs on the counter. Your mother appears from behind the fridge and places a small jar next to the plate.");
        prompt("She says, startled, \"AH! " + playerName + "?! Where are your clothes?!\"");
        alert("\"Nevermind.\"");
        alert("\"I don't want to know.\"");
        prompt("\"You mentioned yesterday that you were having trouble sleeping?\"");
        alert("\"Well, anyway...\"");
        alert("She gestures to the small jar.");
        alert("\"I managed to have these pills prescribed for you, they might help you sleep more soundly.\"");
        FirstMorningBreakfastNaked();
        
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
    function FirstDream() {
        alert("You are asleep.");
        
    }
    
    //First Dream from pills first
    function FirstDrugDream() {
        alert("You are asleep.");
        
    }
}