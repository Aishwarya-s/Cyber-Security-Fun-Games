// Cybersecurity Fun Zone - Enhanced Game Logic

// Game data with all requested improvements
const gameData = {
  riddles: [
    {
      "riddle": "I'm a sneaky email, pretending to be real, but one click on me, and your data I steal. What am I?",
      "answer": "phishing",
      "hint": "I'm a common email scam that tricks people into revealing personal information."
    },
    {
      "riddle": "I'm like a magic tunnel, hiding your data's journey from start to end. What am I?",
      "answer": "vpn",
      "hint": "I create a secure, encrypted connection over the internet. Three letters."
    },
    {
      "riddle": "I sneak in quietly, demanding money in exchange for your own data. What am I?",
      "answer": "ransomware", 
      "hint": "I encrypt your files and demand payment to unlock them."
    },
    {
      "riddle": "I watch your data day and night, making sure it's safe from the wrong fight. What am I?",
      "answer": "antivirus",
      "hint": "I'm software that protects your computer from malicious programs."
    },
    {
      "riddle": "Like a secret code that only you and I know, scrambling data to and fro. What am I?",
      "answer": "encryption",
      "hint": "I turn readable data into unreadable code to protect it."
    },
    {
      "riddle": "I stand as a gatekeeper, deciding who may enter or leave. Protecting from digital arsonists, I provide relief. What am I?",
      "answer": "firewall",
      "hint": "I monitor and control incoming and outgoing network traffic."
    },
    {
      "riddle": "A false claim to be you, stealing your persona to pursue. What am I?",
      "answer": "identity theft",
      "hint": "I'm when someone pretends to be you to commit fraud."
    },
    {
      "riddle": "I am your secret keeper, complex or plain. Change me often, for safety's gain. What am I?",
      "answer": "password",
      "hint": "I'm the secret word or phrase you use to log into accounts."
    },
    {
      "riddle": "I'm a double lock on your door, something you have and something more. Passwords alone won't get you in, with me, security's a win. What am I?",
      "answer": "two factor authentication",
      "hint": "I require two different types of verification to log in. Also called 2FA."
    },
    {
      "riddle": "I come in emails, often unseen, promising treasures in a virtual scene. Click on my link, and you'll regret, your data's stolen, that's no threat? What attack am I?",
      "answer": "phishing attack",
      "hint": "I'm a specific type of email scam with malicious links."
    },
    {
      "riddle": "I'm software that hides inside, pretending to be your helpful guide. But when you run me, I take control, stealing data is my goal. What am I?",
      "answer": "trojan",
      "hint": "I'm malware disguised as legitimate software, like the famous wooden horse."
    },
    {
      "riddle": "I multiply like a virus, spreading through your network. I slow things down and cause chaos, what am I that makes tech panic?",
      "answer": "worm",
      "hint": "I'm self-replicating malware that spreads across networks without human intervention."
    },
    {
      "riddle": "I record every keystroke you make, capturing passwords and secrets you type. Hidden from view, I send data away. What am I that spies on your keyboard?",
      "answer": "keylogger",
      "hint": "I'm malicious software that records keystrokes to steal sensitive information."
    },
    {
      "riddle": "I'm a network of infected computers, controlled remotely like zombies in a horror movie. Together we launch attacks, what am I that creates digital armies?",
      "answer": "botnet",
      "hint": "I'm a collection of compromised computers controlled by cybercriminals for malicious activities."
    },
    {
      "riddle": "I appear as urgent messages or pop-ups, tricking you to act fast without thinking. Fear, urgency, and false authority are my tools. What manipulation technique am I?",
      "answer": "social engineering",
      "hint": "I'm a psychological manipulation technique used to trick people into divulging confidential information."
    }
  ],
  wordPuzzles: [
    {
      "word": "wifi",
      "symbols": "📶 📡 ☕ 🌐",
      "hint": "Four letters. Wireless internet connection."
    },
    {
      "word": "ddos", 
      "symbols": "🏹🏹🏹 ➡️ 🖥️ 💥",
      "hint": "Four letters. Attack that overwhelms servers with traffic."
    },
    {
      "word": "malware",
      "symbols": "🦠 💻 ☠️ 🚨",
      "hint": "Malicious software that harms your computer."
    },
    {
      "word": "phishing",
      "symbols": "🎣 📧 🎭 💰",
      "hint": "Eight letters. Deceptive emails trying to steal information."
    },
    {
      "word": "trojan",
      "symbols": "🐎 🎭 💻 🚪",
      "hint": "Six letters. Malware disguised as legitimate software."
    },
    {
      "word": "firewall",
      "symbols": "🧱 🔥 🚪 🛡️",
      "hint": "Eight letters. Network security barrier."
    },
    {
      "word": "encryption",
      "symbols": "🔒 🔑 📝 🔀",
      "hint": "Ten letters. Process of encoding data to protect it."
    },
    {
      "word": "spyware",
      "symbols": "👁️ 💻 📱 🕵️",
      "hint": "Seven letters. Software that secretly monitors your activities."
    },
    {
      "word": "botnet",
      "symbols": "🤖 🌐 ⚡ 🔗",
      "hint": "Six letters. Network of infected computers controlled remotely."
    },
    {
      "word": "keylogger",
      "symbols": "⌨️ 👀 📝 🔓",
      "hint": "Nine letters. Software that records every keystroke you make."
    }
  ],
  vulnerabilityScenarios: [
    {
      "title": "Office Workspace",
      "description": "A typical office environment with multiple security risks",
      "imageUrl": "https://pplx-res.cloudinary.com/image/upload/v1756905449/pplx_project_search_images/c805c1088e6257a195f6120eece4e19e1e1e6cdc.png",
      "vulnerabilities": [
        {"item": "Sticky note with password on laptop", "correct": true, "found": false},
        {"item": "Unlocked phone left unattended", "correct": true, "found": false},
        {"item": "Confidential papers visible on desk", "correct": true, "found": false},
        {"item": "Coffee cup on desk", "correct": false, "found": false}
      ]
    },
    {
      "title": "Coffee Shop Scene",
      "description": "Public workspace with multiple privacy and security concerns",
      "imageUrl": "https://pplx-res.cloudinary.com/image/upload/v1756905450/pplx_project_search_images/fd89894f831cd6de11eaf58c580f9c222d10c74c.png",
      "vulnerabilities": [
        {"item": "Using unsecured public WiFi", "correct": true, "found": false},
        {"item": "Person looking over shoulders (shoulder surfing)", "correct": true, "found": false},
        {"item": "Unattended laptop on table", "correct": true, "found": false},
        {"item": "Coffee shop menu board", "correct": false, "found": false}
      ]
    },
    {
      "title": "Home Office Setup",
      "description": "Remote work environment with webcam and document security issues",
      "imageUrl": "https://pplx-res.cloudinary.com/image/upload/v1756905450/pplx_project_search_images/a1f592d4af8f929aa877f8f6a337d537793570da.png",
      "vulnerabilities": [
        {"item": "Uncovered webcam during video calls", "correct": true, "found": false},
        {"item": "Sensitive work documents visible on screen", "correct": true, "found": false},
        {"item": "Personal items visible in background", "correct": false, "found": false},
        {"item": "Desk lamp in room", "correct": false, "found": false}
      ]
    }
  ],
  cardScenarios: [
    {
      "hackerCard": {
        "description": "I set up a fake Wi-Fi station to steal people's email and track them online.",
        "power": 4
      },
      "playerCards": [
        {"description": "I never use public wifi networks.", "power": 5},
        {"description": "I browse the web, but I never do any personal business on a public wifi network.", "power": 3},
        {"description": "I connect to any wifi network I can use in public.", "power": 1}
      ]
    },
    {
      "hackerCard": {
        "description": "I sent a fake email from your bank asking for your account details.",
        "power": 3
      },
      "playerCards": [
        {"description": "I checked the email address - the message didn't come from my bank.", "power": 5},
        {"description": "I never give out personal information in response to an email.", "power": 4},
        {"description": "I sent the details you asked for so you could check on my account.", "power": 1}
      ]
    },
    {
      "hackerCard": {
        "description": "I cracked your weak password in seconds.",
        "power": 3
      },
      "playerCards": [
        {"description": "I use a password manager to create strong, unique passwords for each account.", "power": 5},
        {"description": "I created a long password, but reuse it for several accounts.", "power": 3},
        {"description": "My password is my pet's name and birthdate.", "power": 2}
      ]
    },
    {
      "hackerCard": {
        "description": "I tricked you into downloading a malicious attachment from an email.",
        "power": 5
      },
      "playerCards": [
        {"description": "I scan all email attachments with antivirus software before opening.", "power": 5},
        {"description": "I only open attachments from people I know, but don't scan them.", "power": 3},
        {"description": "I open any email attachment as long as the email seems urgent.", "power": 2}
      ]
    },
    {
      "hackerCard": {
        "description": "I compromised your account through a brute force attack.",
        "power": 4
      },
      "playerCards": [
        {"description": "I use multi-factor authentication (MFA) on all my accounts.", "power": 5},
        {"description": "I have a strong password, but I don't use MFA.", "power": 4},
        {"description": "My password is simple, so I don't have trouble remembering it.", "power": 2}
      ]
    },
    {
      "hackerCard": {
        "description": "I hijacked your webcam and microphone to spy on you.",
        "power": 4
      },
      "playerCards": [
        {"description": "I always cover my webcam and disable the microphone when not in use.", "power": 5},
        {"description": "I use software to manage my webcam and microphone settings but don't physically cover them.", "power": 3},
        {"description": "I never think about securing my webcam or microphone.", "power": 1}
      ]
    },
    {
      "hackerCard": {
        "description": "I used a drive-by download to install malware while you visited an insecure website.",
        "power": 5
      },
      "playerCards": [
        {"description": "I keep my browser security settings high and only visit trusted websites.", "power": 5},
        {"description": "I visit a variety of websites, but I avoid downloading anything suspicious.", "power": 3},
        {"description": "I visit any website, as long as it looks interesting.", "power": 1}
      ]
    },
    {
      "hackerCard": {
        "description": "I launched a successful Man-in-the-Middle (MitM) attack on you while you were on public Wi-Fi.",
        "power": 4
      },
      "playerCards": [
        {"description": "I always use a VPN when connecting to public Wi-Fi networks.", "power": 5},
        {"description": "I avoid sensitive activities on public Wi-Fi but don't use a VPN.", "power": 3},
        {"description": "I frequently use public Wi-Fi for all my online activities without protection.", "power": 1}
      ]
    },
    {
      "hackerCard": {
        "description": "I infected your system with ransomware because you didn't have a backup of your data.",
        "power": 5
      },
      "playerCards": [
        {"description": "I regularly back up my data using secure, offsite storage solutions.", "power": 5},
        {"description": "I occasionally back up my important data but don't have a set schedule.", "power": 3},
        {"description": "I rarely back up my data and rely on my main system's storage.", "power": 1}
      ]
    },
    {
      "hackerCard": {
        "description": "I accessed your account because you disabled two-factor authentication (2FA).",
        "power": 4
      },
      "playerCards": [
        {"description": "I use two-factor authentication for all my important accounts.", "power": 5},
        {"description": "I use two-factor authentication for some accounts, but not all.", "power": 3},
        {"description": "I don't use two-factor authentication because it's inconvenient.", "power": 1}
      ]
    }
  ]
};

