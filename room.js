document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            
            const roomType = this.closest('.room').querySelector('h3').textContent;
            const price = this.closest('.room').querySelector('p').textContent.match(/\d+/)[0];

            const bookingDetails = {
                roomType,
                price,
                checkin: sessionStorage.getItem('checkin'),
                checkout: sessionStorage.getItem('checkout'),
                adults: sessionStorage.getItem('adults'),
                children: sessionStorage.getItem('children'),
                rooms: sessionStorage.getItem('rooms'),
            };

            fetch('http://localhost:3000/api/book', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(bookingDetails)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                alert('Booking successful!');
                console.log('Booking details:', data);
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred during booking: ' + error.message);
            });
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const filterForm = document.getElementById('filter-form');
    const rooms = document.querySelectorAll('.room');

    filterForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get selected filters
        const formData = new FormData(filterForm);
        const filters = {
            wifi: formData.has('wifi'),
            breakfast: formData.has('breakfast'),
            view: formData.has('view'),
            minibar: formData.has('minibar'),
            butler: formData.has('butler'),
        };

        // Apply filters to rooms
        rooms.forEach(room => {
            // Check each filter
            const hasWifi = room.innerText.includes('Free Wi-Fi');
            const hasBreakfast = room.innerText.includes('Breakfast included');
            const hasView = room.innerText.includes('Sea view');
            const hasMinibar = room.innerText.includes('Complimentary minibar');
            const hasButler = room.innerText.includes('Private butler service');

            // Determine if the room matches the selected filters
            const matchesFilters = (!filters.wifi || hasWifi) &&
                                   (!filters.breakfast || hasBreakfast) &&
                                   (!filters.view || hasView) &&
                                   (!filters.minibar || hasMinibar) &&
                                   (!filters.butler || hasButler);

            // Show or hide room based on filter match
            room.style.display = matchesFilters ? 'block' : 'none';
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Booking button functionality
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            
            const roomType = this.closest('.room').querySelector('h3').textContent;
            const price = this.closest('.room').querySelector('p').textContent.match(/\d+/)[0];

            const bookingDetails = {
                roomType,
                price,
                checkin: sessionStorage.getItem('checkin'),
                checkout: sessionStorage.getItem('checkout'),
                adults: sessionStorage.getItem('adults'),
                children: sessionStorage.getItem('children'),
                rooms: sessionStorage.getItem('rooms'),
            };

            fetch('http://localhost:3000/api/book', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(bookingDetails)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                alert('Booking successful!');
                console.log('Booking details:', data);
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred during booking: ' + error.message);
            });
        });
    });

    // Filtering functionality
    const filterForm = document.getElementById('filter-form');
    const rooms = document.querySelectorAll('.room');

    filterForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get selected filters
        const formData = new FormData(filterForm);
        const filters = {
            wifi: formData.has('wifi'),
            breakfast: formData.has('breakfast'),
            view: formData.has('view'),
            minibar: formData.has('minibar'),
            butler: formData.has('butler'),
        };

        // Apply filters to rooms
        rooms.forEach(room => {
            const textContent = room.querySelector('ul').textContent;
            
            const hasWifi = textContent.includes('Free Wi-Fi');
            const hasBreakfast = textContent.includes('Breakfast included');
            const hasView = textContent.includes('Sea view') || textContent.includes('Beach view') || textContent.includes('Panoramic view');
            const hasMinibar = textContent.includes('Complimentary minibar');
            const hasButler = textContent.includes('Private butler service');

            // Determine if the room matches the selected filters
            const matchesFilters = (!filters.wifi || hasWifi) &&
                                   (!filters.breakfast || hasBreakfast) &&
                                   (!filters.view || hasView) &&
                                   (!filters.minibar || hasMinibar) &&
                                   (!filters.butler || hasButler);

            // Show or hide room based on filter match
            room.style.display = matchesFilters ? 'block' : 'none';
        });
    });
});
