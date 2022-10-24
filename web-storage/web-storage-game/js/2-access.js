// Mengakses Item Storage
//inisialisasi semua nilai field pada dokumen yang menggunakan nilai dari web storage
sessionUserAttemptsField.innerText = sessionStorage.getItem(
  sessionUserAttemptsKey
);
localTotalVictoryField.innerText = localStorage.getItem(localTotalVictoryKey);
localMaximumAttemptField.innerText = localStorage.getItem(
  localMaximumAttemptsKey
);

// Memodifikasi Item Storage
playButton.addEventListener("click", function () {
  sessionStorage.setItem(sessionAnswerKey, getAnswer());
  sessionStorage.setItem(sessionUserIsPlayingKey, true);
  beforeGameDisplay.setAttribute("hidden", true);
  duringGameDisplay.removeAttribute("hidden");
});

answerButton1.addEventListener("click", function () {
  sessionUserAnswerField.innerText += "1";
  if (sessionUserAnswerField.innerText.length == 3) {
    checkAnswer(sessionUserAnswerField.innerText);
  }
});

answerButton2.addEventListener("click", function () {
  sessionUserAnswerField.innerText += "2";
  if (sessionUserAnswerField.innerText.length == 3) {
    checkAnswer(sessionUserAnswerField.innerText);
  }
});

answerButton3.addEventListener("click", function () {
  sessionUserAnswerField.innerText += "3";
  if (sessionUserAnswerField.innerText.length == 3) {
    checkAnswer(sessionUserAnswerField.innerText);
  }
});

function checkAnswer(userGuess) {
  const answer = sessionStorage.getItem(sessionAnswerKey);
  if (userGuess == answer) {
    duringGameDisplay.setAttribute("hidden", true);
    afterGameDisplay.removeAttribute("hidden");
    sessionTrueAnswerField.innerText = answer;
    updateScore();
  } else {
    const previousAttemptAmount = parseInt(
      sessionStorage.getItem(sessionUserAttemptsKey)
    );
    sessionStorage.setItem(sessionUserAttemptsKey, previousAttemptAmount + 1);
    sessionUserAttemptsField.innerText = sessionStorage.getItem(
      sessionUserAttemptsKey
    );
    sessionUserAnswerField.innerText = "";
    sessionUserWrongAnswerField.innerText = userGuess;
  }
}

function updateScore() {
  const sessionAttemptsValue = parseInt(
    sessionStorage.getItem(sessionUserAttemptsKey)
  );
  const localAttemptsValue = parseInt(
    localStorage.getItem(localMaximumAttemptsKey)
  );
  if (sessionAttemptsValue > localAttemptsValue) {
    localStorage.setItem(localMaximumAttemptsKey, sessionAttemptsValue);
    localMaximumAttemptField.innerText = sessionAttemptsValue;
  }
  const previousTotalVictoryAmount = parseInt(
    localStorage.getItem(localTotalVictoryKey)
  );
  localStorage.setItem(localTotalVictoryKey, previousTotalVictoryAmount + 1);
  localTotalVictoryField.innerText = localStorage.getItem(localTotalVictoryKey);
}

window.addEventListener("beforeunload", function () {
  sessionUserAnswerField.innerText = "";
  sessionUserWrongAnswerField.innerText = "";
  sessionStorage.setItem(sessionUserAttemptsKey, 0);
  sessionUserAttemptsField.innerText = sessionStorage.getItem(
    sessionUserAttemptsKey
  );
});

playButton.addEventListener("click", function () {
  sessionStorage.setItem(sessionAnswerKey, getAnswer());
  beforeGameDisplay.setAttribute("hidden", true);
  duringGameDisplay.removeAttribute("hidden");
});