// Game state
let currentGame = 'riddle';
let riddleState = {
  currentIndex: 0,
  score: 0,
  answered: false
};

let wordState = {
  currentIndex: 0,
  score: 0,
  guessedLetters: [],
  currentWord: '',
  displayWord: ''
};

let vulnerabilityState = {
  currentIndex: 0,
  score: 0,
  foundVulnerabilities: new Set(),
  scenarioCompleted: false
};

let cardState = {
  currentIndex: 0,
  score: 0,
  selectedCard: null,
  battleCompleted: false
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  console.log('Initializing Cybersecurity Fun Zone...');
  
  // Wait a moment for DOM to be fully ready
  setTimeout(() => {
    // Set initial totals
    updateGameTotals();
    
    // Initialize all games
    initializeNavigation();
    initializeRiddleGame();
    initializeWordGame();
    initializeVulnerabilityGame();
    initializeCardGame();
    
    console.log('Application initialized successfully');
  }, 100);
});

function updateGameTotals() {
  const riddleTotalEl = document.getElementById('riddle-total');
  const wordTotalEl = document.getElementById('word-total');
  const vulnerabilityTotalEl = document.getElementById('vulnerability-total');
  const cardTotalEl = document.getElementById('card-total');
  
  if (riddleTotalEl) riddleTotalEl.textContent = gameData.riddles.length;
  if (wordTotalEl) wordTotalEl.textContent = gameData.wordPuzzles.length;
  if (vulnerabilityTotalEl) vulnerabilityTotalEl.textContent = gameData.vulnerabilityScenarios.length;
  if (cardTotalEl) cardTotalEl.textContent = gameData.cardScenarios.length;
}

