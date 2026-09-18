// ==========================================
// פלקס בוקסינג - מנוע המשחק (script.js)
// ==========================================

// הגדרת שלבי המשחק בהתאם לדרישות המטלה
const levels = [
  {
    id: 1,
    title: "שלב 1: מכה במרכז הזירה",
    instructions: "ברוכים הבאים לזירה! סדרו את כפפת האיגרוף במרכז הזירה אופקית כדי לפגוע בשק האיגרוף.",
    controls: ["justify-content"],
    targetSolution: {
      "justify-content": ["center", "space-around", "space-evenly"]
    },
    items: [{ id: 1, color: "red" }],
    targetStyle: {
      "justify-content": "center",
      "align-items": "flex-start",
      "flex-direction": "row"
    }
  },
  {
    id: 2,
    title: "שלב 2: מכה אנכית לתחתית",
    instructions: "כוונו את כפפת האיגרוף לתחתית הזירה אנכית כדי לפגוע בשק האיגרוף הנמוך.",
    controls: ["align-items"],
    targetSolution: {
      "align-items": "flex-end"
    },
    items: [{ id: 1, color: "red" }],
    targetStyle: {
      "justify-content": "flex-start",
      "align-items": "flex-end",
      "flex-direction": "row"
    }
  },
  {
    id: 3,
    title: "שלב 3: סידור בטור",
    instructions: "השתמשו ב-flex-direction כדי לסדר את 2 הכפפות בטור מלמעלה למטה.",
    controls: ["flex-direction"],
    targetSolution: {
      "flex-direction": "column"
    },
    items: [
      { id: 1, color: "red" },
      { id: 2, color: "blue" }
    ],
    targetStyle: {
      "flex-direction": "column",
      "justify-content": "flex-start",
      "align-items": "flex-start"
    }
  },
  {
    id: 4,
    title: "שלב 4: מנוף משולב (פינה ימנית תחתונה)",
    instructions: "שלבו בין justify-content ל-align-items כדי להביא את הכפפות לפינה הימנית התחתונה של הזירה.",
    controls: ["justify-content", "align-items"],
    targetSolution: {
      "justify-content": "flex-end",
      "align-items": "flex-end"
    },
    items: [
      { id: 1, color: "red" },
      { id: 2, color: "blue" }
    ],
    targetStyle: {
      "justify-content": "flex-end",
      "align-items": "flex-end",
      "flex-direction": "row"
    }
  },
  {
    id: 5,
    title: "שלב 5: קומבו מנצח (טור במרכז)",
    instructions: "השתמשו בשילוב של flex-direction, justify-content ו-align-items כדי למרכז טור של כפפות בדיוק באמצע הזירה!",
    controls: ["flex-direction", "justify-content", "align-items"],
    targetSolution: {
      "flex-direction": "column",
      "justify-content": "center",
      "align-items": "center"
    },
    items: [
      { id: 1, color: "red" },
      { id: 2, color: "blue" }
    ],
    targetStyle: {
      "flex-direction": "column",
      "justify-content": "center",
      "align-items": "center"
    }
  },
  {
    id: 6,
    title: "שלב 6: פיזור רוחבי (space-between)",
    instructions: "השתמשו ב-justify-content: space-between וב-align-items: center כדי לפזר את 3 הכפפות במרווח שווה בין הקצוות במרכז האנכי של הזירה.",
    controls: ["justify-content", "align-items"],
    targetSolution: {
      "justify-content": "space-between",
      "align-items": "center"
    },
    items: [
      { id: 1, color: "red" },
      { id: 2, color: "blue" },
      { id: 3, color: "green" }
    ],
    targetStyle: {
      "justify-content": "space-between",
      "align-items": "center",
      "flex-direction": "row"
    }
  },
  {
    id: 7,
    title: "שלב 7: איגרוף הפוך (row-reverse)",
    instructions: "סדרו את הכפפות בסדר הפוך מימין לשמאל באמצעות flex-direction: row-reverse ופזרו אותן במרווחים שווים עם justify-content: space-around!",
    controls: ["flex-direction", "justify-content"],
    targetSolution: {
      "flex-direction": "row-reverse",
      "justify-content": "space-around"
    },
    items: [
      { id: 1, color: "red" },
      { id: 2, color: "blue" },
      { id: 3, color: "green" }
    ],
    targetStyle: {
      "flex-direction": "row-reverse",
      "justify-content": "space-around",
      "align-items": "flex-start"
    }
  },
  {
    id: 8,
    title: "שלב 8: טור הפוך ואנכי (column-reverse)",
    instructions: "סדרו את הכפפות בטור הפוך מלמטה למעלה (column-reverse), פזרו אותן במרווח שווה (space-between) ומרכזו אותן לרוחב (center)!",
    controls: ["flex-direction", "justify-content", "align-items"],
    targetSolution: {
      "flex-direction": "column-reverse",
      "justify-content": "space-between",
      "align-items": "center"
    },
    items: [
      { id: 1, color: "red" },
      { id: 2, color: "blue" },
      { id: 3, color: "green" }
    ],
    targetStyle: {
      "flex-direction": "column-reverse",
      "justify-content": "space-between",
      "align-items": "center"
    }
  },
  {
    id: 9,
    title: "שלב 9: נוקאאוט בגלישה (flex-wrap)",
    instructions: "ישנן 7 כפפות בזירה! השתמשו ב-flex-wrap: wrap וב-justify-content: center כדי לגרום לכפפות לגלוש לשורה שנייה ולהתמרכז בזירה!",
    controls: ["flex-wrap", "justify-content"],
    targetSolution: {
      "flex-wrap": "wrap",
      "justify-content": "space-evenly",
    },
    items: [
      { id: 1, color: "red" },
      { id: 2, color: "blue" },
      { id: 3, color: "green" },
      { id: 4, color: "yellow" },
      { id: 5, color: "purple" },
      { id: 6, color: "orange" },
      { id: 7, color: "red" }
    ],
    targetStyle: {
      "flex-wrap": "wrap",
      "justify-content": "space-evenly",
    }
  },
  {
    id: 10,
    title: "שלב 10: קרב האליפות - מאסטר Flexbox!",
    instructions: "האתגר הפינאלי! סדרו 6 כפפות בזירה. עליכם לשלב 4 מאפיינים בו-זמנית: flex-direction: column-reverse, flex-wrap: wrap-reverse, justify-content: space-between ו-align-content: space-around!",
    controls: ["flex-direction", "flex-wrap", "justify-content", "align-content"],
    targetSolution: {
      "flex-direction": "column-reverse",
      "flex-wrap": "wrap-reverse",
      "justify-content": "space-between",
      "align-content": "space-around"
    },
    items: [
      { id: 1, color: "red" },
      { id: 2, color: "blue" },
      { id: 3, color: "green" },
      { id: 4, color: "yellow" },
      { id: 5, color: "purple" },
      { id: 6, color: "orange" }
    ],
    targetStyle: {
      "flex-direction": "column-reverse",
      "flex-wrap": "wrap-reverse",
      "justify-content": "space-between",
      "align-content": "space-around"
    }
  }
];

