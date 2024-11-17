let boxes= document.querySelectorAll(".box");
let reset= document.querySelector("#rstbtn");

let winbox= document.querySelector("#msgbox");
let message= document.querySelector("#winmsg");
let newgame= document.querySelector("newgamebtn");

let winpattern= [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let turnO= true;

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turnO){
            box.innerText= "O";
            turnO= false;
        }
        else{
            box.innerText= "X";
            turnO= true;
        }
        box.disabled= true;

        checkwinner();
    });
    
});

const checkwinner= ()=>{
    for(pattern of winpattern){
        pos1= boxes[pattern[0]].innerText;
        pos2= boxes[pattern[1]].innerText;
        pos3= boxes[pattern[2]].innerText;

        if(pos1!= "" && pos2!= "" && pos3!= ""){
            if(pos1=== pos2 && pos2=== pos3){
                
                showwinner(pos1);
                boxes[pattern[0]].classList.add("lneThrough")
                boxes[pattern[1]].classList.add("lneThrough")
                boxes[pattern[2]].classList.add("lneThrough")
            };
        };
        
    };
    
};

const showwinner=(winner)=>{
    disableboxes();
    winbox.classList.remove("hide");
    message.innerText= `Winner is ${winner}`
};

disableboxes=()=>{
    for(box of boxes){
        box.disabled= true;
    }
}

enableboxes=()=>{
    for(box of boxes){
        box.disabled= false;
        box.innerText="";
    }
    winbox.classList.add("hide");
    turnO=true;
    
}

newgamebtn.addEventListener("click", enableboxes);
rstbtn.addEventListener("click", enableboxes);