// Navigation System
function initializeNavigation() {
  const navTabs = document.querySelectorAll('.nav__tab');
  
  navTabs.forEach(tab => {
    tab.addEventListener('click', function(e) {
      e.preventDefault();
      const gameType = this.getAttribute('data-game');
      console.log('Switching to game:', gameType);
      switchGame(gameType);
    });
  });
}

function switchGame(gameType) {
  console.log('Switching to game:', gameType);
  
  // Update active tab
  const navTabs = document.querySelectorAll('.nav__tab');
  navTabs.forEach(tab => {
    if (tab.getAttribute('data-game') === gameType) {
      tab.classList.add('nav__tab--active');
    } else {
      tab.classList.remove('nav__tab--active');
    }
  });
  
  // Update active game container
  const gameContainers = document.querySelectorAll('.game-container');
  gameContainers.forEach(container => {
    if (container.id === `${gameType}-game`) {
      container.classList.add('game-container--active');
    } else {
      container.classList.remove('game-container--active');
    }
  });
  
  currentGame = gameType;
}

// Riddle Game Logic - Enhanced with Play Again functionality
function initializeRiddleGame() {
  const submitBtn = document.getElementById('riddle-submit');
  const nextBtn = document.getElementById('riddle-next');
  const input = document.getElementById('riddle-input');
  const hintBtn = document.getElementById('riddle-hint');
  const revealBtn = document.getElementById('riddle-reveal');
  
  if (!submitBtn || !nextBtn || !input) {
    console.error('Missing riddle game elements', {submitBtn, nextBtn, input});
    return;
  }
  
  submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('Submit button clicked');
    checkRiddleAnswer();
  });
  
  nextBtn.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('Next button clicked');
    nextRiddle();
  });
  
  input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      console.log('Enter key pressed');
      checkRiddleAnswer();
    }
  });

  if (hintBtn) {
    hintBtn.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Hint button clicked');
      showRiddleHint();
    });
  }

  if (revealBtn) {
    revealBtn.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Reveal button clicked');
      revealRiddleAnswer();
    });
  }
  
  loadCurrentRiddle();
}

