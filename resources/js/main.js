var featureTitle = document.querySelector(".features-title");
var features = document.querySelector("#features");
var newProductsTitle = document.querySelector(".new-products-title");
var newProducts = document.querySelector("#new-products");
var bestSellersTitle = document.querySelector(".best-sellers-title");
var bestSellers = document.querySelector("#best-sellers");
var stickyNavBtn = document.querySelector(".sticky-nav-btn");
var stickyNav = document.querySelector(".sticky-nav");
var searchButton = document.querySelector(".search");
var searchTxtField = document.querySelector(".input-field");
var userLoginBtn = document.querySelector(".login");
var btnLogin = document.querySelector(".btn-login");
var userLogin = document.querySelector(".user-text-field");
var cartBtn = document.querySelectorAll(".offers-image");
var addToCartButton = document.querySelector(".add-to-cart-btn");
var addToCartClass = document.querySelector(".offers__add-to-cart");
var addToCartItems = document.querySelector(".offers__add-to-cart__items");
var basketList = document.querySelector(".list-basket");
var basketBtn = document.querySelector(".basket-btn");
var xIcon = document.querySelector(".X-icon");
var input = document.getElementsByTagName("input");

//newProductsTitle.style.color = "#e1576e";  
// click on features title and show features section 
featureTitle.addEventListener("click", function(){
	features.classList.remove("no-visible");
	newProducts.classList.add("no-visible");
	bestSellers.classList.add("no-visible");
	featureTitle.style.color = "#e1576e";
	bestSellersTitle.style.color = "inherit";
	newProductsTitle.style.color = "inherit";
});

// click on best-sellers title and show best-sellers section 
bestSellersTitle.addEventListener("click", function(){
	bestSellers.classList.remove("no-visible");
	newProducts.classList.add("no-visible");
	features.classList.add("no-visible");
	featureTitle.style.color = "inherit";
	bestSellersTitle.style.color = "#e1576e";
	newProductsTitle.style.color = "inherit";
});

// click on best-sellers title and show best-sellers section 
newProductsTitle.addEventListener("click", function(){
	bestSellers.classList.add("no-visible");
	newProducts.classList.remove("no-visible");
	features.classList.add("no-visible");
	featureTitle.style.color = "inherit";
	bestSellersTitle.style.color = "inherit";
	newProductsTitle.style.color = "#e1576e";
});

// hide and show MENU sticky nav 
stickyNavBtn.addEventListener("click", function(){
	if (stickyNav.style.display === "flex") {
    stickyNav.style.display = "none";
  	} else {
    stickyNav.style.display = "flex";
  }
});

// hide and show search text field
searchButton.addEventListener("click", function(){
	if (searchTxtField.style.opacity === "1") {
    searchTxtField.style.opacity = "0";
  	} else {
    searchTxtField.style.opacity = "1";
  }
});

// hide and show login form
userLoginBtn.addEventListener("click", function(){
	if (userLogin.style.opacity === "1") {
		userLogin.style.opacity = "0";
  	} else {
		userLogin.style.opacity = "1";
  }
});

// show clicked item
cartBtn.forEach(function(btn) {
	btn.addEventListener("click", function(event){
	addToCartClass.style.display = "flex";
    var addToCart = document.getElementById('add-to-cart');
    var div = event.target;
    var clone = div.cloneNode(true);
    while (addToCart.firstChild) addToCart.firstChild.remove();
    addToCart.appendChild(clone);
	})
});


// hide add to cart 
xIcon.addEventListener("click", function(){
	addToCartClass.style.display = "none";
});


// push item in basket
	addToCartButton.addEventListener("click", function(){
		addToCartButton.forEach(function(event){
		basketList.style.display = "flex";
   	 	var div = event.target;
    	var clone = div.cloneNode(true);
    	while (basketList.firstChild) basketList.firstChild.remove();
    	basketList.appendChild(clone);
    	push(event.target);
	})
	})



// 
basketBtn.addEventListener("click", function(){
	if(basketList.style.display === "none") {
		basketList.style.display = "flex";
	} else {
		basketList.style.display = "none";
	}
});

btnLogin.addEventListener("click", function() {
	if(input === "") {
		alert("U must fill fields");
	} else {
		alert("Wrong email adress or user name");
	};
});





