function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => {
        sec.classList.remove('active');
    });

    // Show the selected section

    document.getElementById(sectionId).classList.add('active');
}

// Show home section when page loads

document.addEventListener('DOMContentLoaded', function() {
    showSection('Home');
});