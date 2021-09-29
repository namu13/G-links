firebase.initializeApp(config);
const db = firebase.firestore();
db.collection("teacher")
  .get()
  .then((result) => {
    console.log(result);
  });

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
