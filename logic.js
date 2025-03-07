document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('idForm');
    const formContainer = document.querySelector('.form-container');
    const resultContainer = document.querySelector('.result-container');
    const submitBtn = document.getElementById('submitBtn');
    const photoBtn = document.getElementById('photoBtn');
    const returnBtn = document.getElementById('returnBtn');
    const resultBox = document.getElementById('result-box');

    // Hide result container initially
    resultContainer.style.display = 'none';

    //Information submitting button event
    submitBtn.addEventListener('click', function(event) {
        event.preventDefault();

        // Get form values
        const studentName = document.getElementById('name').value.trim();
        const studentID = document.getElementById('id').value.trim();
        const className = document.getElementById('class').value.trim();
        const majorName = document.getElementById('major').value.trim();
        const courseSelector = document.getElementById('course');
        const studentCourse = courseSelector.options[courseSelector.selectedIndex].text;
        
        // Display results
        document.getElementById('resultName').textContent = studentName;
        document.getElementById('resultID').textContent = studentID;
        document.getElementById('resultClass').textContent = className;
        document.getElementById('resultMajor').textContent = majorName;
        document.getElementById('resultCourse').textContent = studentCourse;

        // Hide form container and show result container
        formContainer.style.display = 'none';
        resultContainer.style.display = 'block';
    });

    returnBtn.addEventListener('click', function () {
        // Hide result container and show form container
        resultContainer.style.display = 'none';
        formContainer.style.display = 'block';
    });

    //Screen capturing button event
    photoBtn.addEventListener('click', function () {
        domtoimage.toPng(resultBox)
            .then(function(dataUrl) {
                let link = document.createElement('a');
                link.href = dataUrl;
                link.download = 'result.png';
                link.click();
            })
            .catch(function(error) {
                console.error('Error:', error);
            });
    });
});
