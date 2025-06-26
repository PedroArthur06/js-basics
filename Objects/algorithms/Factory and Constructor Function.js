// factory function
function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode
  };
} 
let address1 = createAddress('456 Elm St', 'Othertown', 'NY');
console.log(address1); 

// constructor function
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}