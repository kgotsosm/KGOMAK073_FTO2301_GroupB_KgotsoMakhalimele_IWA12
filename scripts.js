// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
};

// Get all relevant elements by their class or id
const book1 = document.getElementById('book1');
const book2 = document.getElementById('book2');
const book3 = document.getElementById('book3');
const reserve1 = book1.querySelector('.reserve');
const reserve2 = book2.querySelector('.reserve');
const reserve3 = book3.querySelector('.reserve');
const checkout1 = book1.querySelector('.checkout');
const checkout2 = book2.querySelector('.checkout');
const checkout3 = book3.querySelector('.checkout');
const checkin1 = book1.querySelector('.checkin');
const checkin2 = book2.querySelector('.checkin');
const checkin3 = book3.querySelector('.checkin');
const status1 = book1.querySelector('.status');
const status2 = book2.querySelector('.status');
const status3 = book3.querySelector('.status');

// Update each book's elements based on its status
status1.style.color = STATUS_MAP.overdue.color;
status2.style.color = STATUS_MAP.reserved.color;
status3.style.color = STATUS_MAP.shelf.color;

reserve1.disabled = !STATUS_MAP.shelf.canReserve;
reserve2.disabled = !STATUS_MAP.reserved.canReserve;
reserve3.disabled = !STATUS_MAP.shelf.canReserve;

checkout1.disabled = !STATUS_MAP.shelf.canCheckout;
checkout2.disabled = !STATUS_MAP.reserved.canCheckout;
checkout3.disabled = !STATUS_MAP.shelf.canCheckout;

checkin1.disabled = !STATUS_MAP.overdue.canCheckIn;
checkin2.disabled = !STATUS_MAP.checkedOut.canCheckIn;
checkin3.disabled = !STATUS_MAP.shelf.canCheckIn;

// Set color of disabled buttons to grayscale
[reserve1, checkout1, checkin1, reserve2, checkout2, checkin2, reserve3, checkout3, checkin3].forEach(button => {
    if (button.disabled) {
        button.style.filter = 'grayscale(1)';
    }
});
