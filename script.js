// Запись на прием
document.getElementById('appointmentForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('confirmation').style.display = 'block';
    this.reset();
});
document.getElementById('clearButton')?.addEventListener('click', function() {
    document.getElementById('appointmentForm').reset();
    document.getElementById('confirmation').style.display = 'none';
});

// Техподдержка
document.getElementById('supportForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Сообщение отправлено в техподдержку');
    this.reset();
});

// Жалоба
document.getElementById('complaintForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Жалоба отправлена.');
    this.reset();
});

// Оплата
document.getElementById('paymentForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Оплата успешно проведена!');
    this.reset();
});
