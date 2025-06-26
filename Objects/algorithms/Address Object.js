const address = {
  street: '123 Main St',
  city: 'Anytown',
  zipCode: 'CA',
}

function showAdress() {
  console.log(`Address: ${address.street}, ${address.city}, ${address.zipCode}`);
}

showAdress(address);