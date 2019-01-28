Game();

function Game() {

    alert("You are awake.");
    var playerName = prompt("What is your name?");
    alert("Welcome to Dream Simulator: Text Edition, " + playerName + ".");
    FirstMorning();
    
    function FirstMorning() {
        alert("The smell of bacon and eggs wafts its way upstairs to your room.");
        var inBed = prompt("Do you leave your bed? \n - Yes \n - No").toLowerCase();
        
        if(inBed == "yes" || inBed == "y") {
            var outBed = prompt("You stand half naked in your room. Thankfully, your door is closed. \n - Get dressed \n - Open door").toLowerCase();
            
            if(outBed == "get dressed" || outBed == "dress" || outBed == "g") {
                var dressed = prompt("You finally put clothes on. Your door is still closed. \n - Open door").toLowerCase();
                
                if(dressed == "open door" || dressed == "open" || dressed == "o") {
                    alert("Your door swings open.");
                    alert("The smell of delicous typical morning food intensifies.");
                }
            }
        }
        
        else if(inBed == "no" || inBed == "n") {
            alert("You stay in bed. The smell changes from breakfast to rotting flesh. Something is running up the stairs at a rapid pace.");
            alert("Your door explodes open, revealing a shuddering corpse standing in the doorway.");
            alert("It sprints across your room until it is standing above you, breathing hot, moist air into your face. You close your eyes as its jagged, yellow teeth slowly sink into your forehead.");
            alert("Everything goes black.");
            var restart = prompt("You have died. \n - Press R to restart.").toLowerCase();
            
            if(restart == "r") {
                Game();
            }
            
        }
        else {
            alert("You have chosen an answer that either leads to nothing or doesn't make sense. Please try again.");
            FirstMorning();
        }
    }
}