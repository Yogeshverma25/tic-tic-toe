let btn1=document.querySelector(".btn1");
let boxs=document.querySelectorAll(".box");
let msg=document.querySelector(".msg-container");
let btn2=document.querySelector("#new-btn");
let p=document.querySelector("#msg");


let turnO=true;     
let winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],  
]

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msg.classList.add("hide");
}

const disabledBoxes = () => {
    for (let box of boxs) {
        box.style.pointerEvents = "none";
    }
}

// const abledBoxes = () => {
//     for (let box of boxs) {
//         box.style.pointerEvents = "visible";
//     }
// }

const enableBoxes=()=>{
    for(let box of boxs){
    box.disabled=false;
    box.innerText="";
    }
}

const showWinner=(winner)=>{
    p.innerText=`Congratulations! Winner is ${winner}`;
    msg.classList.remove("hide");
    disabledBoxes();
}


boxs.forEach((box)=>{
    box.addEventListener('click',()=>{
        console.log("You are clicked")
        if(turnO){
            box.innerText="O";
            turnO=false;       
        }
        else{
            box.innerText="X";   
            turnO=true;
        }

        // if(box.innerText=="O"){
        //     box.style.color="pink";
        // }
        // else{
        //     box.style.color="black";
        // }
        box.classList.add("disabled");
        box.style.pointerEvents = "none";
        box.style.color="black";
        box.style.fontSize="55px"
        box.style.display="flex";
        box.style.alignItems="center";
        box.style.justifyContent="center";
        box.style.cursor="pointer";
        checkwinner();
    })

})


// btn1.addEventListener("click",resetGame);
    // alert("Game is restarted");
    // console.log("Game is restarted");
    // gameRestart= true;
    // btn1.forEach(box=>{
    //     box.innerText="none";
    //     gameRestart=true;
    // })



let checkwinner = () => {
    for (let pattern of winPattern) {
        let pas1val = boxs[pattern[0]].innerText;
        let pas2val = boxs[pattern[1]].innerText;
        let pas3val = boxs[pattern[2]].innerText;

        if (pas1val != "" && pas2val != "" && pas3val != "") {
            if (pas1val === pas2val && pas2val === pas3val && pas3val===pas1val) {
                console.log(`Winner is ${pas1val}`);
                  showWinner(pas1val);   
            }
        }
    }
}

// btn1.onclick=()=>{
//     console.log("tan")
// }

btn2.addEventListener("click",resetGame);
btn1.addEventListener("click",enableBoxes);
 

// const ableBoxes=()=>{
//     box.disabled=true;
//      if(turnO){
//             box.innerText="O";
//             turnO=false;
            
//         }
//         else{
//             box.innerText="X";
//             turnO=true;
//         }
// }
// ableBoxes();

        