const courses = [
  { id: 1, name: "WDD 130", credits: 3, completed: true, type: "WDD" },
  { id: 2, name: "CSE 121B", credits: 3, completed: false, type: "CSE" },
  { id: 3, name: "WDD 230", credits: 4, completed: true, type: "WDD" },
  { id: 4, name: "CSE 211", credits: 4, completed: false, type: "CSE" },
];

const courseFilter = document.querySelector("#course-filter");
const courseList = document.querySelector("#course-list");

// Function to display courses
function displayCourses(filterType) {
  let filteredCourses = courses;

  if (filterType !== "all") {
    filteredCourses = courses.filter((course) => course.type === filterType);
  }

  courseList.innerHTML = filteredCourses
    .map(
      (course) => `
        <div class="course-card ${course.completed ? "completed" : ""}">
            <h3>${course.name}</h3>
            <p>${course.credits} credits</p>
        </div>
    `
    )
    .join("");
}

// Listen for dropdown selection change
courseFilter.addEventListener("change", () => {
  const selectedFilter = courseFilter.value;
  displayCourses(selectedFilter);
});

// Initial display
displayCourses("all");
