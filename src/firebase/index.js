import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAMKAyHVbXEKF9pO2vNp0AhRwV7iql1xow',
  authDomain: 'refrigerator-todo.firebaseapp.com',
  databaseURL:
    'https://refrigerator-todo-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'refrigerator-todo',
  storageBucket: 'refrigerator-todo.appspot.com',
  messagingSenderId: '648998147823',
  appId: '1:648998147823:web:a51c3c08393695e6f2ed1a',
  measurementId: 'G-J1JQW84543',
};

firebase.initializeApp(firebaseConfig);

const firebaseDatabase = firebase.database();

export { firebaseDatabase, firebase as default };
