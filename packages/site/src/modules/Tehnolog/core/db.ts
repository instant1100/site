// firebase.auth().createUserWithEmailAndPassword('angels1100@yandex.ru', '111111')
// .then(console.log).catch((error) => {

firebase.auth()
  .signInWithEmailAndPassword('angels1100@yandex.ru', '111111')
  .then(() => {
    const db = firebase.firestore();
    console.log(db.collection('users').add({
      first: 'Ada',
      last: 'Lovelace',
      born: 1815,
    }));
    db.collection('users').add({
      first: 'Ada',
      last: 'Lovelace',
      born: 1815,
    })
      .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  });
