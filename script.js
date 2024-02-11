
    function validateForm() {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var phoneRegex = /^\+\d{3}\d{9}$/;

        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;

        if (name.trim() === '' || email.trim() === '' || phone.trim() === '') {
            alert('Please fill in all required fields.');
            return false;
        }

        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        if (!phoneRegex.test(phone)) {
            alert('Please enter a valid phone number (e.g., +254702233145).');
            return false;
        }

        document.getElementById('bookingForm').style.display = 'none';
        document.getElementById('confirmationMessage').style.display = 'block';
        return false;
    }
