function loadBookingHistory() {
    fetch('/booking-history', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        const bookingList = document.getElementById('bookingList');
        bookingList.innerHTML = '';
        data.bookings.forEach(booking => {
            const listItem = document.createElement('li');
            listItem.textContent = `Hotel: ${booking.hotelName}, Check-in: ${booking.checkinDate}, Check-out: ${booking.checkoutDate}`;
            bookingList.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error:', error));
}


