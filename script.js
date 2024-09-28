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



document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    //Simulate validation (you can replace this with actual validation logic)
    var username = document.getElementById('username').value;
   var password = document.getElementById('password').value;

    if (username === 'user' && password === 'password') {
        // Redirect to a different page or show a success message
        alert('Login successful!');
         Example: window.location.href = 'index.html';
    } else {
        //Display error message
      var errorMessage = document.getElementById('error-msg');
     errorMessage.textContent = 'Invalid username or password. Please try again.';
   }
})





function redirectToLogin() {
    window.location.href = 'index.html'; // Replace 'index.html' with your login page URL
}




import express from 'express';
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


document.addEventListener("DOMContentLoaded", function() {
    // Dynamic Current Year
    document.getElementById("current-year").textContent = new Date().getFullYear();

    // Newsletter Subscription Form Handling
    const form = document.getElementById("newsletter-form");
    const emailInput = document.getElementById("email-input");
    const message = document.getElementById("newsletter-message");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const email = emailInput.value.trim();

        if (validateEmail(email)) {
            message.textContent = "Thank you for subscribing!";
            message.style.color = "#f1c40f";
            emailInput.value = "";
        } else {
            message.textContent = "Please enter a valid email address.";
            message.style.color = "red";
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Back to Top Button
    const backToTopButton = document.getElementById("back-to-top");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 200) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    backToTopButton.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(event.target);

    // Convert FormData to a plain object (optional)
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Send the form data using fetch
    fetch('/submit-login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json()) // Assuming the server responds with JSON
    .then(result => {
        console.log('Success:', result);
        // Handle success (e.g., show a message to the user)
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle error (e.g., show an error message)
    });
});



document.getElementById('newsletter-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting the traditional way

    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('newsletter-message');
    const modal = document.getElementById('confirmation-modal');
    const closeButton = document.querySelector('.close-button');

    if (validateEmail(email)) {
        // Show the modal popup as a confirmation
        modal.style.display = 'block';

        // Reset the form
        document.getElementById('newsletter-form').reset();

        // Hide the message, if any
        message.textContent = '';
    } else {
        // Show an error message if the email is invalid
        message.textContent = 'Please enter a valid email address.';
        message.style.color = 'red';
    }

    // Function to close the modal when the close button is clicked
    closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });
});

// Validate email address format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Close modal if user clicks outside the modal content
window.onclick = function (event) {
    const modal = document.getElementById('confirmation-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};


const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
        backToTopButton.style.opacity = '1';
    } else {
        backToTopButton.style.opacity = '0';
        setTimeout(function() {
            if (window.scrollY <= 300) {
                backToTopButton.style.display = 'none';
            }
        }, 300);
    }
});

backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

