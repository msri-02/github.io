//  generated with the help of ChatGPT
let allCourses = [];

function loadCourses() {
  fetch('courses.json')
    .then(response => response.json())
    .then(data => {
      allCourses = data;
      renderCourses(data);
    })
    .catch(err => console.error('Failed to load courses:', err));
}

function renderCourses(courses) {
  const container = document.getElementById('courses');
  container.innerHTML = '';
  courses.forEach(course => {
    const div = document.createElement('div');
    div.className = `course ${course.category}`;
    div.innerHTML = `<strong>${course.title}</strong> – ${course.name} <span style="float:right;">(${course.quarter})</span>`;
    container.appendChild(div);
  });
}

function filterCourses(category) {
  if (category === 'all') {
    renderCourses(allCourses);
  } else {
    const filtered = allCourses.filter(c => c.category === category);
    renderCourses(filtered);
  }
}

document.addEventListener('DOMContentLoaded', loadCourses);
