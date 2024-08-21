
console.log(`-------------------------Assignment - constructor function---------------------------------------`);

function Bank(bankName,location,ifscCode,branchCode){
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
}
const bank1 = new Bank("YES Bank","Mumbai","YES00012","000333")
console.log(`Bank Details -> BankName: ${bank1.bankName}, Location: ${bank1.location}, IFSCCode: ${bank1.ifscCode}, BranchCode: ${bank1.branchCode}`);

const bank2 = new Bank("SBI Bank","Pune","SBIN0001","111222");
console.log(`Bank Details -> BankName: ${bank2.bankName}, Location: ${bank2.location}, IFSCCode: ${bank2.ifscCode}, BranchCode: ${bank2.branchCode}`);

const bank3 = new Bank("MAH Bank","Nagpur","MAH00011","000111")
console.log(`Bank Details -> BankName: ${bank3.bankName}, Location: ${bank3.location}, IFSCCode: ${bank3.ifscCode}, BranchCode: ${bank3.branchCode}`);

const bank4 = new Bank("AXIS Bank","Amravati","AXIS00012","000222")
console.log(`Bank Details -> BankName: ${bank4.bankName}, Location: ${bank4.location}, IFSCCode: ${bank4.ifscCode}, BranchCode: ${bank4.branchCode}`);

Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime = "6 PM IST";
console.log(`--------------------------Prototype - object SBIBank---------------------------------------------`);
console.log(`SBI Bank Details  -> OpenTime : ${bank2.openTime}, CloseTime : ${bank2.closeTime}`);

console.log(`--------------------------Prototype - object AxisBank--------------------------------------------`);
console.log(`AXISBank Details  -> BankName : ${bank4.bankName}, closeTime : ${bank4.closeTime}`);

console.log(`--------------------------Prototype - object YESBank---------------------------------------------`);
console.log(`Yes Bank Details  -> BAnkName : ${bank1.bankName}, BranchCode : ${bank1.branchCode}, OpenTime : ${bank1.openTime}`);
