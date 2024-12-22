// Select the form and table body
const jobForm = document.getElementById('jobForm');
const applicationsTableBody = document.querySelector('#applicationsTable tbody');

// Event listener for form submission
jobForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get input values
    const company = document.getElementById('company').value;
    const position = document.getElementById('position').value;
    const status = document.getElementById('status').value;

    // Create a new row
    const newRow = document.createElement('tr');

    // Add columns to the row
    newRow.innerHTML = `
        <td>${company}</td>
        <td>${position}</td>
        <td>${status}</td>
    `;

    // Append the row to the table body
    applicationsTableBody.appendChild(newRow);

    // Clear the form inputs
    jobForm.reset();
});