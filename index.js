
var numberOfDrums = document.querySelectorAll(".drum").length;

//button press

for(var i = 0; i < numberOfDrums; i++) {
    

    var buttonInnerHTML = this.innerHTML;
    document.querySelectorAll(".drum")[i].addEventListener("click" ,function (){
        
        var buttonInnerHTML = this.innerHTML;
        console.log(buttonInnerHTML);
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
       
    });

}

                        //keypress
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key){
    switch (key) {
        case "w":
            var tom_1 = new Audio("sounds/tom-1.mp3");
            tom_1.play();
            break;
        case "a":
            var tom_2 = new Audio("sounds/tom-2.mp3");
            tom_2.play();
            break;
        case "s":
            var tom_3 = new Audio("sounds/tom-3.mp3");
            tom_3.play();
            break;    
        case "d":
            var tom_4 = new Audio("sounds/tom-4.mp3");
            tom_4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break; 
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick_bass = new Audio("sounds/kick-bass.mp3");
            kick_bass.play();
            break;           
        default:
            console.log(buttonInnerHTML);
            
    }
}

function buttonAnimation(currentKey){
    var activeBtn = document.querySelector("." + currentKey);

    activeBtn.classList.add("pressed");
    document.querySelector("h1").classList.add("pressed-h1");
    setTimeout(function(){
        activeBtn.classList.remove("pressed");
        document.querySelector("h1").classList.remove("pressed-h1");
    }, 100)

}

// function add(num1,num2){
//         return num1 + num2;
// }

// function multiply(num1,num2){
//     return num1 * num2;
// }

// function divide(num1,num2){
//     return num1 / num2;
// }

// function substract(num1,num2){
//     return num1 - num2;
// }


// function calculator(num1,num2,operator) {
//     return operator(num1,num2);
    
// }