function loadCurrentRiddle() {
  const riddle = gameData.riddles[riddleState.currentIndex];
  const riddleTextEl = document.getElementById('riddle-text');
  const riddleCurrentEl = document.getElementById('riddle-current');
  const inputEl = document.getElementById('riddle-input');
  const feedbackEl = document.getElementById('riddle-feedback');
  const nextBtn = document.getElementById('riddle-next');
  const submitBtn = document.getElementById('riddle-submit');
  
  if (riddleTextEl) riddleTextEl.textContent = riddle.riddle;
  if (riddleCurrentEl) riddleCurrentEl.textContent = riddleState.currentIndex + 1;
  if (inputEl) {
    inputEl.value = '';
    inputEl.disabled = false;
  }
  if (feedbackEl) {
    feedbackEl.innerHTML = '';
    feedbackEl.className = 'feedback';
  }
  if (nextBtn) nextBtn.style.display = 'none';
  if (submitBtn) submitBtn.style.display = 'inline-flex';
  
  riddleState.answered = false;
  console.log('Loaded riddle:', riddle.riddle);
}

function showRiddleHint() {
  const riddle = gameData.riddles[riddleState.currentIndex];
  const feedback = document.getElementById('riddle-feedback');
  if (feedback) {
    feedback.innerHTML = `💡 Hint: ${riddle.hint}`;
    feedback.className = 'feedback';
    console.log('Showing hint:', riddle.hint);
  }
}

function revealRiddleAnswer() {
  const riddle = gameData.riddles[riddleState.currentIndex];
  const feedback = document.getElementById('riddle-feedback');
  if (feedback) {
    feedback.innerHTML = `👁️ Answer: ${riddle.answer}`;
    feedback.className = 'feedback';
    console.log('Revealing answer:', riddle.answer);
  }
  showNextRiddleButton();
  riddleState.answered = true;
}

function checkRiddleAnswer() {
  if (riddleState.answered) {
    console.log('Already answered this riddle');
    return;
  }
  
  const input = document.getElementById('riddle-input');
  const feedback = document.getElementById('riddle-feedback');
  
  if (!input || !feedback) {
    console.error('Missing riddle input or feedback elements');
    return;
  }
  
  const userAnswer = input.value.trim().toLowerCase();
  const correctAnswer = gameData.riddles[riddleState.currentIndex].answer.toLowerCase();
  
  console.log('User answer:', userAnswer, 'Correct answer:', correctAnswer);
  
  if (userAnswer === correctAnswer || userAnswer.replace(/\s+/g, '') === correctAnswer.replace(/\s+/g, '')) {
    riddleState.score++;
    feedback.innerHTML = '✅ Correct! Good job.';
    feedback.className = 'feedback feedback--success';
    
    const scoreEl = document.getElementById('riddle-score');
    if (scoreEl) scoreEl.textContent = riddleState.score;
    
    showNextRiddleButton();
    riddleState.answered = true;
    console.log('Correct answer! Score:', riddleState.score);
  } else {
    feedback.innerHTML = '❌ Try again.';
    feedback.className = 'feedback feedback--error';
    console.log('Wrong answer');
  }
}

function showNextRiddleButton() {
  const submitBtn = document.getElementById('riddle-submit');
  const nextBtn = document.getElementById('riddle-next');
  
  if (submitBtn) submitBtn.style.display = 'none';
  if (nextBtn) nextBtn.style.display = 'inline-flex';
}

function nextRiddle() {
  riddleState.currentIndex++;
  if (riddleState.currentIndex >= gameData.riddles.length) {
    console.log('All riddles completed');
    showGameComplete('riddle');
    return;
  }
  console.log('Loading next riddle:', riddleState.currentIndex + 1);
  loadCurrentRiddle();
}

