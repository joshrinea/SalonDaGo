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
                                <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdropServices" onclick="ShowService('${childKey}', '${childData.link}', '${childData.price}', '${childData.service_name}', '${childData.description}')
                                " class="btn btn-sm btn-outline-dark">Book now</button>
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
                                <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdropProduct" onclick="ShowProduct('${childKey}', '${childData.link}', '${childData.price}', '${childData.service_name}', '${childData.description}')
                                " class="btn btn-sm btn-outline-dark">
                                    Add Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    })
})


function ShowProduct(key, link, price, service_name, description){
    document.getElementById('modalProductID').innerHTML += `
        <div class="row">
            <div class="col-md-5" >
                <img src='${link}' style="max-width: 100%; height: 300px;  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;">
            </div>
            <div class="col-md-7">
                <span style="display: none;">${key}</span>
                <p style="text-transform: uppercase; font-size: 20px;"><b>${service_name}</b></p>
                <span ><b>Price:</b> ${price}</span> <br>
                <span><b>Description:</b> ${description}</span>
            </div>
        </div>
    `
}


function ShowService(key, link, price, service_name, description){
    document.getElementById('modalServicesID').innerHTML += `
        <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">${service_name}</h5>
            <button type="button" class="btn btn-close" data-bs-dismiss="modal" aria-label="Close" style="border: none; cursor: pointer;">X</button>
        </div>
        <div class="modal-body">
            <div class="row">
                <div class="col-md-5" >
                    <img src='${link}' style="max-width: 100%; height: 300px;  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;">
                </div>
                <div class="col-md-7">
                    <span style="display: none;">${key}</span>
                    <p class="label label-warning" style="text-transform: uppercase; font-size: 20px;"><b>${service_name}</b></p>
                    <span ><b>Price:</b> ${price}</span> <br>
                    <span><b>Description:</b> ${description}</span>
                </div>
            </div>
            <div class="modal-footer">
                <div class="form__button">
                    <input type="Submit" class="form__cancel" value="Close" data-bs-dismiss="modal">
                </div>
                <div class="form__button">
                    <button type="submit" class="form__submit" id="btnSignin" style="outline: none;">Add to Cart</button>
                </div>
            </div>
        </div>
    `
}
