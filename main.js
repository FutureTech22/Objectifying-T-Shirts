var shirticon1 = document.getElementById('bluecart')
var shirticon2 = document.getElementById('orangecart')
var shirticon3 = document.getElementById('pinkcart')
var subtotal = 0;
var subtotalbox = document.getElementById('subtotal')
var totalbox = document.getElementById('total')
var htmlBox = document.getElementById('items')
var cartArray = []



var blueShirt = {
    name: 'save my trees',
    price: 29,
    inCart: false
}

var orangeShirt = {
    name: 'nature lover',
    price: 29,
    inCart: false
}


var pinkShirt = {
    name: 'forrest walk',
    price: 29,
    inCart: false
}

function updateCart(){
	var subtotal = 0;
	var html = "";


    cartArray.forEach(function(shirt){
    	subtotal+=shirt.price;

        html += `
        <div id='item'><p>${shirt.name} <span>$${shirt.price}</span></p></div>
        `
    })

    subtotalbox.innerHTML = subtotal;

    var total = subtotal*1.065;

    totalbox.innerHTML = total.toFixed(2);

    htmlBox.innerHTML = html;
}

shirticon1.addEventListener('click', function() {
    cartArray.push(blueShirt);
    updateCart();
})

shirticon2.addEventListener('click', function() {
    cartArray.push(orangeShirt);
    updateCart();
})

shirticon3.addEventListener('click', function() {
    cartArray.push(pinkShirt);
    updateCart();
})
