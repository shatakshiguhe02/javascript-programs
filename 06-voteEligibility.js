console.log("=======Vote Eligibility - ifelse statement=======");

var voteEligible = function (age) {
    if (age == 0 || age < 0 || age > 130 || age == null) {
        console.log(`Your age is ${age} : Invalid data : ${age}`);
        console.log("-------------------------------------------------");
    } else {
        console.log(`Your age is ${age} : Valid data : ${age}`);
        if (age < 18 || age >= 18) {
            console.log(`Congrats! you are Eligible for vote`);
            console.log("-------------------------------------------------");
        } else {
            console.log(`Unfortunately, you are Not Eligible for vote`);
        }
    }
}
voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(null);