
//Challenge 1 Age in Days
let clickMeBtn = document.getElementById('clickMe');

//this will prompt the user to select a date when they click the 'Click Me' button
clickMeBtn.addEventListener('click', e=>{
    console.log('What up');
    let dateDiv = document.getElementById('dateBtn');
    dateDiv.innerHTML = '<input id = dateInput type = date> <button id = subBtn onclick = getValue()> Submit</button>';
    
},{once:true})

//now we gotta fetch the date from submit and calculate days 
function getValue(){
    
    var date = document.getElementById('dateInput').value;
    var dateElements = date.toString().split('-');
    var days = (new Date() - new Date(dateElements[0], dateElements[1], dateElements[2])) / (1000 * 60 * 60 * 24);
    alert('Here is how old you are in days '+ days);

}

//Challenge 2: Generate Cats
function generateCat(){
    var catImage = document.createElement('img');
    let catDiv = document.getElementById('cats');
    catImage.src = '/home/jakub/JavaScript/Challenges/images/cats.png';
    catDiv.appendChild(catImage);
}

//challenge 3 rock paper scissors
//First store each action to a click variable 

var playerAction,cpuAction
var playerScore = 0;
var cpuScore = 0;
function game(btn){
    playerAction = btn.id;
    cpuAction = cpuChoice();
    //game conditions
    if(playerAction == cpuAction){
        alert('Player Chose '+playerAction+' CPU Chose '+cpuAction+'\nResulting in a Tie'  );

    }
    else if(playerAction == 'rock' && cpuAction == 'paper'){
        alert('Player Chose '+playerAction+' CPU Chose '+cpuAction+'\nCPU Wins!!!'  );
        cpuScore+=1;
        document.getElementById('humanScore').innerHTML = 'Player Score: '+playerScore;
        document.getElementById('cpuScore').innerHTML ='CPU Score '+ cpuScore;

    }
    else if(playerAction == 'rock' && cpuAction == 'scissors'){
        alert('Player Chose '+playerAction+' CPU Chose '+cpuAction+'\nPlayer Wins!!!'  );
        playerScore+=1;
        document.getElementById('humanScore').innerHTML = 'Player Score: '+playerScore;
        document.getElementById('cpuScore').innerHTML ='CPU Score '+ cpuScore;


    }
    else if(playerAction == 'paper' && cpuAction == 'rock'){
        alert('Player Chose '+playerAction+' CPU Chose '+cpuAction+'\nPlayer Wins!!!'  );
        playerScore+=1;
        document.getElementById('humanScore').innerHTML = 'Player Score: '+playerScore;
        document.getElementById('cpuScore').innerHTML ='CPU Score '+ cpuScore;


    }
    else if(playerAction == 'paper' && cpuAction == 'scissors'){
        alert('Player Chose '+playerAction+' CPU Chose '+cpuAction+'\CPU Wins!!!'  );
        cpuScore+=1;
        document.getElementById('humanScore').innerHTML = 'Player Score: '+playerScore;
        document.getElementById('cpuScore').innerHTML ='CPU Score '+ cpuScore;

    }
    else if(playerAction == 'scissors' && cpuAction == 'paper'){
        alert('Player Chose '+playerAction+' CPU Chose '+cpuAction+'\nPlayer Wins!!!'  );
        playerScore+=1;
        document.getElementById('humanScore').innerHTML = 'Player Score: '+playerScore;
        document.getElementById('cpuScore').innerHTML ='CPU Score '+ cpuScore;

    }
    else if(playerAction == 'scissors' && cpuAction == 'rock'){
        alert('Player Chose '+playerAction+' CPU Chose '+cpuAction+'\CPU Wins!!!'  );
        cpuScore+=1;
        document.getElementById('humanScore').innerHTML = 'Player Score: '+playerScore;
        document.getElementById('cpuScore').innerHTML ='CPU Score '+ cpuScore;
    }
    console.log(playerAction,cpuAction);
    
}

function cpuChoice(){
    var num = Math.floor(Math.random() * 3);
    return ['rock','paper','scissors'][num];
}


//Challenge 4: Change color of all the buttons 

//collect all the buttons
var allButtons = document.getElementsByClassName('btn');
console.log(allButtons);
var btnID = []
for(let i =0;i<allButtons.length;i++){
    console.log(allButtons[i].id);
    btnID.push(allButtons[i].id);
}


function buttonColorChange(btn){
    console.log(btn.value);
    for(let i = 0;i<allButtons.length;i++){
        if(btn.value=='red'){
            console.log('this is red');
            allButtons[i].style.backgroundColor = 'red';
        }
        else if(btn.value=='green'){
            console.log('this is red');
            allButtons[i].style.backgroundColor = 'green';
        }
        else if(btn.value=='yellow'){
            console.log('this is red');
            allButtons[i].style.backgroundColor = 'yellow';
        }
        else if(btn.value=='blue'){
            console.log('this is red');
            allButtons[i].style.backgroundColor = 'blue';
        }
        else if(btn.value=='reset'){
            console.log('this is red');
            allButtons[i].style.backgroundColor = 'white';
        }
        else if(btn.value=='random'){
            var num = Math.floor(Math.random() * 5);
            allButtons[i].style.backgroundColor = ['red','green','yellow','blue','white'][num];
        }
}};
