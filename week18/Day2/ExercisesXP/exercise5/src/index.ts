interface User {
  readonly id: number;
  name: string;
  email: string;
}

interface PremiumUser extends User {
  membershipLevel?: 'Silver' | 'Gold' | 'Platinum';
}

function printUserDetails(user: PremiumUser): void {
  console.log(`User ID: ${user.id}`);
  console.log(`Name: ${user.name}`);
  console.log(`Email: ${user.email}`);
  if (user.membershipLevel) {
      console.log(`Membership Level: ${user.membershipLevel}`);
  } else {
      console.log('Standard User');
  }
}


const standardUser: PremiumUser = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com'
};


const premiumUser: PremiumUser = {
  id: 2,
  name: 'Jane Smith',
  email: 'jane@example.com',
  membershipLevel: 'Gold'
};

console.log('Standard User Details:');
printUserDetails(standardUser);

console.log('\nPremium User Details:');
printUserDetails(premiumUser);
