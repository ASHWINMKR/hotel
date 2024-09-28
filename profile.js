logoutButton.addEventListener('click', () => {
    alert('Logging out...');
});


document.addEventListener('DOMContentLoaded', () => {
   
    const tabLinks = document.querySelectorAll('.account-settings-links a');
    const tabContents = document.querySelectorAll('.tab-pane');
    
    tabLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            tabLinks.forEach(link => link.classList.remove('active'));
            link.classList.add('active');
            
            const targetId = link.getAttribute('href').substring(1);
            tabContents.forEach(content => {
                if(content.id === targetId) {
                    content.classList.add('active', 'show');
                } else {
                    content.classList.remove('active', 'show');
                }
            });
        });
    });

    // Handle profile picture upload
    const fileInput = document.querySelector('.account-settings-fileinput');
    const profilePicture = document.querySelector('.profile-container .profile-picture');

    fileInput.addEventListener('change', () => {
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                profilePicture.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    // Handle form submissions
    const saveChangesButton = document.querySelector('.btn-primary');
    saveChangesButton.addEventListener('click', () => {
        alert('Changes saved!');
        // Implement AJAX call here to save changes to the server
    });

    const cancelButton = document.querySelector('.btn-default');
    cancelButton.addEventListener('click', () => {
        if (confirm('Are you sure you want to cancel? All unsaved changes will be lost.')) {
            location.reload();
        }
    });

    // Handle confirmation email resend
    const resendConfirmationLink = document.querySelector('.alert a');
    resendConfirmationLink.addEventListener('click', () => {
        alert('Confirmation email resent!');
        // Implement AJAX call here to resend the confirmation email
    });

    // Handle social media connections
    const socialConnectButtons = document.querySelectorAll('.btn-twitter, .btn-facebook, .btn-instagram');
    socialConnectButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert(`Connecting to ${button.textContent.trim()}...`);
            // Implement social media connection logic here
        });
    });

    // Handle switcher toggles
    const switchers = document.querySelectorAll('.switcher-input');
    switchers.forEach(switcher => {
        switcher.addEventListener('change', () => {
            const label = switcher.nextElementSibling.nextElementSibling.textContent.trim();
            if (switcher.checked) {
                alert(`Enabled: ${label}`);
            } else {
                alert(`Disabled: ${label}`);
            }
            // Implement logic to handle switch changes here
        });
    });
});




document.getElementById('save-changes-btn').addEventListener('click', function() {
    var profilePhoto = document.getElementById('profile-photo').files[0];
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var currentPassword = document.getElementById('current-password').value;
    var newPassword = document.getElementById('new-password').value;
    var repeatNewPassword = document.getElementById('repeat-new-password').value;
    var bio = document.getElementById('bio').value;
    var birthday = document.getElementById('birthday').value;
    var country = document.getElementById('country').value;
    var phone = document.getElementById('phone').value;
    var website = document.getElementById('website').value;
    var twitter = document.getElementById('twitter').value;
    var facebook = document.getElementById('facebook').value;
    var googlePlus = document.getElementById('google-plus').value;
    var linkedin = document.getElementById('linkedin').value;
    var instagram = document.getElementById('instagram').value;

    // For demonstration purposes, we'll just log the values to the console
    console.log({
        profilePhoto: profilePhoto,
        username: username,
        name: name,
        email: email,
        currentPassword: currentPassword,
        newPassword: newPassword,
        repeatNewPassword: repeatNewPassword,
        bio: bio,
        birthday: birthday,
        country: country,
        phone: phone,
        website: website,
        twitter: twitter,
        facebook: facebook,
        googlePlus: googlePlus,
        linkedin: linkedin,
        instagram: instagram
    });

    // Here you can make an AJAX request to save the data on the server
    // Example:
    // $.ajax({
    //     url: '/save-profile',
    //     type: 'POST',
    //     data: {
    //         username: username,
    //         name: name,
    //         email: email,
    //         // ...other fields
    //     },
    //     success: function(response) {
    //         // handle success
    //     },
    //     error: function(error) {
    //         // handle error
    //     }
    // });
});
