function perfectFriend(friendList) {

    var words = friendList.split(" ");
    var aboveFive = "";

    for (var words of words) {
        if (words.length > aboveFive.length) aboveFive = words;
    }
    return aboveFive.length;
}
var friendlist = ['jhon', 'saiful', 'selim', 'mahmud'];

perfectFriend("saiful alam shakil mahmud");


// function perfectFriend(str) {

//     var words = str.split(" ");
//     var longest = "";

//     for (var words of words) {
//         if (word.length > longest.length) longest = word;
//     }
//     return longest;
// }
// // var friendlist = ['jhon', 'saiful', 'selim', 'mahmud'];
function perfectFriend(str) {
    return str.split(" ").sort(function (a, b) { return b.length - a.length })[0];
}
perfectFriend("saiful alam shakil mahmud");






// for (var friendlist of friendlist) {
//     console.log(friendlist);
// }