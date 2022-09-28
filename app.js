const right_btn = document.getElementById("right_btn");
const wrong_btn = document.getElementById("wrong_btn");
const total = document.getElementById("total");
const rule_selector = document.getElementById("rule_selector");
const score = document.getElementById("score");

let right_count = 0;
let wrong_count = 0;
let total_right_count = 0;
let total_wrong_count = 0;

function right_counter () {
    right_count ++;
    total_right_count ++;
}


function wrong_counter () {
    wrong_count ++;
    total_wrong_count ++;
}


function reset () {
    right_count = 0;
    wrong_count = 0;
}


function score_view () {
    right_btn.textContent = right_count;
    wrong_btn.textContent = wrong_count;
    total.textContent = total_right_count + " - " + total_wrong_count;
    if (rule_selector.value === "normal") {
        score.textContent = right_count + " - " + wrong_count;
    } else if (rule_selector.value === "ny") {
        score.textContent = right_count - wrong_count;
    } else {
        alert("error");
    }
}