// Word Game Logic - Enhanced with symbols only (no descriptions)
function initializeWordGame() {
  const submitBtn = document.getElementById('word-submit');
  const nextBtn = document.getElementById('word-next');
  const input = document.getElementById('word-input');
  const hintBtn = document.getElementById('word-hint');
  const revealBtn = document.getElementById('word-reveal');
  
  if (!submitBtn || !nextBtn || !input) {
    console.error('Missing word game elements');
    return;
  }
  
  submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    checkWordAnswer();
  });
  
  nextBtn.addEventListener('click', function(e) {
    e.preventDefault();
    nextWord();
  });
  
  input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      checkWordAnswer();
    }
  });

  if (hintBtn) {
    hintBtn.addEventListener('click', function(e) {
      e.preventDefault();
      showWordHint();
    });
  }

  if (revealBtn) {
    revealBtn.addEventListener('click', function(e) {
      e.preventDefault();
      revealWordAnswer();
    });
  }
  
  loadCurrentWord();
}

function loadCurrentWord() {
  const puzzle = gameData.wordPuzzles[wordState.currentIndex];
  wordState.currentWord = puzzle.word.toLowerCase();
  wordState.guessedLetters = [];
  
  const symbolsEl = document.getElementById('word-symbols');
  const currentEl = document.getElementById('word-current');
  const inputEl = document.getElementById('word-input');
  const feedbackEl = document.getElementById('word-feedback');
  const nextBtn = document.getElementById('word-next');
  const submitBtn = document.getElementById('word-submit');
  
  // Only show symbols, no description text
  if (symbolsEl) symbolsEl.innerHTML = puzzle.symbols;
  if (currentEl) currentEl.textContent = wordState.currentIndex + 1;
  if (inputEl) inputEl.value = '';
  if (feedbackEl) {
    feedbackEl.innerHTML = '';
    feedbackEl.className = 'feedback';
  }
  if (nextBtn) nextBtn.style.display = 'none';
  if (submitBtn) submitBtn.style.display = 'inline-flex';
  
  updateWordBlanks();
}

function showWordHint() {
  const puzzle = gameData.wordPuzzles[wordState.currentIndex];
  const feedback = document.getElementById('word-feedback');
  if (feedback) {
    feedback.innerHTML = `💡 Hint: ${puzzle.hint}`;
    feedback.className = 'feedback';
  }
}

function revealWordAnswer() {
  const puzzle = gameData.wordPuzzles[wordState.currentIndex];
  const feedback = document.getElementById('word-feedback');
  if (feedback) {
    feedback.innerHTML = `👁️ Answer: ${puzzle.word}`;
    feedback.className = 'feedback';
  }
  // Fill in all letters
  for (let letter of wordState.currentWord) {
    if (!wordState.guessedLetters.includes(letter)) {
      wordState.guessedLetters.push(letter);
    }
  }
  updateWordBlanks();
  showNextWordButton();
}

function updateWordBlanks() {
  const word = wordState.currentWord;
  let display = '';
  
  for (let i = 0; i < word.length; i++) {
    if (wordState.guessedLetters.includes(word[i]) || word[i] === ' ') {
      display += word[i] === ' ' ? ' ' : word[i];
    } else {
      display += '_';
    }
    if (i < word.length - 1) display += ' ';
  }
  
  const blanksEl = document.getElementById('word-blanks');
  if (blanksEl) blanksEl.textContent = display;
  
  wordState.displayWord = display.replace(/ /g, '');
}

function checkWordAnswer() {
  const input = document.getElementById('word-input');
  const feedback = document.getElementById('word-feedback');
  
  if (!input || !feedback) {
    console.error('Missing word input or feedback elements');
    return;
  }
  
  const userInput = input.value.trim().toLowerCase();
  
  if (userInput === wordState.currentWord) {
    // Correct full word guess
    wordState.score++;
    feedback.innerHTML = '✅ Correct! Well done.';
    feedback.className = 'feedback feedback--success';
    
    const scoreEl = document.getElementById('word-score');
    if (scoreEl) scoreEl.textContent = wordState.score;
    
    // Fill in all letters
    for (let letter of wordState.currentWord) {
      if (!wordState.guessedLetters.includes(letter)) {
        wordState.guessedLetters.push(letter);
      }
    }
    updateWordBlanks();
    showNextWordButton();
  } else if (userInput.length === 1) {
    // Single letter guess
    if (wordState.currentWord.includes(userInput)) {
      if (!wordState.guessedLetters.includes(userInput)) {
        wordState.guessedLetters.push(userInput);
        updateWordBlanks();
        
        // Check if word is complete
        if (!wordState.displayWord.includes('_')) {
          wordState.score++;
          feedback.innerHTML = '✅ Word complete! Great job.';
          feedback.className = 'feedback feedback--success';
          
          const scoreEl = document.getElementById('word-score');
          if (scoreEl) scoreEl.textContent = wordState.score;
          
          showNextWordButton();
        } else {
          feedback.innerHTML = '✅ Good letter!';
          feedback.className = 'feedback feedback--success';
        }
      } else {
        feedback.innerHTML = '⚠️ You already guessed that letter.';
        feedback.className = 'feedback';
      }
    } else {
      feedback.innerHTML = '❌ Letter not found.';
      feedback.className = 'feedback feedback--error';
    }
  } else {
    feedback.innerHTML = '❌ Try again or guess a single letter.';
    feedback.className = 'feedback feedback--error';
  }
  
  input.value = '';
}

