
//**********Problem solving 1*************

// Declare the seerToMon function 

function seerToMon(seer) {
    let mon = seer / 40;
    return mon;
}

// call the seerToMon function
let rice = 840;
let mon = seerToMon(rice);
console.log('seer to mon convarted result is:', mon);



//**********Problem solving 2*************

let shirtPrice = 100;
let pantPrice = 200;
let shoesPrice = 500;

// Declare the totalSales function

function totalSales(soldQnt) {
    let shirtAmount = shirtQnt * shirtPrice;
    let pantAmount = pantQnt * pantPrice;
    let shoesAmount = shoesQnt * shoesPrice;

    let totalAmount = shirtAmount + pantAmount + shoesAmount;

    return totalAmount;
}

let shirtQnt = 21;
let pantQnt = 31;
let shoesQnt = 54;
let totalQnt = shirtQnt + pantQnt + shoesQnt;

// call the totalSales function

let totalAmount = totalSales(totalQnt);
console.log('Your Total Amount Is :', totalAmount);



//**********Problem solving 3*************

function deliveryCost(perCost) {
    if (perCost <= 100) {
        console.log('Your delivery cost is:', perCost * 100);
    }
    else if (perCost > 100 && perCost <= 200) {
        console.log('Your delivery cost is:', perCost * 80);
    }
    else if (perCost > 200) {
        console.log('Your delivery cost is:', perCost * 50);
    }
    else {
        console.log("Plese enter your valid number");
    }
    return perCost;
}

let delivery = 456;
let totalCost = deliveryCost(delivery);


//**********Problem solving 4*************

// Set the value
var friend = ['saif', 'Ahad', 'pappu', 'rohim'];

console.log(friend);

//Call the function in a variable
var list = friend.find(perfectFriend);

console.log(list);

//Create perfectFriend function
function perfectFriend(friend) {

    return friend.length >= 5;
}




