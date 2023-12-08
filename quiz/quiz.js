let questionEl = document.getElementById("question");
let opt1 = document.getElementById("opt1");
let opt2 = document.getElementById("opt2");
let opt3 = document.getElementById("opt3");
let opt4 = document.getElementById("opt4");
let queNo = document.getElementById("queNo");
let errmsg = document.getElementById("errmsg");
let city1 = document.getElementById("city1");
let city2 = document.getElementById("city2");
let city3 = document.getElementById("city3");
let city4 = document.getElementById("city4");
let submitBtn = document.getElementById("submitBtn");
let nextBtn = document.getElementById("nextBtn");


let questions = {
    1: "1.Which of the following option is captial of India?",
    status1: false,
    2: "2.Which of the following option is capital of TamilNadu?",
    status2: false,
    3: "3.Which of the following option is union states?",
    status3: false,
    4: "4.Which of the following option is national animal?",
    status4: false,
    5: "5.Which of the following option is national bird",
    status5: false
}
let option = {
    1: ["Chennai", "Mumbai", "Delhi", "Kerala"],
    2: ["Coimbatore", "Trichy", "Madurai", "Chennai"],
    3: ["Goa", "Andra Pradesh", "Gujarat", "Maharastra"],
    4: ["Lion", "Tiger", "Cheetah", "Elephant"],
    5: ["Eagle", "parrot", "Peacock", "sparrow"]
}

let currentQueno = 1;
let preQue = 5;

function nextqueOptions(queno) {
    city1.textContent = option[queno][0];
    city2.textContent = option[queno][1];
    city3.textContent = option[queno][2];
    city4.textContent = option[queno][3];

    opt1.value = option[queno][0];
    opt2.value = option[queno][1];
    opt3.value = option[queno][2];
    opt4.value = option[queno][3];


    opt1.checked = false;
    opt2.checked = false;
    opt3.checked = false;
    opt4.checked = false;


}

function prequeOptions(queno) {
    city1.textContent = option[queno][0];
    city2.textContent = option[queno][1];
    city3.textContent = option[queno][2];
    city4.textContent = option[queno][3];


}

function result() {

}


function checkingForError(queno) {
    if (answer[queno] === "") {
        errmsg.textContent = "Please choose the options!!!";
    } else {
        queno += 1;
        if (queno === 6) {
            result();
        } else {
            nextquesDisplay(queno);
        }
    }
}


function nextquesDisplay(queno) {
    currentQueno = queno;
    if (currentQueno < 6) {
        let nextQue = currentQueno;
        questionEl.textContent = questions[nextQue];
        queNo.textContent = nextQue;
        errmsg.textContent = "";
        nextqueOptions(nextQue);
        console.log(typeof(queno));
        if (queno === 5) {
            submitBtn.classList.remove("button1");
            nextBtn.classList.add("button1");
        }
    }


}

function prevoiusDisplay() {
    preQue = parseInt(queNo.textContent) - 1;
    if (preQue > 0) {

        questionEl.textContent = questions[preQue];
        queNo.textContent = preQue;
        prequeOptions(preQue);
    }
}

let answer = {
    1: "",
    stat1: "",
    2: "",
    stat2: "",
    3: "",
    stat3: "",
    4: "",
    stat4: "",
    5: ""
}
let currentQuenoforAns = 0;
opt1.addEventListener("change", function(event) {
    currentQuenoforAns = queNo.textContent;
    //console.log(currentQuenoforAns);
    answer[currentQuenoforAns] = event.target.value;
    answer["stat" + currentQuenoforAns] = "opt1";
    //console.log(answer);
    opt1.checked = true;
});

opt2.addEventListener("change", function(event) {

    //console.log(currentQuenoforAns);
    currentQuenoforAns = queNo.textContent;
    answer["stat" + currentQuenoforAns] = "opt2";
    //console.log(currentQueno);
    answer[currentQuenoforAns] = event.target.value;

    //console.log(answer);
    opt2.checked = true;
});
opt3.addEventListener("change", function(event) {

    currentQuenoforAns = queNo.textContent;
    //console.log(currentQuenoforAns);
    answer["stat" + currentQuenoforAns] = "opt3";
    //console.log(currentQueno);
    answer[currentQuenoforAns] = event.target.value;
    //console.log(answer);
});
opt4.addEventListener("change", function(event) {

    currentQuenoforAns = queNo.textContent;
    //console.log(currentQuenoforAns);
    answer["stat" + currentQuenoforAns] = "opt4";
    answer[currentQuenoforAns] = event.target.value;
    opt4.checked = true;

    //console.log(answer);
});
nextBtn.onclick = function() {
    checkingForError(currentQueno);
};

submitBtn.onclick = function() {
    checkingForError(currentQueno);
    

}