// אפשרויות לכל מאפיין Flexbox
const propertyOptions = {
  "justify-content": ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"],
  "align-items": ["flex-start", "flex-end", "center", "baseline", "stretch"],
  "align-content": ["flex-start", "flex-end", "center", "space-between", "space-around", "stretch"],
  "flex-direction": ["row", "row-reverse", "column", "column-reverse"],
  "flex-wrap": ["nowrap", "wrap", "wrap-reverse"]
};

// משתני מצב המשחק
let currentLevelIndex = 0;
let userAnswers = {};

// אלמנטי DOM
const levelIndicator = document.getElementById("level-indicator");
const levelTitle = document.getElementById("level-title");
const levelInstructions = document.getElementById("level-instructions");
const dynamicControls = document.getElementById("dynamic-controls");
const userLayer = document.getElementById("user-layer");
const targetLayer = document.getElementById("target-layer");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");
const resetBtn = document.getElementById("reset-btn");
const feedbackArea = document.getElementById("feedback");
const victoryModal = document.getElementById("victory-modal");
const restartGameBtn = document.getElementById("restart-game-btn");

// ==========================================
// פונקציות אתחול וטעינה
// ==========================================

function initGame() {
  // טעינת שלב שמור ב-localStorage במידה וקיים
  const savedLevel = localStorage.getItem("flexbox_boxing_level");
  if (savedLevel && !isNaN(savedLevel) && savedLevel < levels.length) {
    currentLevelIndex = parseInt(savedLevel, 10);
  } else {
    currentLevelIndex = 0;
  }

  loadLevel(currentLevelIndex);

  // רישום מאזיני אירועים לכפתורים
  prevBtn.addEventListener("click", goToPrevLevel);
  nextBtn.addEventListener("click", goToNextLevel);
  submitBtn.addEventListener("click", checkAnswer);
  resetBtn.addEventListener("click", resetCurrentLevel);
  restartGameBtn.addEventListener("click", restartGame);
}

