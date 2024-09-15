"use strict";
function printUserDetails(user) {
    console.log(`User ID: ${user.id}`);
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);
    if (user.membershipLevel) {
        console.log(`Membership Level: ${user.membershipLevel}`);
    }
    else {
        console.log('Standard User');
    }
}
const standardUser = {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com'
};
const premiumUser = {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    membershipLevel: 'Gold'
};
console.log('Standard User Details:');
printUserDetails(standardUser);
console.log('\nPremium User Details:');
printUserDetails(premiumUser);
