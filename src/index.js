const cardValidator = require('card-validator');

// Function to validate credit card number
function validateCreditCard(number) {
    const validation = cardValidator.number(number);
    if (validation.isValid) {
        return validation.card.type; // Returns the card type (bandeira)
    } else {
        return null;
    }
}


// Example usage
const cardNumber = '5319 8148 9129 3648'; // Replace with the actual card number
const cardType = validateCreditCard(cardNumber);

if (cardType) {
    console.log(`Card type: ${cardType}`);
    
} else {
    console.log('Invalid card number');
}