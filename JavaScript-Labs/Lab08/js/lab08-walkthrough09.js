/* code goes here */


var isCanadian = true;

function calculateTax(amount) {
    return amount * taxRate();

    function taxRate() {
        if (isCanadian) {
            return 0.05;
        } else {
            return 0.0;
        }
    }
}

function calculateTotal(price, quantity) {
    return (price * quantity) +
           calculateTax(price * quantity);
}
