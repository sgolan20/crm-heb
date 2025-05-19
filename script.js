document.addEventListener('DOMContentLoaded', function() {
  // Check if the contact form and its button exist on the page
  const contactForm = document.querySelector('form'); // Assuming one form per page for simplicity
  if (contactForm) {
    const submitButton = contactForm.querySelector('button[type="submit"]');
    if (submitButton && document.body.contains(submitButton)) { // Ensure button is in contact.html
        // Try to identify if this is the contact page more specifically
        // For example, by checking the document title or a specific element unique to contact.html
        if (document.title.includes("Contact Us")) {
             submitButton.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent actual form submission
                alert('Thank you for your message! (This is a demo - no data was sent)');
            });
        }
    }
  }
});
