// Main Script for Urban Company Services Website

document.addEventListener('DOMContentLoaded', () => {
    console.log('Home Decor Data Website Loaded');

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });

                    // Close mobile menu if open
                    const mobileMenu = document.getElementById('mobileMenu');
                    if (mobileMenu.classList.contains('active')) {
                        mobileMenu.classList.remove('active');
                    }
                }
            }
        });
    });

    // Close Modal when clicking outside
    window.onclick = function (event) {
        const modal = document.getElementById('bookingModal');
        if (event.target == modal) {
            closeBookingModal();
        }
    }

    // Set minimum date to today
    const dateInput = document.getElementById('bookingDate');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }
});

// Mobile Menu Toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('active');
}

// Open Booking Modal
function openBookingModal(serviceName = '') {
    const modal = document.getElementById('bookingModal');
    const serviceSelect = document.getElementById('serviceSelect');

    if (serviceName) {
        serviceSelect.value = serviceName;
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

// Close Booking Modal
function closeBookingModal() {
    const modal = document.getElementById('bookingModal');
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
}

// Handle Form Submission
function handleBooking(event) {
    event.preventDefault();

    // Get form values
    const service = document.getElementById('serviceSelect').value;
    const date = document.getElementById('bookingDate').value;
    const time = document.getElementById('bookingTime').value;
    const name = document.getElementById('fullName').value;

    // Simple Validation (HTML5 validation does most work)
    if (!service || !date || !time || !name) {
        alert('Please fill in all required fields.');
        return;
    }

    // Mock Submission Logic
    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerText;

    submitBtn.innerText = 'Processing...';
    submitBtn.disabled = true;

    // Simulate API call
    setTimeout(() => {
        closeBookingModal();

        // Show Success Notification
        const notification = document.getElementById('notification');
        notification.innerText = `Booking Confirmed for ${service} on ${date} at ${time}!`;
        notification.classList.add('show');

        // Reset Form
        document.getElementById('bookingForm').reset();
        submitBtn.innerText = originalText;
        submitBtn.disabled = false;

        // Hide notification after 3 seconds
        setTimeout(() => {
            notification.classList.remove('show');
        }, 4000);

    }, 1500);
}