function showNextWordButton() {
  const submitBtn = document.getElementById('word-submit');
  const nextBtn = document.getElementById('word-next');
  
  if (submitBtn) submitBtn.style.display = 'none';
  if (nextBtn) nextBtn.style.display = 'inline-flex';
}

function nextWord() {
  wordState.currentIndex++;
  if (wordState.currentIndex >= gameData.wordPuzzles.length) {
    showGameComplete('word');
    return;
  }
  loadCurrentWord();
}

// Vulnerability Game Logic - Enhanced with images and fixed scoring
function initializeVulnerabilityGame() {
  const nextBtn = document.getElementById('vulnerability-next');
  const resetBtn = document.getElementById('vulnerability-reset');
  
  if (!nextBtn || !resetBtn) {
    console.error('Missing vulnerability game elements');
    return;
  }
  
  nextBtn.addEventListener('click', function(e) {
    e.preventDefault();
    nextVulnerabilityScenario();
  });
  
  resetBtn.addEventListener('click', function(e) {
    e.preventDefault();
    resetVulnerabilityScene();
  });
  
  loadCurrentVulnerabilityScenario();
}

function loadCurrentVulnerabilityScenario() {
  const scenario = gameData.vulnerabilityScenarios[vulnerabilityState.currentIndex];
  vulnerabilityState.foundVulnerabilities = new Set();
  vulnerabilityState.scenarioCompleted = false;
  
  const titleEl = document.getElementById('scenario-title');
  const descriptionEl = document.getElementById('scenario-description');
  const imageEl = document.getElementById('scenario-img');
  const currentEl = document.getElementById('vulnerability-current');
  const feedbackEl = document.getElementById('vulnerability-feedback');
  const nextBtn = document.getElementById('vulnerability-next');
  
  if (titleEl) titleEl.textContent = scenario.title;
  if (descriptionEl) descriptionEl.textContent = scenario.description;
  if (imageEl) imageEl.src = scenario.imageUrl;
  if (currentEl) currentEl.textContent = vulnerabilityState.currentIndex + 1;
  if (feedbackEl) {
    feedbackEl.innerHTML = '';
    feedbackEl.className = 'feedback';
  }
  if (nextBtn) nextBtn.style.display = 'none';
  
  // Reset vulnerabilities found state
  scenario.vulnerabilities.forEach(vuln => vuln.found = false);
  
  createVulnerabilityScene(scenario);
}

function createVulnerabilityScene(scenario) {
  const scene = document.getElementById('vulnerability-scene');
  if (!scene) {
    console.error('Missing vulnerability scene element');
    return;
  }
  
  scene.innerHTML = '';
  
  scenario.vulnerabilities.forEach((vuln, index) => {
    const item = document.createElement('div');
    item.className = 'vulnerability-item';
    item.textContent = vuln.item;
    item.setAttribute('data-index', index);
    item.setAttribute('data-correct', vuln.correct);
    
    item.addEventListener('click', function() {
      handleVulnerabilityClick(this, vuln);
    });
    
    scene.appendChild(item);
  });
}

function handleVulnerabilityClick(element, vulnerability) {
  const index = element.getAttribute('data-index');
  
  if (vulnerabilityState.foundVulnerabilities.has(index)) {
    return; // Already clicked
  }
  
  const feedback = document.getElementById('vulnerability-feedback');
  vulnerabilityState.foundVulnerabilities.add(index);
  vulnerability.found = true;
  
  if (vulnerability.correct) {
    element.classList.add('vulnerability-item--correct');
    
    if (feedback) {
      feedback.innerHTML = '✅ You found a vulnerability!';
      feedback.className = 'feedback feedback--success';
    }
    
    // Check if all vulnerabilities found - FIXED SCORING: Only count once per scenario
    const scenario = gameData.vulnerabilityScenarios[vulnerabilityState.currentIndex];
    const totalCorrectVulns = scenario.vulnerabilities.filter(v => v.correct).length;
    const foundCorrectVulns = scenario.vulnerabilities.filter(v => v.correct && v.found).length;
    
    if (foundCorrectVulns === totalCorrectVulns && !vulnerabilityState.scenarioCompleted) {
      // Complete scenario - add 1 point for the entire scenario
      vulnerabilityState.score++;
      vulnerabilityState.scenarioCompleted = true;
      
      const scoreEl = document.getElementById('vulnerability-score');
      if (scoreEl) scoreEl.textContent = vulnerabilityState.score;
      
      setTimeout(() => {
        if (feedback) {
          feedback.innerHTML = '🎉 All vulnerabilities found! Great work!';
          feedback.className = 'feedback feedback--success';
        }
        const nextBtn = document.getElementById('vulnerability-next');
        if (nextBtn) nextBtn.style.display = 'inline-flex';
      }, 1500);
    }
  } else {
    element.classList.add('vulnerability-item--wrong');
    if (feedback) {
      feedback.innerHTML = '❌ Not a security vulnerability, try again.';
      feedback.className = 'feedback feedback--error';
    }
  }
}

