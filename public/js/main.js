// GLOBAL
var products = [];
var cartItems = [];
var cart_n = document.getElementById("cart_n");
// DIVS
var nftsDIV = document.getElementById("nftsDIV");
var mostviewedDIV = document.getElementById("mostviewedDIV");
var collectionDIV = document.getElementById("collectionDIV");

let URL;

//INFORMATION
var NFT = [
  // { name: "", price: 1 },
];

// var MOSTVIEWED = [
//   { name: "111 #1", price: 10 },
//   { name: "112 #2", price: 11 },
//   { name: "113 #3", price: 12 },
// ];
// var COLLECTION = [
//   { name: "Collection #1", price: 11 },
//   { name: "Collection #2", price: 12 },
//   { name: "Collection #3", price: 15 },
// ];

  //  AJAX FOR CARDS
$.ajax({
  url: "/api/nft",
  method: "Get"
})
.then(function (data){
  // console.log(data)
  var datalength = data.length;
  // console.log(datalength)

    for (var i=0; i < datalength; i++){
      let name = data[i].title; //  title
      let artist = data[i].artist;
      let url = `../images/${data[i].filename}`;
      let description = data[i].description;
      let price = Math.floor(Math.random() * 1000)

      let newObj = { name, artist, url , description, price}
      NFT.push(newObj)
      
    }
    console.log("===========NFT ARRAY============")
    console.log(NFT);


})

.then(()=>{
  for (let index = 0; index < 26; index++) {
    nftsDIV.innerHTML += `${HTMLNftProduct(index)}`;
  }
   // for (let index = 1; index <= 3; index++) {
  //   mostviewedeDIV.innerHTML += `${HTMLMostviewedProduct(index)}`;
  //   collectionDIV.innerHTML += `${HTMLCollectionProduct(index)}`;
  // }
  if (localStorage.getItem("cart") == null) {
  } else {
    products = JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML = `[${products.length}]`;
  }
})

//HTML
function HTMLNftProduct(con) {
  // console.log(con)
  // console.log(NFT[con])

  let btn = `btnNft${con}`;

  return `
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top${con}" style="height:16rem;" src="${NFT[con].url}" alt="Card image cap">
                <div class="card-body">
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <p class="card-text${con}">${NFT[con].name}</p>
                    <p class="card-text">Price: ${NFT[con].price}.00</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" onclick="cart2('${
                              NFT[con].name
                            }','${
    NFT[con].price
  }','${NFT[con].url}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary" ><a style="color:inherit;" href="/cart">Buy</a></button>
                            <button id="${btn}" type="button" onclick="cart('${
    NFT[con].name
  }','${
    NFT[con].price
  }','${NFT[con].url}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary" >Add to cart</button>
                        </div>
                        <small class="text-muted">Free shipping </small>
                    </div>
                </div>
            </div>
        </div>
    `;
}
function HTMLMostviewedProduct(con) {
  let URL = `images/cog1${con}.png`;
  let btn = `btnMostviewed${con}`;
  return `
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top" style="height:16rem;" src="${URL}" alt="Card image cap">
                <div class="card-body">
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <p class="card-text">${MOSTVIEWED[con - 1].name}</p>
                    <p class="card-text">Price: ${
                      MOSTVIEWED[con - 1].price
                    }.00</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" onclick="cart2('${
                              MOSTVIEWED[con - 1].name
                            }','${
    MOSTVIEWED[con - 1].price
  }','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary" ><a href="/cart" style="color:inherit;">Buy</a></button>
                            <button id="${btn}" type="button" onclick="cart('${
    MOSTVIEWED[con - 1].name
  }','${
    MOSTVIEWED[con - 1].price
  }','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary" >Add to cart</button>
                        </div>
                        <small class="text-muted">Free shipping </small>
                    </div>
                </div>
            </div>
        </div>
    `;
}
function HTMLCollectionProduct(con) {
  let URL = `images/rad${con}.png`;
  let btn = `btnCollection${con}`;
  return `
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top" style="height:16rem;" src="${URL}" alt="Card image cap">
                <div class="card-body">
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <p class="card-text">${COLLECTION[con - 1].name}</p>
                    <p class="card-text">Price: ${
                      COLLECTION[con - 1].price
                    }.00</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" onclick="cart2('${
                              COLLECTION[con - 1].name
                            }','${
    COLLECTION[con - 1].price
  }','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary" ><a href="/cart" style="color:inherit;">Buy</a></button>
                            <button id="${btn}" type="button" onclick="cart('${
    COLLECTION[con - 1].name
  }','${
    COLLECTION[con - 1].price
  }','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary" >Add to cart</button>
                        </div>
                        <small class="text-muted">Free shipping </small>
                    </div>
                </div>
            </div>
        </div>
    `;
}
//ANIMATION
function animation() {
  const toast = swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1000,
  });
  toast({
    type: "success",
    title: "Added to shopping cart",
  });
}
// CART FUNCTIONS
function cart(name, price, url, con, btncart) {
  var item = {
    name: name,
    price: price,
    url: url,
  };

  cartItems.push(item);
  let storage = JSON.parse(localStorage.getItem("cart"));
  if (storage == null) {
    products.push(item);
    localStorage.setItem("cart", JSON.stringify(products));
  } else {
    products = JSON.parse(localStorage.getItem("cart"));
    products.push(item);
    localStorage.setItem("cart", JSON.stringify(products));
  }
  products = JSON.parse(localStorage.getItem("cart"));
  cart_n.innerHTML = `[${products.length}]`;
  document.getElementById(btncart).style.display = "none";
  animation();
}

function cart2(name, price, url, con, btncart) {
  var item = {
    name: name,
    price: price,
    url: url,
  };
  cartItems.push(item);
  let storage = JSON.parse(localStorage.getItem("cart"));
  if (storage == null) {
    products.push(item);
    localStorage.setItem("cart", JSON.stringify(products));
  } else {
    products = JSON.parse(localStorage.getItem("cart"));
    products.push(item);
    localStorage.setItem("cart", JSON.stringify(products));
  }
  products = JSON.parse(localStorage.getItem("cart"));
  cart_n.innerHTML = `[${products.length}]`;
  document.getElementById(btncart).style.display = "none";
}

// (() => {
//   for (let index = 0; index < 25; index++) {
//     nftsDIV.innerHTML += `${HTMLNftProduct(index)}`;
//   }
//   // for (let index = 1; index <= 3; index++) {
//   //   mostviewedeDIV.innerHTML += `${HTMLMostviewedProduct(index)}`;
//   //   collectionDIV.innerHTML += `${HTMLCollectionProduct(index)}`;
//   // }
//   if (localStorage.getItem("cart") == null) {
//   } else {
//     products = JSON.parse(localStorage.getItem("cart"));
//     cart_n.innerHTML = `[${products.length}]`;
//   }
// })();