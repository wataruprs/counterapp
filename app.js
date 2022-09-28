const right_value = document.getElementById("right_value");
const wrong_value = document.getElementById("wrong_value");
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
    right_value.textContent = right_count;
    wrong_count = 0;
    wrong_value.textContent = wrong_count;
}


function score_view () {
    right_value.textContent = right_count;
    wrong_value.textContent = wrong_count;
    total.textContent = total_right_count + " - " + total_wrong_count;
    if (rule_selector.value === "normal") {
        score.textContent = right_count + " - " + wrong_count;
    } else if (rule_selector.value === "ny") {
        score.textContent = right_count - wrong_count;
    } else {
        alert("error");
    }
}
