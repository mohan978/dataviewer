  var firestoreIndexObj ={}
  // Your web app's Firebase configuration
    /*
      var firebaseConfig = {
  apiKey: "AIzaSyD8UWgohYzfdxd2VEJPEPnESv0uKn3l1jE",
  authDomain: "test-b26f9.firebaseapp.com",
  databaseURL: "https://test-b26f9-default-rtdb.firebaseio.com",
  projectId: "test-b26f9",
  storageBucket: "test-b26f9.appspot.com",
  messagingSenderId: "1038914343166",
  appId: "1:1038914343166:web:0884d3c8766712d98115af"
};
    */
	
  
	//original database 
    var firebaseConfig = {
	  apiKey: "AIzaSyAF2K69oz7rYJ0fZMr-HH5au-Va5LQ6hr0",
	  authDomain: "tradingview-data-d67aa.firebaseapp.com",
	  projectId: "tradingview-data-d67aa",
	  storageBucket: "tradingview-data-d67aa.firebasestorage.app",
	  messagingSenderId: "566721762553",
	  appId: "1:566721762553:web:3fa18d98a7431c20c93e28",
	  measurementId: "G-KG26R59794"
	};
	//testing database 
    //var firebaseConfig = {  apiKey: "AIzaSyACT33FgxL-YBE443rdFT6qZzbUPksYae4",authDomain: "newtest13235466.firebaseapp.com",  projectId: "newtest13235466",  storageBucket: "newtest13235466.appspot.com",  messagingSenderId: "629424824780",  appId: "1:629424824780:web:620bbee032be96b45c7d69"};



    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    // Get a reference to the Firestore database
    var db = firebase.firestore();




