
const firebaseConfig = {
    apiKey: "AIzaSyCoRLTOd51Y7c7Z7oMfZaHwJDGsF9Bin3w",
    authDomain: "origintechindia-29.firebaseapp.com",
    databaseURL: "https://origintechindia-29-default-rtdb.asia-southeast1.firebasedatabase.app",

    projectId: "origintechindia-29",
    storageBucket: "origintechindia-29.appspot.com",
    messagingSenderId: "100677463041",
    appId: "1:100677463041:web:ffc64afc16c444ea00a400",
    measurementId: "G-42B1W019ZB"
    // apiKey: "AIzaSyBZ-tCDoJB_rHw4-g-J8UFmk2QACAEMWH0",
    // authDomain: "origintech-8290c.firebaseapp.com",
    // databaseURL: "https://origintech-8290c-default-rtdb.firebaseio.com",
    // projectId: "origintech-8290c",
    // storageBucket: "origintech-8290c.appspot.com",
    // messagingSenderId: "95473509688",
    // appId: "1:95473509688:web:c0f1c5c1eb6cb9387ccdcd",
    // measurementId: "G-YT3RGFQPLH"
};

//initialize firebase
firebase.initializeApp(firebaseConfig);

//reference your database
let contactFormDb = firebase.database().ref('contactForm')

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    let email = getElementVal('email')
    let message = getElementVal('message')
    let subject = getElementVal('subject')

    saveMessage(name, email, phone, message);

    // enable alert
    document.querySelector('.alert').style.display = 'block';

    setTimeout(()=>{
        document.querySelector('.alert').style.display = 'none';
    }, 3000)

    // reset the form
    document.getElementById('contactForm').reset()
}

const saveMessage = ( email, subject, message) => {
    var newContactForm = contactFormDb.push();
    newContactForm.set({
     
        email:email,
        subject:subject,
        message:message
    })
};

const getElementVal  = (id)=>{
    return document.getElementById(id).value;
}