// function radio_chk(idName) {
//   const btn = document.getElementById(idName);
//   const radio_btn = document.getElementsByName(this.name);
//   console.log(radio_btn);
// 	// var sel_type = null;

// 			if(radio_btn.checked == false){
// 				// sel_type = chk_radio[i].value;
//         btn.classList.toggle('button_clicked');
// 			}
// }

const teachersLinksButton = document.getElementsByName("checkbox");
teachersLinksButton[0].checked = true;

const main = document.querySelector("main");

link_db = {
  teacher: {
    몰라: {
      M3_개인주제: "https://www.icloud.com/numbers/03u1K2Lm4AtZDHM8IR_DMe5uA",
      M3_개인주제아: "https://www.icloud.com/numbers/03u1K2Lm4AtZDHM8IR_DMe5uA",
      lolololololololololololololololol:
        "https://www.icloud.com/numbers/03u1K2Lm4AtZDHM8IR_DMe5uA",
      lololololololol:
        "https://www.icloud.com/numbers/03u1K2Lm4AtZDHM8IR_DMe5uA",
      수학_1_2_3_4팀:
        "https://www.icloud.com/numbers/08vexwWfQENcnt3CtA57Mw_CA",
    },
    예티: {
      나무: "https://www.icloud.com/numbers/0H8Cqj6O_WvQACc17dLPm8w",
    },
  },
  class: {
    hyewa: {
      수학_1_2_3_4팀:
        "https://www.icloud.com/numbers/08vexwWfQENcnt3CtA57Mw_CA",
      사회_1_2팀: "https://www.icloud.com/numbers/0xfJ0ZoBewyfOkRGFWTRvsD3w",
    },
    alpha: {},
  },
};

function handleBoxItemTitleLength(titleBox, title) {
  console.dir(titleBox);
  console.log(titleBox);
  console.log(titleBox.scrollHeight);
  if (titleBox.scrollHeight === 29) {
    return title;
  }
}

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

      editedBoxItemName = handleBoxItemTitleLength(boxItemTitle, boxItemName);
      boxItemTitle.innerText = editedBoxItemName;
      // boxItemTitle.innerText = boxItemName;
      // .box__item__connect
      const boxItemConnect = document.createElement("i");
      boxItemConnect.classList.add("fas", "fa-play-circle");
      boxItem.appendChild(boxItemConnect);
      // .box__item__copy
      const boxItemCopy = document.createElement("i");
      boxItemCopy.classList.add("far", "fa-copy");
      // boxItemCopy.classList.add("fas", "fa-copy");
      // boxItemCopy.classList.add("fas", "fa-link");
      boxItem.appendChild(boxItemCopy);
    }
  }
}

const bodyEl = document.getElementsByTagName('body')[0];

bodyEl.addEventListener('load', renderBox("teacher"));
bodyEl.addEventListener('load', renderBox("class"));
// buttons
const btn1 = document.getElementById('checkbox-1');
const btn2 = document.getElementById('checkbox-2');
// Els
const teacherEl = document.querySelectorAll('.teacher');
const classEl = document.querySelectorAll('.class');
// Default
for (i = 0; i < classEl.length; i++) {
  classEl[i].classList.add("hidden");
}

function btnClick() {
  if (btn1.checked == true) {
    for (i = 0; i < classEl.length; i++) {
      classEl[i].classList.add("hidden");
      teacherEl[i].classList.remove("hidden");
    }
  } else if (btn2.checked == true) {
    for (i = 0; i < teacherEl.length; i++) {
      classEl[i].classList.remove("hidden");
      teacherEl[i].classList.add("hidden");
    }
  }
}

// 글자가 한줄을 넘어갔을때 조치가 필요함 - 필수

// 블럭이 페이지 이상으로 추가됬을 때 조치가 필요함
// 슬라이더 버튼 추가해야 할 듯 - 룸메쓰랑 논의
// position sticky
// overflow가 됬을때만 chevron 활성화