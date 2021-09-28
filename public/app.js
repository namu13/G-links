firebase.initializeApp(config);
const db = firebase.firestore();
db.collection("teacher")
  .get()
  .then((result) => {
    console.log(result);
  });