function loadLevel(index) {
  const level = levels[index];
  userAnswers = {};

  // עדכון טקסטים ומחוונים
  levelIndicator.textContent = `שלב ${index + 1} מתוך ${levels.length}`;
  levelTitle.textContent = level.title;
  levelInstructions.textContent = level.instructions;

  // עדכון מצב כפתורי ניווט
  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === levels.length - 1;

  // הסתרת משוב קודם
  hideFeedback();

  // יצירת פקדי ה-CSS בתיבת הקוד
  renderControls(level.controls);

  // יצירת אלמנטים בתוך הזירה
  renderRingItems(level);

  // החלת סגנון התחלתי
  applyUserStyles();
}

// ==========================================
// יצירת פקדים ואלמנטים ויזואליים
// ==========================================

function renderControls(controls) {
  dynamicControls.innerHTML = "";

  controls.forEach((prop) => {
    const row = document.createElement("div");
    row.className = "control-row";

    const label = document.createElement("span");
    label.className = "property-label";
    label.textContent = `${prop}: `;

    const select = document.createElement("select");
    select.className = "css-select";
    select.id = `select-${prop}`;
    select.dataset.property = prop;

    // הוספת האפשרויות ל-select
    const options = propertyOptions[prop];
    options.forEach((opt) => {
      const option = document.createElement("option");
      option.value = opt;
      option.textContent = opt;
      select.appendChild(option);
    });

    // ברירת מחדל
    userAnswers[prop] = options[0];

    // מאזין לשינוי לייב
    select.addEventListener("change", (e) => {
      userAnswers[prop] = e.target.value;
      applyUserStyles();
      hideFeedback();
    });

    row.appendChild(label);
    row.appendChild(select);
    const lineEnd = document.createElement("span");
    lineEnd.textContent = ";";
    row.appendChild(lineEnd);

    dynamicControls.appendChild(row);
  });
}

// אלמנטי SVG עבור כפפת איגרוף ושק איגרוף
const gloveSVG = `
<svg class="item-svg glove-svg" viewBox="0 0 64 64">
  <path class="glove-main" d="M42 6C31 6 23 13 21 21C17 19 11 21 9 26C7 31 10 37 15 40C12 43 11 49 16 53C21 57 28 55 33 51C38 53 44 52 50 47C55 42 56 33 56 23C56 13 50 6 42 6Z" fill="currentColor"/>
  <path class="glove-thumb" d="M21 21C17 19 11 21 9 26C7 31 10 37 15 40C19 36 21 28 21 21Z" fill="rgba(0,0,0,0.2)"/>
  <rect class="glove-wrist" x="18" y="47" width="28" height="9" rx="3" fill="#ffffff" stroke="rgba(0,0,0,0.15)" stroke-width="1"/>
</svg>
`;

const bagSVG = `
<svg class="item-svg bag-svg" viewBox="0 0 64 64">
  <line x1="32" y1="2" x2="32" y2="12" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
  <path d="M22 12 L32 12 L42 12 M22 12 L19 20 M42 12 L45 20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/>
  <rect x="18" y="20" width="28" height="40" rx="10" fill="currentColor"/>
  <rect x="18" y="32" width="28" height="5" fill="rgba(0,0,0,0.25)"/>
  <rect x="18" y="45" width="28" height="5" fill="rgba(0,0,0,0.25)"/>
</svg>
`;

function renderRingItems(level) {
  targetLayer.innerHTML = "";
  userLayer.innerHTML = "";

  // החלת סגנון המטרה על שכבת המטרה
  applyTargetStyles(level);

  // יצירת פריטי המטרה (שקי איגרוף)
  level.items.forEach((item) => {
    const bag = document.createElement("div");
    bag.className = `game-item punch-bag color-${item.color}`;
    if (level.itemWidth) {
      bag.style.width = level.itemWidth;
    } else {
      bag.style.width = "";
    }
    bag.innerHTML = bagSVG;
    targetLayer.appendChild(bag);
  });

  // יצירת פריטי המשתמש (כפפות איגרוף)
  level.items.forEach((item) => {
    const glove = document.createElement("div");
    glove.className = `game-item boxing-glove color-${item.color}`;
    if (level.itemWidth) {
      glove.style.width = level.itemWidth;
    } else {
      glove.style.width = "";
    }
    glove.innerHTML = gloveSVG;
    userLayer.appendChild(glove);
  });
}

