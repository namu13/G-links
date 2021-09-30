const main = document.querySelector("main");
// firebase.initializeApp(config);
// const db = firebase.firestore();
// db.collection("teacher")
//   .get()
//   .then((result) => {
//     console.log(result);
//   });

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
link_db = {
  teacher: {
    mola: {
      individual: "https://www.icloud.com/numbers/03u1K2Lm4AtZDHM8IR_DMe5uA",
      math_1: "https://www.icloud.com/numbers/08vexwWfQENcnt3CtA57Mw_CA",
    },
    yeti: {
      namu: "https://www.icloud.com/numbers/0H8Cq-j6O_WvQACc17d-LPm8w",
    },
  },
  class: {},
};
function printTeacherScreen() {
  // .teacher-box
  const teacherBox = document.createElement("div");
  teacherBox.classList.add("teacher-box");
  main.appendChild(teacherBox);
  // teacher-box__name
  const teacherName = document.createElement("h1");
  teacherName.classList.add("teacher-box__name");
  teacherName.innerText = "will add later";
  teacherBox.appendChild(teacherName);
  // .teacher-box__items
  const teacherItems = document.createElement("div");
  teacherItems.classList.add("teacher-box__items");
  teacherBox.appendChild(teacherItems);
  // .teacher-box__item
  const teacherItem = document.createElement("div");
  teacherItem.classList.add("teacher-box__item");
  teacherItems.appendChild(teacherItem);
  // .teacher-box__item__title
  const teacherItemTitle = document.createElement("h2");
  teacherItemTitle.classList.add("teacher-box__item__title");
  teacherItem.appendChild(teacherItemTitle);
  teacherItemTitle.innerText = "will add later2";
  // link icon
  const teacherItemConnect = document.createElement("i");
  teacherItemConnect.classList.add("fas", "fa-link");
  teacherItem.appendChild(teacherItemConnect);
  // link icon
  const teacherItemCopy = document.createElement("i");
  teacherItemCopy.classList.add("fas", "fa-link");
  teacherItem.appendChild(teacherItemCopy);
}
printTeacherScreen();
