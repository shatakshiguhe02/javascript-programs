
function eligibilityCheck(gradScore, hscScore, sscScore, candidateName) {
    console.log(`1. Given criteria's are: ${gradScore}, ${hscScore}, ${sscScore}, ${candidateName}`);
    var result = gradScore >= 70 || hscScore >= 80 || sscScore > 90 ? `Congrats ${candidateName}you are eligible for TSC interview` : `unfortunately ${candidateName}you are not eligible for TSC interview`;
    console.log(result);
    console.log("----------------------------------------------------");
}
eligibilityCheck(80, 86, 90, "Shatakshi ");
eligibilityCheck(70, 65, 55, "Priya ");
eligibilityCheck(60, 79, 88, "Tanvi ");
