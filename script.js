document.getElementById("ageForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const dob = new Date(document.getElementById("dob").value);
    const today = new Date();
    
    let ageYears = today.getFullYear() - dob.getFullYear();
    let ageMonths = today.getMonth() - dob.getMonth();
    let ageDays = today.getDate() - dob.getDate();

    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); // Days in previous month
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    // Update the result in the HTML
    const ageResult = document.getElementById("ageResult");
    ageResult.textContent = `${ageYears} years, ${ageMonths} months, ${ageDays} days`;

    // Add animation by toggling the class
    const resultDiv = document.querySelector('.result');
    resultDiv.classList.remove('visible'); // Reset opacity before showing new result

    // Trigger reflow to restart the animation
    void resultDiv.offsetWidth;

    resultDiv.classList.add('visible'); // Fade in the result
});