// ==========================================
// החלת CSS דינמי ובדיקת תשובה
// ==========================================

function applyTargetStyles(level) {
  // איפוס סגנונות קודמים
  targetLayer.style.display = "flex";
  targetLayer.style.flexDirection = "";
  targetLayer.style.justifyContent = "";
  targetLayer.style.alignItems = "";
  targetLayer.style.flexDirection = "";
  targetLayer.style.alignContent = "";
  targetLayer.style.flexWrap = "";

  // החלת התשובות של המשתמש
  Object.keys(level.targetStyle).forEach((prop) => {
    targetLayer.style[prop] = level.targetStyle[prop];
  });
}

function applyUserStyles() {
  // איפוס סגנונות קודמים
  userLayer.style.display = "flex";
  userLayer.style.flexDirection = "";
  userLayer.style.justifyContent = "";
  userLayer.style.alignItems = "";
  userLayer.style.flexDirection = "";
  userLayer.style.alignContent = "";
  userLayer.style.flexWrap = "";

  // החלת התשובות של המשתמש
  Object.keys(userAnswers).forEach((prop) => {
    userLayer.style[prop] = userAnswers[prop];
  });
}

function checkAnswer() {
  const currentLevel = levels[currentLevelIndex];
  let isCorrect = true;

  // בדיקת כל המאפיינים הנדרשים בשלב
  Object.keys(currentLevel.targetSolution).forEach((prop) => {
    const expected = currentLevel.targetSolution[prop];
    const userVal = userAnswers[prop];

    if (Array.isArray(expected)) {
      if (!expected.includes(userVal)) {
        isCorrect = false;
      }
    } else {
      if (userVal !== expected) {
        isCorrect = false;
      }
    }
  });

  if (isCorrect) {
    showSuccess();
  } else {
    showError();
  }
}

function showSuccess() {
  showFeedback("מכה מדויקת! פגעת בשק האיגרוף!", "success");

  // אנימציית פגיעה לכפפות ולשקים
  const gloves = userLayer.querySelectorAll(".boxing-glove");
  gloves.forEach((glove) => {
    glove.classList.add("hit-animation");
    setTimeout(() => glove.classList.remove("hit-animation"), 400);
  });

  // מעבר לשלב הבא לאחר השהיה קצרה
  setTimeout(() => {
    if (currentLevelIndex < levels.length - 1) {
      currentLevelIndex++;
      localStorage.setItem("flexbox_boxing_level", currentLevelIndex);
      loadLevel(currentLevelIndex);
    } else {
      // סיום המשחק!
      victoryModal.classList.remove("hidden");
    }
  }, 1200);
}

function showError() {
  showFeedback("פספסת! הכפפה לא פגעה בשק האיגרוף, נסה קומבינציה אחרת", "error");

  // אנימציית רעד לזירה בעת טעות
  const ringWrapper = document.querySelector(".ring-wrapper");
  ringWrapper.classList.add("shake-animation");
  setTimeout(() => ringWrapper.classList.remove("shake-animation"), 400);
}

function showFeedback(text, type) {
  feedbackArea.textContent = text;
  feedbackArea.className = `feedback-area ${type}`;
}

function hideFeedback() {
  feedbackArea.className = "feedback-area hidden";
  feedbackArea.textContent = "";
}

// ==========================================
// ניווט ואיפוס
// ==========================================

function goToPrevLevel() {
  if (currentLevelIndex > 0) {
    currentLevelIndex--;
    localStorage.setItem("flexbox_boxing_level", currentLevelIndex);
    loadLevel(currentLevelIndex);
  }
}

function goToNextLevel() {
  if (currentLevelIndex < levels.length - 1) {
    currentLevelIndex++;
    localStorage.setItem("flexbox_boxing_level", currentLevelIndex);
    loadLevel(currentLevelIndex);
  }
}

function resetCurrentLevel() {
  loadLevel(currentLevelIndex);
  showFeedback("השלב אופס לערכי ברירת המחדל", "info");
  setTimeout(hideFeedback, 1500);
}

function restartGame() {
  victoryModal.classList.add("hidden");
  currentLevelIndex = 0;
  localStorage.setItem("flexbox_boxing_level", 0);
  loadLevel(0);
}

// הפעלת המשחק בעת טעינת הדף
document.addEventListener("DOMContentLoaded", initGame);
