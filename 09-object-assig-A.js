
console.log(`---------------------------------Assignment-A-object----------------------------------------------------------------`);

console.log(`===============================1. Object Details====================================================================`);
let professor = {
    firstName    : "David",
    lastName     : "Walter",
    profession   : "Senior Head",
    age          : 58,
    university   : "Princeton",
    certificates      : [
        "HackerRank Participation",
        "Certificate in IFE course",
        "Certificate in Adv programming"
    ],
    degrees      : {
        engineering   : " CSC",
        PHD           : "Adv COmputing"
    }
};
console.log(professor);

console.log(`===============================5. Adding new property===============================================================`);
professor.totalExperience = "14 years";
console.log(Object.keys(professor));


console.log(`===============================6. Modifying the University Name=====================================================`);
professor.university = "Boston"
console.log(professor);


console.log(`===============================7. Adding new certificate at second index============================================`);
professor.certificates.splice(2,0,"Oracle Certified");
console.log(professor.certificates);

console.log(`===============================8. Last element of the array :certificates===========================================`);
console.log(professor.certificates[professor.certificates.length-1]);

console.log(`===============================9. Traverse the array using for loop ================================================`);
for (const key in professor.certificates) {
    if (Object.prototype.hasOwnProperty.call(professor.certificates, key)) {
        const element = professor.certificates[key];
        console.log(`${key},${element}`);
    }
}

console.log(`===============================10. Complete object on console=======================================================`);
for (const key in professor) {
    if (Object.prototype.hasOwnProperty.call(professor, key)) {
        const element = professor[key];
        console.log(`${key} : ${element}`);
        
    }
}

console.log(`====================================================================================================================`);
