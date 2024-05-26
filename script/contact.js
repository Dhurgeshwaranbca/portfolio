function sendMail() {
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const email = 'dhurgeshbca2021@gmial.com';
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

    window.location.href = mailtoLink;
}
