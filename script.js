let count = 1;

let para = document.getElementById("counter-value");
para.textContent = `Your Current Count is : ${count}`;

let dcrBtn = document.getElementById("decrement-btn");
let incBtn = document.getElementById("increment-btn");
let clearBtn = document.getElementById("clear-btn");
// console.log(clearBtn);

incBtn.addEventListener("click", () => {
    count++;
    para.textContent = `Your Current Count is : ${count}`;
    dcrBtn.disabled = false;
    document.getElementById("error").textContent = "";
    clearBtn.style.display = "inline";
});

dcrBtn.addEventListener("click", () => {
    count--;
    para.textContent = `Your Current Count is : ${count}`;
    if(count === 0){
        dcrBtn.disabled = true;
        dcrBtn.style.backgroundColor = "#add8e6";
        document.getElementById("error").textContent = `Error : Cannot go below 0`;
        clearBtn.style.display = "none";
    }
})

clearBtn.addEventListener("click", () => {
    count = 0;
    para.textContent = `Your Current Count is : 0`;
    clearBtn.style.display = "none";
    dcrBtn.disabled = true;
    dcrBtn.style.backgroundColor = "#add8e6";
    document.getElementById("error").textContent = `Error: Cannot go below 0`;
});