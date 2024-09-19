function calculateAge() {
             const dobInput = document.getElementById('dob').value;
             
             // Validation: Check if a date has been selected
             if (!dobInput) {
                 alert("Please select your date of birth.");
                 return;
             }
         
             const dob = new Date(dobInput);
             const currentDate = new Date();
         
             if (dob > currentDate) {
                 alert("Date of birth cannot be in the future!");
                 return;
             }
         
             // Age calculation
             const ageInMilliseconds = currentDate - dob;
             const ageDate = new Date(ageInMilliseconds);
             const years = ageDate.getUTCFullYear() - 1970; // Subtract 1970 to get correct year difference
         
             let months = currentDate.getMonth() - dob.getMonth();
             if (months < 0) {
                 months += 12;
             }
         
             let days = currentDate.getDate() - dob.getDate();
             if (days < 0) {
                 const previousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
                 days += previousMonth.getDate();
                 months--;
             }
         
             // Show the result with animation
             displayAgeResult(years, months, days);
         }
         
         function displayAgeResult(years, months, days) {
             const ageResult = document.getElementById('ageResult');
             
             // Adding fade-in effect
             ageResult.style.opacity = 0;
             ageResult.textContent = `${years} years, ${months} months, ${days} days`;
             
             setTimeout(() => {
                 ageResult.style.opacity = 1;
             }, 100); // Adding small delay for a smooth transition
         }
         