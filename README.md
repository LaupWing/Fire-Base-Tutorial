# Firebase Tutorial
In this repo you can find my documentation about the tutorial of firebase by the net ninja
[Click here to open the link to the tutorial](https://www.youtube.com/watch?v=4d-gIPGzmK4)
## Table of contents
*   [Journal](#journal)
    * [25 may 2019](#25-may-2019)
        * [Firebase Firestore Tutorial 1 Introduction](#firebase-firestore-tutorial-1-introduction)
        * [Firebase Firestore Tutorial 2 Setting up Firestore](#firebase-firestore-tutorial-2-setting-up-firestore)
## Journal
### 25 may 2019
#### Firebase Firestore Tutorial 1 Introduction
*   Firebase is a nosql database
*   Firebase works in collections, which you can see as a record of documents.
*   It makes storing data very very simple to do
*   You can make query's all from the clientside, so that you dont have to worry about serverside code
#### Firebase Firestore Tutorial 2 Setting up Firestore
1.  Make a account and log in in the google fire base enviroment [Click here](https://firebase.google.com)
2.  After loggin in you can make a new database in testmode, so that you can freely update and change data.
3.  In the next screen(see below) you can add new collections in the left column and in the right colum you will see all the documents of that collection
![Firestore Database](./images/readme/Firebase_Interface.png)
4.  When you add a new collections and gave it a name this screen (see image below) will appear. Firebase asks you to store your first doucment in the database you just has created.
    *   When you keep the id input form blank, firebase will generate a id for you. Often it is best practice to keep it blank so that you dont have to manually fill in the id's. So that it will be automated
![First Collection](./images/readme/add_data.png)
5.  After you have made your first document the record of that document will be appear in the collection that you have made.
    *   In the middle column you can find the document id's
    *   If you click on those id's you can see the property's and value's attached to that record/document
![First Collection](./images/readme/Identefire.png)
6.  To connect your website with the firebase server you need to add some scripts into your project. These scripts can be found in `Project overview > Web`
    *   This line of code is required to load in the firebase library. We are only loading in the library's that we need. 
    ```html
    <!-- The core app library -->
    <script src="https://www.gstatic.com/firebasejs/6.0.4/firebase-app.js"></script>
    <!-- The Firestore database -->
    <script src="https://www.gstatic.com/firebasejs/6.0.4/firebase-firestore.js"></script>
    ``` 
    *   The Firebase config object: In the firebase object you can find all the info needed to connect with your firebase account.
    ```js
    var firebaseConfig = {
        apiKey: "AIzaSyBKsUGGsxBgl94Tc84MYhbHlq_hOxXyijk",
        authDomain: "fir-tutorial-netninja.firebaseapp.com",
        databaseURL: "https://fir-tutorial-netninja.firebaseio.com",
        projectId: "fir-tutorial-netninja",
        storageBucket: "fir-tutorial-netninja.appspot.com",
        messagingSenderId: "601917374255",
        appId: "1:601917374255:web:68a2a16546e420de"
    };
    ```