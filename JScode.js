function sectionICheck() {

  var correct = 0;
  var q1 = document.S1_quiz.S1_q1.value;
  var q2 = document.S1_quiz.S1_q2.value;
  var q3 = document.S1_quiz.S1_q3.value;
  var result = document.getElementById('Result_S1_quiz');
  var quiz = document.getElementById('S1_quiz');

  if (q1 == "Series") correct++;
  if (q2 == "Parallel") correct++;
  if (q3 == "500V") correct++;

  quiz.style.display = "none";
  result.style.display = "block";
  result.style.fontSize = "4rem";
  result.style.backgroundColor = "lightgray";
  result.style.border = "3px solid #3b3b4f";
  result.style.paddingTop = "10rem";
  result.style.height = "20rem";

  if (correct == 3) {
    result.textContent = 'Great work! You answered all questions correctly!';
    result.style.color = "darkred";
  } else {
    result.textContent = 'You answered ' + correct + '/3 correctly. Please review and redo the Quiz!';
    result.style.color = "darkred";
  }
}

function Results_Clicked() {
  var result_text = document.getElementById('Result_S1_quiz');
  var quiz = document.getElementById('S1_quiz');
  result_text.style.display = "none";
  quiz.style.display = 'block';
}


function sectionIICheck() {

  var correct = 0;
  var q1 = document.S2_quiz.S2_q1.value;
  var q2 = document.S2_quiz.S2_q2.value;
  var q3 = document.S2_quiz.S2_q3.value;
  var result = document.getElementById('Result_S2_quiz');
  var quiz = document.getElementById('S2_quiz');

  if (q1 == "Voltage") correct++;
  if (q2 == "4V") correct++;
  if (q3 == "4V,6V") correct++;

  quiz.style.display = "none";
  result.style.display = "block";
  result.style.fontSize = "4rem";
  result.style.backgroundColor = "lightgray";
  result.style.border = "3px solid #3b3b4f";
  result.style.paddingTop = "10rem";
  result.style.height = "20rem";

  if (correct == 3) {
    result.textContent = 'Great work! You answered all questions correctly!';
    result.style.color = "darkred";
  } else {
    result.textContent = 'You answered ' + correct + '/3 correctly. Please review and redo the Quiz!';
    result.style.color = "darkred";
  }
}

function Results_Clicked_S2() {
  var result_text = document.getElementById('Result_S2_quiz');
  var quiz = document.getElementById('S2_quiz');
  result_text.style.display = "none";
  quiz.style.display = 'block';
}


function sectionIIICheck() {

  var correct = 0;
  var q1 = document.S3_quiz.S3_q1.value;
  var q2 = document.S3_quiz.S3_q2.value;
  var q3 = document.S3_quiz.S3_q3.value;
  var result = document.getElementById('Result_S3_quiz');
  var quiz = document.getElementById('S3_quiz');

  if (q1 == "i1+i5=i2+i3+i4") correct++;
  if (q2 == "0.33A") correct++;
  if (q3 == "Current") correct++;

  quiz.style.display = "none";
  result.style.display = "block";
  result.style.fontSize = "4rem";
  result.style.backgroundColor = "lightgray";
  result.style.border = "3px solid #3b3b4f";
  result.style.paddingTop = "10rem";
  result.style.height = "20rem";

  if (correct == 3) {
    result.textContent = 'Great work! You answered all questions correctly!';
    result.style.color = "darkred";
  } else {
    result.textContent = 'You answered ' + correct + '/3 correctly. Please review and redo the Quiz!';
    result.style.color = "darkred";
  }
}

function Results_Clicked_S3() {
  var result_text = document.getElementById('Result_S3_quiz');
  var quiz = document.getElementById('S3_quiz');
  result_text.style.display = "none";
  quiz.style.display = 'block';
}


function sectionIVCheck() {

  var correct = 0;
  var q1 = document.S4_quiz.S4_q1.value;
  var q2 = document.S4_quiz.S4_q2.value;
  var q3 = document.S4_quiz.S4_q3.value;
  var result = document.getElementById('Result_S4_quiz');
  var quiz = document.getElementById('S4_quiz');

  if (q1 == "P-N Junction") correct++;
  if (q2 == "True") correct++;
  if (q3 == "1.5 eV") correct++;

  quiz.style.display = "none";
  result.style.display = "block";
  result.style.fontSize = "4rem";
  result.style.backgroundColor = "lightgray";
  result.style.border = "3px solid #3b3b4f";
  result.style.paddingTop = "10rem";
  result.style.height = "20rem";

  if (correct == 3) {
    result.textContent = 'Great work! You answered all questions correctly!';
    result.style.color = "darkred";
  } else {
    result.textContent = 'You answered ' + correct + '/3 correctly. Please review and redo the Quiz!';
    result.style.color = "darkred";
  }
}

function Results_Clicked_S4() {
  var result_text = document.getElementById('Result_S4_quiz');
  var quiz = document.getElementById('S4_quiz');
  result_text.style.display = "none";
  quiz.style.display = 'block';
}