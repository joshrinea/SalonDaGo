var firebaseConfig = {
    apiKey: "AIzaSyAAPLiZplwjx5mN3NQdcJSkj8lXMLjtBYg",
    authDomain: "salondago-4a11c.firebaseapp.com",
    databaseURL: "https://salondago-4a11c-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "salondago-4a11c",
    storageBucket: "salondago-4a11c.appspot.com",
    messagingSenderId: "969864103293",
    appId: "1:969864103293:web:ab223a4619c2bbfc55b814",
    measurementId: "G-G5WG31LRZR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const servicesRef = firebase.database().ref('Services');
servicesRef.once('value', (snapshot) => {
    snapshot.forEach((childSnaphot) => {
        var childKey = childSnaphot.key;
        var childData = childSnaphot.val();
        document.getElementById('ServicesDiv').innerHTML += `
            <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                    <img class="card-img-top" style="height: 16rem;" src="${childData.link}">
                    <div class="card-body">
                        <p class="card-text" style="font-size: 14px; font-weight: bold; text-transform: uppercase;">${childData.service_name}</p>
                        <p class="card-text">${childData.price}</p>
                        <p class="card-text" style="font-size: 12px;">${childData.description}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" onclick="AddToCart('${childKey}', '${childData.link}', '${childData.price}', '${childData.service_name}', '${childData.description}')
                                " class="btn btn-sm btn-outline-dark"><a href="cart.html" style="color:inherit; text-decoration: none;">Book now</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    })
})


const productsRef = firebase.database().ref('Products');
productsRef.once('value', (snapshot) => {
    snapshot.forEach((childSnaphot) => {
        var childKey = childSnaphot.key;
        var childData = childSnaphot.val();
        document.getElementById('ProductsDiv').innerHTML += `
            <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                    <img class="card-img-top" style="height: 16rem;" src="${childData.link}">
                    <div class="card-body">
                        <p class="card-text" style="font-size: 14px; font-weight: bold; text-transform: uppercase;">${childData.service_name}</p>
                        <p class="card-text">${childData.price}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" onclick="AddToCart('${childKey}', '${childData.link}', '${childData.price}', '${childData.service_name}', '${childData.description}')
                                " class="btn btn-sm btn-outline-dark">
                                    <a href="cart.html" style="color:inherit; text-decoration: none;">
                                        Add Cart
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    })
})


// add to cart function
function AddToCart(){

}


function LoginUser(){
    document.createElement('modal').innerHTML += `
        <div class="modal-dialog modal-dialog-centered">
        ...
        </div>
    `
}