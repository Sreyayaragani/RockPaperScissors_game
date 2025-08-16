let userscore = 0;
let compscore = 0;

const button = document.querySelector("button");
const msg=document.querySelector("#msg");
const choices = document.querySelectorAll(".choice") ;
const userScorep=document.querySelector("#user-score");
const compScorep=document.querySelector("#comp-score");



const getCompChoice = () =>{
    const options=["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = (userChoice)=>{
    msg.innerText=`game was draw . Both choosed ${userChoice}`;
    msg.style.background="#081b31";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userscore++;
        userScorep.innerText = userscore;
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.background="green";
    }
    else{
        compscore++;
        compScorep.innerText = compscore;
        msg.innerText=`You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.background="red";
    }
}

const playGame =(userChoice)=>{
    console.log("user Choice = ",userChoice);
    //generate computer choice
    const compChoice= getCompChoice();
    console.log("comp Choice = ",compChoice);
    if(userChoice == compChoice){
        drawGame(userChoice);
    }
    else{
        let userWin = true;
        if(userChoice ==="rock")
        {
            userWin = compChoice === "paper"?false:true;
        }
        else if (userChoice === "paper")
        {
            userWin = compChoice === "scissor"?false:true;
        }
        else{
            userWin = compChoice === "rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{ 
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})


button.addEventListener("click",()=>{
    userscore = 0;
    compscore = 0;
    userScorep.innerText = 0;
    compScorep.innerText = 0;
    msg.innerText = "Pick your move";
})