function resetVulnerabilityScene() {
  const items = document.querySelectorAll('.vulnerability-item');
  items.forEach(item => {
    item.classList.remove('vulnerability-item--correct', 'vulnerability-item--wrong');
  });
  
  vulnerabilityState.foundVulnerabilities = new Set();
  vulnerabilityState.scenarioCompleted = false;
  
  // Reset found state in data
  const scenario = gameData.vulnerabilityScenarios[vulnerabilityState.currentIndex];
  scenario.vulnerabilities.forEach(vuln => vuln.found = false);
  
  const feedback = document.getElementById('vulnerability-feedback');
  const nextBtn = document.getElementById('vulnerability-next');
  
  if (feedback) {
    feedback.innerHTML = '';
    feedback.className = 'feedback';
  }
  if (nextBtn) nextBtn.style.display = 'none';
}

function nextVulnerabilityScenario() {
  vulnerabilityState.currentIndex++;
  if (vulnerabilityState.currentIndex >= gameData.vulnerabilityScenarios.length) {
    showGameComplete('vulnerability');
    return;
  }
  loadCurrentVulnerabilityScenario();
}

// Card Battle Game Logic - Enhanced with hidden power values
function initializeCardGame() {
  const nextBtn = document.getElementById('card-next');
  
  if (!nextBtn) {
    console.error('Missing card game elements');
    return;
  }
  
  nextBtn.addEventListener('click', function(e) {
    e.preventDefault();
    nextCardScenario();
  });
  
  loadCurrentCardScenario();
}

function loadCurrentCardScenario() {
  const scenario = gameData.cardScenarios[cardState.currentIndex];
  cardState.selectedCard = null;
  cardState.battleCompleted = false;
  
  const hackerDescEl = document.getElementById('hacker-description');
  const hackerPowerEl = document.getElementById('hacker-power');
  const currentEl = document.getElementById('card-current');
  const battleResultEl = document.getElementById('battle-result');
  const nextBtn = document.getElementById('card-next');
  
  if (hackerDescEl) hackerDescEl.textContent = scenario.hackerCard.description;
  if (hackerPowerEl) {
    hackerPowerEl.classList.add('hidden');
    hackerPowerEl.textContent = `Power: ${scenario.hackerCard.power}`;
  }
  if (currentEl) currentEl.textContent = cardState.currentIndex + 1;
  if (battleResultEl) battleResultEl.innerHTML = 'Choose your defense strategy below:';
  if (nextBtn) nextBtn.style.display = 'none';
  
  createPlayerCards(scenario);
}

function createPlayerCards(scenario) {
  const playerCardsEl = document.getElementById('player-cards');
  if (!playerCardsEl) {
    console.error('Missing player cards element');
    return;
  }
  
  playerCardsEl.innerHTML = '';
  
  scenario.playerCards.forEach((card, index) => {
    const cardEl = document.createElement('div');
    cardEl.className = 'player-card';
    cardEl.setAttribute('data-index', index);
    cardEl.setAttribute('data-power', card.power);
    
    cardEl.innerHTML = `
      <p>${card.description}</p>
      <div class="card-power hidden">Power: ${card.power}</div>
    `;
    
    cardEl.addEventListener('click', function() {
      selectPlayerCard(this, index, card);
    });
    
    playerCardsEl.appendChild(cardEl);
  });
}

function selectPlayerCard(element, index, card) {
  if (cardState.battleCompleted) return;
  
  // Remove previous selection
  const allCards = document.querySelectorAll('.player-card');
  allCards.forEach(c => c.classList.remove('player-card--selected'));
  
  // Select current card
  element.classList.add('player-card--selected');
  cardState.selectedCard = { index, card };
  
  // Reveal power values
  const playerPowerEl = element.querySelector('.card-power');
  const hackerPowerEl = document.getElementById('hacker-power');
  
  if (playerPowerEl) playerPowerEl.classList.remove('hidden');
  if (hackerPowerEl) hackerPowerEl.classList.remove('hidden');
  
  // Show battle result
  setTimeout(() => {
    showBattleResult();
  }, 1000);
}

