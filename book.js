document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const destination = document.getElementById('destination').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const adults = document.getElementById('adults').value;
    const children = document.getElementById('children').value;
    const rooms = document.getElementById('rooms').value;
    const roomType = document.getElementById('room-type').value;
    const priceRange = document.getElementById('price-range').value;

    const searchParams = {
        destination,
        checkin,
        checkout,
        adults,
        children,
        rooms,
        roomType,
        priceRange
    };

    fetch('https://api.example.com/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(searchParams)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        const resultsContainer = document.getElementById('results');
        resultsContainer.innerHTML = ''; // Clear previous results

        data.results.forEach(result => {
            const resultDiv = document.createElement('div');
            resultDiv.classList.add('result-item');
            resultDiv.innerHTML = `
                <h3>${result.hotelName}</h3>
                <p>${result.location}</p>
                <p>Price: $${result.price}</p>
            `;
            resultsContainer.appendChild(resultDiv);
        });

        alert('Search results displayed.');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while searching: ' + error.message);
    });
});

function updatePrice(value) {
    document.getElementById('price-value').textContent = value;
}

document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const adults = document.getElementById('adults').value;
    const children = document.getElementById('children').value;
    const rooms = document.getElementById('rooms').value;

    sessionStorage.setItem('checkin', checkin);
    sessionStorage.setItem('checkout', checkout);
    sessionStorage.setItem('adults', adults);
    sessionStorage.setItem('children', children);
    sessionStorage.setItem('rooms', rooms);

    // Redirect to rooms page to continue booking
    window.location.href = 'rooms.html';
});
