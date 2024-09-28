document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const location = document.getElementById('location').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const guests = document.getElementById('guests').value;
    
    const hotels = [
        { name: 'Hotel A', location: 'New York', price: 100, amenities: ['WiFi', 'Breakfast'] },
        { name: 'Hotel B', location: 'Los Angeles', price: 120, amenities: ['Parking', 'WiFi'] },
        { name: 'Hotel C', location: 'Chicago', price: 80, amenities: ['Breakfast', 'WiFi'] }
    ];
    
    const results = hotels.filter(hotel => hotel.location.toLowerCase().includes(location.toLowerCase()));
    
    const hotelsContainer = document.getElementById('hotels');
    hotelsContainer.innerHTML = '';
    
    results.forEach(hotel => {
        const hotelCard = document.createElement('div');
        hotelCard.className = 'col-md-4';
        hotelCard.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${hotel.name}</h5>
                    <p class="card-text">${hotel.location}</p>
                    <p class="card-text">$${hotel.price} per night</p>
                    <p class="card-text">Amenities: ${hotel.amenities.join(', ')}</p>
                </div>
            </div>
        `;
        hotelsContainer.appendChild(hotelCard);
    });
});
const express = require('express');
const app = express();
const port = 3000;

let rooms = [
    {
        id: 1,
        name: 'Deluxe Room',
        description: 'A luxurious room with a great view.',
        price: 200,
        amenities: ['Free Wi-Fi', 'Breakfast included', 'Pool access'],
        image: 'room1.jpg'
    },
    {
        id: 2,
        name: 'Standard Room',
        description: 'A comfortable room for a budget-friendly stay.',
        price: 100,
        amenities: ['Free Wi-Fi', 'Breakfast included'],
        image: 'room2.jpg'
    }
];

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { rooms: rooms });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});