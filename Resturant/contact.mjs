export const contactInfo = {
    phone: "123-456-7890",
    email: "info@myrestaurant.com",
};

export function displayContactInfo() {
    const contactElement = document.getElementById('contact-info');
    contactElement.textContent = `Phone: ${contactInfo.phone}, Email: ${contactInfo.email}`;
}