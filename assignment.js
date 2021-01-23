// Problem No1: Conversion of kilometer to Meter:
function kilometerToMeter(kilometer) {
    var meter;
    if (kilometer > 0) {
        meter = kilometer * 1000;
        return meter;
    } else {
        return "Invalid";
    }

}



// Problem No2: Budget Calculator:
function budgetCalculator(qWatch, qMobile, qLaptop) {
    var watchCost = 50 * qWatch;
    var mobileCost = 100 * qMobile;
    var laptopCost = 500 * qLaptop;

    var total = watchCost + mobileCost + laptopCost;
    return total;
}




//Problem No-3: HotelCost
function hotelCost(days) {
    var cost;
    if (days > 0) {
        if (days <= 10) {
            cost = 100 * days;
            return cost;
        } else if (days <= 20) {
            var firstpart = 10 * 100;
            var remain = days - 10;
            var secondpart = 80 * remain;
            cost = firstpart + secondpart;
            return cost;
        } else {
            var firstpart = 10 * 100;
            var secondpart = 10 * 80;
            var remain = days - 20;
            var thirdpart = 50 * remain;
            cost = firstpart + secondpart + thirdpart;
            return cost;
        }
    } else {
        return "Days must be positive";
    }
}



//Problem No:4 megaFriend
function megaFriend(friends) {
    var large = friends[0];
    for (var i = 0; i < friends.length; i++) {
        if (friends[i].length > large.length) {
            large = friends[i];
        }
    }
    return large;
}