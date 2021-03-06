# Firebase Tutorial
In this repo you can find my documentation about the tutorial of firebase by the net ninja
[Click here to open the link to the tutorial](https://www.youtube.com/watch?v=4d-gIPGzmK4)

[Click here to see the prototype made in](https://xenodochial-bohr-3f4d60.netlify.com/)

## Table of contents
*   [Journal](#journal)
    * [25 may 2019](#25-may-2019)
        * [Firebase Firestore Tutorial 1 Introduction](#firebase-firestore-tutorial-1-introduction)
        * [Firebase Firestore Tutorial 2 Setting up Firestore](#firebase-firestore-tutorial-2-setting-up-firestore)
    * [26 may 2019](#26-may-2019)
        * [Firebase Firestore Tutorial 3 Getting Documents](#firebase-firestore-tutorial-3-getting-documents)
        * [Firebase Firestore Tutorial 4 Saving Data](#firebase-firestore-tutorial-4-saving-data)
        * [Firebase Firestore Tutorial 5 Deleting Data](#firebase-firestore-tutorial-5-deleting-data)
        * [Firebase Firestore Tutorial 6 Making Queries](#firebase-firestore-tutorial-6-making-queries)
    * [27 may 2019](#27-may-2019)
        * [Firebase Firestore Tutorial 7 Ordering Data](#firebase-firestore-tutorial-7-ordering-data)

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
### 26 may 2019
#### Firebase Firestore Tutorial 3 Getting Documents
*   Connecting to the database collection
    ```js
    db.collection('Cafes').get().then(result=>{    
    })
    ```
*   Getting the id from the document
    ```js
    db.collection('Cafes').get().then(result=>{
        result.id    
    })
    ```
*   Getting all data from the document
    ```js
    db.collection('Cafes').get().then(result=>{
        result.data()    
    })
    ```
#### Firebase Firestore Tutorial 4 Saving Data
*   Adding data to a collection
    ```js
    // Grab the Collection and use the add function. This funciton needs an object to save it in the collection
    db.collection('Cafes').add({
        name: form.name.value,
        city: form.city.value
    })
    ```
#### Firebase Firestore Tutorial 5 Deleting Data
*   Event Propagation?
*   Deleting a record/document
    *   Get the id of the document u want to remove
    *   Delete that one document
    ```js
    let id = e.target.parentElement.getAttribute('data-id')
    db.collection('Cafes').doc(id).delete()
    ```
#### Firebase Firestore Tutorial 6 Making Queries
1.  To make a query you need to use the `.where` method
2.  The where methods needs 3 parameters
3.  First is the Property 
4.  Second is the condition like `==/!==/<` etc
5.  Last one is the condition value
    ```js
    db.collection('Cafes').where('city', '==', 'Amsterdam')
    ```  
### 27 may 2019
#### Firebase Firestore Tutorial 7 Ordering Data
*   You can order data by adding a function before you get the data
    *   This function only accepts the property that you want to order in
    ```js
    db.collection('Cafes').orderBy('name').get()
    ```
*   It is possible to chain multiple queries to get a more accurate result
    ```js
    db.collection('Cafes').where('city', '==', 'Amsterdam').orderBy('name').get()
    ```
    *   Sometimes you have an index error thrown by firebase. To resolve this you need to click on the link and build the indexes for that query search
    ![error](images/readme/indexerror.png)
#### Firebase Firestore Tutorial 8 Realtime Data
*   Firebase has an build in realtime data checker in a form of an event. The event is called onSnapshot.
    *   In order to see the state of a record you have to start the `docChanges` event on every snapshot.
    *   Every snapshot has three states `update` `removed` `added`
    *   `added` is the initial data
    *   `removed` is removed data
    *   `updated` is updated data
    ```js
    db.collection('Cafes').orderBy('city').onSnapshot(snapshot=>{
        let changes = snapshot.docChanges()
        changes.forEach(change=>{
            console.log(change.doc.data())
            if(change.type === 'added')             renderElements(change.doc)
            else if(change.type === 'removed')      removeElement(change.doc.id)
        })
    })
    ```
#### Firebase Firestore Tutorial 9 Updating Data
*   Updating data can be done with `update` and `set`
    *   First you need to grab the id of the record you want to update by `.doc(id)`
    *   Second you can update it by using the `update` or `set` methods
        *   `Set` overwrites the whole record
        *   `Update` only updates the assigned property
    ```js
    // This only updates city property of the specifik id
    db.collection('Cafes').doc(id).update({
        city: 'Heiloo'
    })
    // This only overwrites everything of the specifik id
    db.collection('Cafes').doc(id).set({
        city: 'Heiloo'
    })
    ```