function showBattleResult() {
  if (!cardState.selectedCard) return;
  
  const scenario = gameData.cardScenarios[cardState.currentIndex];
  const playerPower = cardState.selectedCard.card.power;
  const hackerPower = scenario.hackerCard.power;
  
  const battleResultEl = document.getElementById('battle-result');
  const nextBtn = document.getElementById('card-next');
  
  if (playerPower >= hackerPower) {
    // Player wins
    cardState.score++;
    if (battleResultEl) {
      battleResultEl.innerHTML = `
        <div style="color: var(--cyber-green); font-size: var(--font-size-xl); margin-bottom: var(--space-8);">
          🛡️ Defense Successful! 🛡️
        </div>
        <div style="color: var(--cyber-text);">
          Your defense (Power: ${playerPower}) defeated the attack (Power: ${hackerPower})!
        </div>
      `;
    }
    
    const scoreEl = document.getElementById('card-score');
    if (scoreEl) scoreEl.textContent = cardState.score;
  } else {
    // Player loses
    if (battleResultEl) {
      battleResultEl.innerHTML = `
        <div style="color: var(--cyber-red); font-size: var(--font-size-xl); margin-bottom: var(--space-8);">
          💥 Attack Successful! 💥
        </div>
        <div style="color: var(--cyber-text);">
          The attack (Power: ${hackerPower}) was stronger than your defense (Power: ${playerPower}).
        </div>
      `;
    }
  }
  
  cardState.battleCompleted = true;
  if (nextBtn) nextBtn.style.display = 'inline-flex';
}

function nextCardScenario() {
  cardState.currentIndex++;
  if (cardState.currentIndex >= gameData.cardScenarios.length) {
    showGameComplete('card');
    return;
  }
  loadCurrentCardScenario();
}

// Game completion with Play Again functionality
function showGameComplete(gameType) {
  const containers = {
    riddle: document.getElementById('riddle-game'),
    word: document.getElementById('word-game'),
    vulnerability: document.getElementById('vulnerability-game'),
    card: document.getElementById('card-game')
  };
  
  const scores = {
    riddle: riddleState.score,
    word: wordState.score,
    vulnerability: vulnerabilityState.score,
    card: cardState.score
  };
  
  const totals = {
    riddle: gameData.riddles.length,
    word: gameData.wordPuzzles.length,
    vulnerability: gameData.vulnerabilityScenarios.length,
    card: gameData.cardScenarios.length
  };
  
  const container = containers[gameType];
  if (!container) return;
  
  const gameContent = container.querySelector('.game-content');
  if (!gameContent) return;
  
  gameContent.innerHTML = `
    <div style="text-align: center; padding: 40px;">
      <h3 style="color: var(--cyber-green); font-size: var(--font-size-3xl); margin-bottom: 20px;">🎉 Game Complete!</h3>
      <p style="font-size: var(--font-size-xl); color: var(--cyber-blue); margin-bottom: 15px;">Final Score: ${scores[gameType]} / ${totals[gameType]}</p>
      <p style="font-size: var(--font-size-lg); color: var(--cyber-text); margin-bottom: 30px;">${getScoreMessage(scores[gameType], totals[gameType])}</p>
      <button class="btn btn--primary" onclick="restartGame('${gameType}')">Play Again</button>
    </div>
  `;
}

function getScoreMessage(score, total) {
  const percentage = (score / total) * 100;
  if (percentage === 100) return "Perfect! You're a cybersecurity expert! 🔒";
  if (percentage >= 80) return "Excellent work! You have strong cybersecurity knowledge! 🛡️";
  if (percentage >= 60) return "Good job! Keep learning about cybersecurity! 📚";
  return "Keep practicing! Cybersecurity knowledge takes time to develop! 💪";
}

function restartGame(gameType) {
  console.log('Restarting game:', gameType);
  
  // Reset game state completely
  switch(gameType) {
    case 'riddle':
      riddleState = { currentIndex: 0, score: 0, answered: false };
      const riddleScore = document.getElementById('riddle-score');
      if (riddleScore) riddleScore.textContent = '0';
      initializeRiddleGame();
      break;
    case 'word':
      wordState = { currentIndex: 0, score: 0, guessedLetters: [], currentWord: '', displayWord: '' };
      const wordScore = document.getElementById('word-score');
      if (wordScore) wordScore.textContent = '0';
      initializeWordGame();
      break;
    case 'vulnerability':
      vulnerabilityState = { currentIndex: 0, score: 0, foundVulnerabilities: new Set(), scenarioCompleted: false };
      const vulnScore = document.getElementById('vulnerability-score');
      if (vulnScore) vulnScore.textContent = '0';
      initializeVulnerabilityGame();
      break;
    case 'card':
      cardState = { currentIndex: 0, score: 0, selectedCard: null, battleCompleted: false };
      const cardScore = document.getElementById('card-score');
      if (cardScore) cardScore.textContent = '0';
      initializeCardGame();
      break;
  }
}