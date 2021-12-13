const teachersLinksButton = document.getElementsByName("checkbox");
teachersLinksButton[0].checked = true;

const main = document.querySelector("main");

link_db = {
  teacher: {
    몰라: {
      M4_개인주제: "https://www.icloud.com/numbers/03u1K2Lm4AtZDHM8IR_DMe5uA",
      M4_팀: "https://www.icloud.com/numbers/03u1K2Lm4AtZDHM8IR_DMe5uA",
    },
    쩜백: {
      나무: "https://www.icloud.com/numbers/0H8Cqj6O_WvQACc17dLPm8w",
      룸메: "https://www.icloud.com/numbers/0H8Cqj6O_WvQACc17dLPm8w",
    },
  },
  class: {
    hyewa: {
      수학_1_2_3_4팀:
        "https://www.icloud.com/numbers/08vexwWfQENcnt3CtA57Mw_CA",
      사회_1_2팀: "https://www.icloud.com/numbers/0xfJ0ZoBewyfOkRGFWTRvsD3w",
    },
    alpha: {},
    kepston: {},
  },
};

function renderBox(classification) {
  const boxTitles = link_db[classification];

  for (const boxTitle in boxTitles) {
    // .box
    const box = document.createElement("div");
    box.classList.add("box");
    box.classList.add(classification);
    main.appendChild(box);
    // .box__name
    const boxName = document.createElement("h1");
    boxName.classList.add("box__name");
    boxName.innerText = boxTitle;
    box.appendChild(boxName);
    // .box__items
    const boxItems = document.createElement("div");
    boxItems.classList.add("box__items");
    box.appendChild(boxItems);

    const boxItemTitles = link_db[classification][boxTitle];

    for (const boxItemName in boxItemTitles) {
      //
      // .box__item
      const boxItem = document.createElement("div");
      boxItem.classList.add("box__item");
      boxItems.appendChild(boxItem);
      // .box__item__title
      const boxItemTitle = document.createElement("h2");
      boxItemTitle.classList.add("box__item__title");
      boxItem.appendChild(boxItemTitle);
      boxItemTitle.innerText = boxItemName;
      // .box__item__connect

      const boxItemConnect = document.createElement("i");
      boxItemConnect.classList.add("fas", "fa-play-circle", "play_button");
      boxItem.appendChild(boxItemConnect);
      // .box__item__copy
      const boxItemCopy = document.createElement("i");
      boxItemCopy.classList.add("far", "fa-copy", "copy_button");
      boxItem.appendChild(boxItemCopy);
    }
  }
}

const bodyEl = document.querySelector("body");

bodyEl.addEventListener("load", renderBox("teacher"));
bodyEl.addEventListener("load", renderBox("class"));
// buttons
const btn1 = document.querySelector("#checkbox-1");
const btn2 = document.querySelector("#checkbox-2");
// Els
const teacherEls = document.querySelectorAll(".teacher");
const classEls = document.querySelectorAll(".class");
// Default
classEls.forEach((classEl) => {
  classEl.classList.add("hidden");
  openLink("teacher");
});

function btnClick() {
  if (btn1.checked) {
    classEls.forEach((classEl) => {
      classEl.classList.add("hidden");
    });
    teacherEls.forEach((teacherEl) => {
      teacherEl.classList.remove("hidden");
    });
    openLink("teacher");
  } else {
    teacherEls.forEach((teacherEl) => {
      teacherEl.classList.add("hidden");
    });
    classEls.forEach((classEl) => {
      classEl.classList.remove("hidden");
    });
    openLink("class");
  }
}

function openLink(category) {
  const playButtons = document.querySelectorAll(".play_button");
  const appleOS = /(iPad|iPhone|iPod|Macintosh)/.test(navigator.userAgent);

  playButtons.forEach((playButton) => {
    playButton.addEventListener("click", (playButton) => {
      const buttonCategory = playButton.path[3].firstChild.innerText;
      const buttonTitle = playButton.path[1].innerText;

      const url = link_db[category][buttonCategory][buttonTitle];
      const appUrlScheme = `numbers://${url}`;

      window.open(url);
    });
  });
}

// 글자가 한줄을 넘어갔을때 조치가 필요함 - 필수

// 블럭이 페이지 이상으로 추가됬을 때 조치가 필요함
// 슬라이더 버튼 추가해야 할 듯 - 룸메쓰랑 논의
// position sticky
// overflow가 됬을때만 chevron 활성화
