function subTotal() {
    const bestPrice = parseFloat(document.getElementById('best-price').innerText);
    const memoryPrice = parseFloat(document.getElementById('memory').innerText);
    const stroagePrice = parseFloat(document.getElementById('stroage').innerText);
    const deliveryCharge = parseFloat(document.getElementById('delivery-charge').innerText);

    const totalPrice = document.getElementById('total-price');
    const setTotalAmount = document.getElementById('totalAmount');

    totalPriceValue = bestPrice + memoryPrice + stroagePrice + deliveryCharge;

    totalPrice.innerText = totalPriceValue;

    setTotalAmount.innerText = totalPriceValue;
}


//Get Memory value 
function tableValueEGB() {
    const tableValue = parseFloat(document.getElementById('memory').innerText);
    const UptableValue = (document.getElementById('memory').innerText = 0)
    subTotal();
}

function tableValueSGB() {
    const tableValue = parseFloat(document.getElementById('memory').innerText);
    const UptableValue = (document.getElementById('memory').innerText = 180);
    subTotal();
}

//Get Stroage Value
function tableValueTFS() {
    const tableValue = parseFloat(document.getElementById('stroage').innerText);
    const UptableValue = (document.getElementById('stroage').innerText = 0);
    subTotal();
}

function tableValueFOT() {
    const tableValue = parseFloat(document.getElementById('stroage').innerText);
    const UptableValue = (document.getElementById('stroage').innerText = 120);
    subTotal();
}

function tableValueOTB() {
    const tableValue = parseFloat(document.getElementById('stroage').innerText);
    const UptableValue = (document.getElementById('stroage').innerText = 180)
    subTotal();
}

//Delivery Charge
function tableValueFD() {
    const tableValue = parseFloat(document.getElementById('delivery-charge').innerText);
    const UptableValue = (document.getElementById('delivery-charge').innerText = 0)
    subTotal();
}

function tableValueDD() {
    const tableValue = parseFloat(document.getElementById('delivery-charge').innerText);
    const UptableValue = (document.getElementById('delivery-charge').innerText = 20)
    subTotal();
}

subTotal();


// const promoCode = document.getElementById('inputPromo').Value;


document.getElementById('applyPromo').addEventListener('click', function () {
    const promoBox = document.getElementById('inputPromo').value;

    if (promoBox == 'stave' ) {

        const getTotalAmount = parseFloat(document.getElementById('totalAmount').innerText);
        
        const promostave = 100;
        const upTotalAmount = getTotalAmount - promostave;
        const Amount = document.getElementById('totalAmount');
        Amount.innerText = upTotalAmount;



        console.log(upTotalAmount);

    } 
    else {
        document.getElementById('invalidValue').style.display = 'block';
    }
    promoBox.value = " ";
})
