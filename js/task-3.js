// function checkForSpam(message) {
//     const audit_1 = "spam";
//     const  audit_2 = "sale";
//     const lowerMessege = message.toLowerCase();
//     if (lowerMessege.includes(audit_1) || lowerMessege.includes(audit_2)) {
//         return true;
//     } else { 
//         return false;
//     }
// }

function checkForSpam(message) {
    const lowerMessage = message.toLowerCase();
    return lowerMessage.includes('spam') || lowerMessage.includes('sale');
}

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true