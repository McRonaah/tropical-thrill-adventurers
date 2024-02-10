
    function validateForm() {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var phoneRegex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;

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
            alert('Please enter a valid phone number (e.g., 123-456-7890).');
            return false;
        }

        document.getElementById('bookingForm').style.display = 'none';
        document.getElementById('confirmationMessage').style.display = 'block';
        return false;
    }
