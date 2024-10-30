
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("button[type='submit']");
    form.addEventListener("click", (event) => {
        event.preventDefault(); 
        validateForm(); 
    });
});

function validateForm() {
    const fullName = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const country = document.getElementById("country").value;
    const languages = document.querySelector("input[name='languages']:checked");
    const whyWork = document.getElementById("whywork").value.trim();

    
    if (!fullName) {
        alert("Full name is required.");
        return;
    }
    if (!email) {
        alert("Email is required.");
        return;
    }
    if (!country) {
        alert("Country selection is required.");
        return;
    }
    if (!languages) {
        alert("Please specify if you speak any languages.");
        return;
    }
    if (!whyWork) {
        alert("Please tell us why you want to work with us.");
        return;
    }
    alert("Form submitted successfully!");
}