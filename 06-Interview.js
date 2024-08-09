console.log("==============Interview ifelse-statement=================");

var interviewEligibility = function(gradScore, hscScore, sscScore, candidateName){
   if (gradScore>=70 || hscScore>= 80 || sscScore>90) {
    console.log(`Congrats! Hey, ${candidateName} you are eligible for TCS interview`);
    console.log("---------------------------------------------------------");
   } else {
    console.log(`Hey, unfortunately you are not eligible for interview`);
   }
}
interviewEligibility(80,86,90, "Jackie");
interviewEligibility(70,65,55, "Alex");
interviewEligibility(60,79,88, "Cloe");
