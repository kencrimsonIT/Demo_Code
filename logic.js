document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('idForm');
    const submitBtn = document.getElementById('submitBtn');
    const photoBtn = document.getElementById('photoBtn');
    const resultBox = document.getElementById('result-box');

    //Information submitting button event
    submitBtn.addEventListener('click', function(event) {
        event.preventDefault();

        // Get form values
        const studentName = document.getElementById('name').value.trim();
        const studentID = document.getElementById('id').value.trim();
        const className = document.getElementById('class').value.trim();
        const majorName = document.getElementById('major').value.trim();
        const studentCourse = document.getElementById('course').value.trim();
        
        // Display results
        document.getElementById('resultName').textContent = studentName;
        document.getElementById('resultID').textContent = studentID;
        document.getElementById('resultClass').textContent = className;
        document.getElementById('resultMajor').textContent = majorName;
        document.getElementById('resultCourse').textContent = studentCourse;
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
