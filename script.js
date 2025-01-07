document.getElementById('reservation-form').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page refresh
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const checkIn = document.getElementById('check-in').value;
    const roomType = document.getElementById('room-type').value;

    alert(`Reservation Confirmed:
    Name: ${name}
    Email: ${email}
    Check-In: ${checkIn}
    Room Type: ${roomType}`);
});
