firebase.initializeApp(config);
const db = firebase.firestore();
db.collection("teacher")
  .get()
  .then((result) => {
    console.log(result);
  });

function radio_chk(value) {
  const btn = document.getElementById(value);
  btn.classList.toggle('button_clicked');
}
