import * as firebase from "firebase";

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref("expenses").on("child_removed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("child_changed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("child_added", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// // database
// //   .ref("expenses")
// //   .once("value")
// //   .then(snapshot => {
// //     const expenses = [];
// //     snapshot.forEach(childSnapshot =>
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       })
// //     );

// //     console.log(expenses);
// //   });

// // database.ref("expenses").on("value", snapshot => {
// //   const expenses = [];
// //   snapshot.forEach(childSnapshot =>
// //     expenses.push({
// //       id: childSnapshot.key,
// //       ...childSnapshot.val()
// //     })
// //   );

// //   console.log(expenses);
// // });

// // database.ref("expenses").push({
// //   description: "Hello",
// //   note: "Hello",
// //   amount: "123",
// //   createdAt: 123
// // });

// // database.ref("notes").push({
// //   title: "Next topics",
// //   body: "lorem ipsum"
// // });

// // database.ref("notes/-LYVDz9SP_kk9YgVJ1ob").update({
// //   body: "Buy food"
// // });

// // database.ref("notes/-LYVDz9SP_kk9YgVJ1ob").remove();

// // const firebaseNotes = {
// //   notes: {
// //     asdadasdf: {
// //       title: "First note!",
// //       body: "This is first note"
// //     },
// //     rgkdobv: {
// //       title: "Another note!",
// //       body: "This is another note"
// //     }
// //   }
// // };

// // const notes = [
// //   {
// //     id: "12",
// //     title: "First note!",
// //     body: "This is first ntoe"
// //   },
// //   {
// //     id: "12312e",
// //     title: "Another note!",
// //     body: "This is first ntoe"
// //   }
// // ];

// // database.ref("notes").set(notes);
// // database.ref("notes");

// // database
// //   .ref()
// //   .set({
// //     name: "Test",
// //     age: 19,
// //     stressLevel: 6,
// //     job: {
// //       title: "Software Developer",
// //       company: "Google"
// //     },
// //     isSingle: false,
// //     location: {
// //       city: "Bangkok",
// //       country: "Thailand"
// //     }
// //   })
// //   .then(() => console.log("Data is saved!"))
// //   .catch(err => console.log(err));

// // database.ref().on("value", snapshot => {
// //   const value = snapshot.val();
// //   const { name, job } = value;
// //   console.log(`${name} is ${job.title} at ${job.company}`);
// // });

// // const onValueChange = database
// //   .ref()
// //   .on(
// //     "value",
// //     snapshot => console.log(snapshot.val()),
// //     err => console.log(err)
// //   );

// // database.ref().off("value");

// // database
// //   .ref()
// //   .once("value")
// //   .then(snapshot => console.log(snapshot.val()))
// //   .catch(err => console.log(err));

// // database.ref().update({
// //   stressLevel: 9,
// //   "job/company": "Amazon",
// //   "location/city": "Seattle"
// // });

// // database
// //   .ref("isSingle")
// //   .remove()
// //   .then(() => console.log("Data removed!"))
// //   .catch(err => console.log(err));

// // database
// //   .ref("isSingle")
// //   .set(null)
