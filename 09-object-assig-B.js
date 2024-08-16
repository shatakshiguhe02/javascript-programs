console.log(`===============Assignment - B ============================================================================`);

console.log(`----------------------# Bank-1 (SBI)----------------------------------------------------------------------`);
const sbiBank = {
    bankName     : "SBI bank",
    location     : "New Delhi",
    accountNo    : 41112222333333,
    ifsc         : "SBI000123",
    interestRate : 5.5,
    showDetails  : function(){
        console.log(`Bank name : ${this.bankName}, Location: ${this.location}, AccountNo: ${this.accountNo}, IFSC: ${this.ifsc}, InterestRate: ${this.interestRate}`)   
    } 
}
sbiBank.showDetails();

console.log(`----------------------# Bank-2 (AXIS)---------------------------------------------------------------------`);
const axisBank = {
    bankName     : "AXIS bank",
    location     : "Pune",
    accountNo    : 41112200033333,
    ifsc         : "AXIS0000123",
    interestRate : 7,
    showDetails  : function(){
        console.log(`Bank name : ${this.bankName}, Location: ${this.location}, AccountNo: ${this.accountNo}, IFSC: ${this.ifsc}, InterestRate: ${this.interestRate}`)   
    } 
}
axisBank.showDetails();

console.log(`----------------------# Bank-3 (HDFC)---------------------------------------------------------------------`);
const hdfcBank = {
    bankName     : "HDFC bank",
    location     : "Nagpur",
    accountNo    : 41001122333333,
    ifsc         : "HDFCN000143",
    interestRate : 8.5,
    showDetails  : function(){
        console.log(`Bank name : ${this.bankName}, Location: ${this.location}, AccountNo: ${this.accountNo}, IFSC: ${this.ifsc}, InterestRate: ${this.interestRate}`)   
    } 
}
hdfcBank.showDetails();

console.log(`----------------------# Bank-4 (YES)----------------------------------------------------------------------`);
const yesBank = {
    bankName     : "YES bank",
    location     : "Amravati",
    accountNo    : 411122000000999,
    ifsc         : "YESB000123",
    interestRate : 6.5,
    showDetails  : function(){
        console.log(`Bank name : ${this.bankName}, Location: ${this.location}, AccountNo: ${this.accountNo}, IFSC: ${this.ifsc}, InterestRate: ${this.interestRate}`)   
    } 
}
yesBank.showDetails();

