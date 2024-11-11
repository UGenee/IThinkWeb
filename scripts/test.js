// Search Function
function searchCourses() {
  const input = document.getElementById('search-input').value.toLowerCase();
  const courses = document.querySelectorAll('.course-card');

  courses.forEach((course) => {
    const courseName = course.getAttribute('data-course-name').toLowerCase();
    if (courseName.includes(input)) {
      course.style.display = '';
    } else {
      course.style.display = 'none';
    }
  });
}
