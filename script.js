let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newbtn = document.querySelector("#new");
let msgc = document.querySelector(".msgc");
let msg = document.querySelector("#msg");

let turnO =false;

const win =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


 const resetgame = () => {
    msgc.classList.add("hide");
    turnO = false;
    enableboxes();
   
 };




const disboxes = () => {
    for(let box of boxes){
        box.disabled = true;

    }
};



const enableboxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";

    }
};



 
boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        if(turnO){
             box.innerText = "O"
             turnO = false;

        }
        else{
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});



const showWinner = (winner) => {
    msg.innerText = `Winner is ${winner}`;
    msgc.classList.remove("hide");
    disboxes();
  
  };


  const draw = () => {
    msg.innerText = "match is draw"
    msgc.classList.remove("hide");
    disboxes();
  
  };




const checkWinner =() =>{
    for(let pattern of win){
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;
    
    if (val1 != "" &&val2 !="" && val3 != ""){
        if(val1=== val2 &&val2 ===val3){
           
            showWinner(val1);
            
        }
        
    } 

}
}



newbtn.addEventListener(("click"),resetgame);
reset.addEventListener("click",resetgame);
