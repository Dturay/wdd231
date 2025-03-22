const courses = [
  {
    subject: "CSE",
    number: 110,
    title: "Introduction to Programming",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.",
    technology: ["Python"],
    completed: true, // Change to true if completed
  },
  {
    subject: "WDD",
    number: 130,
    title: "Web Fundamentals",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands-on with students actually participating in simple web designs and programming.",
    technology: ["HTML", "CSS"],
    completed: true, // Change to true if completed
  },
  {
    subject: "CSE",
    number: 111,
    title: "Programming with Functions",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call, debug, and test their own functions.",
    technology: ["Python"],
    completed: true, // Change to true if completed
  },
  {
    subject: "CSE",
    number: 210,
    title: "Programming with Classes",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level.",
    technology: ["C#"],
    completed: false, // Change to true if completed
  },
  {
    subject: "WDD",
    number: 131,
    title: "Dynamic Web Fundamentals",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events and create responsive user experiences.",
    technology: ["HTML", "CSS", "JavaScript"],
    completed: false, // Change to true if completed
  },
  {
    subject: "WDD",
    number: 231,
    title: "Frontend Web Development I",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, and basic API usage.",
    technology: ["HTML", "CSS", "JavaScript"],
    completed: false, // Change to true if completed
  },
];

// Function to display courses based on filter
function displayCourses(filteredCourses) {
  const courseList = document.getElementById("course-list");
  courseList.innerHTML = "";

  const totalCredits = filteredCourses.reduce(
    (acc, course) => acc + course.credits,
    0
  );
  document.getElementById(
    "total-credits"
  ).innerText = `Total Credits: ${totalCredits}`;

  filteredCourses.forEach((course) => {
    const courseCard = document.createElement("div");
    courseCard.className =
      "course-card " + (course.completed ? "completed" : "not-completed");

    // Display just the subject and code number
    courseCard.innerText = `${course.subject} ${course.number}`;

    courseList.appendChild(courseCard);
  });
}

// Function to filter courses based on the selected subject
function filterCourses(subject) {
  let filteredCourses;

  if (subject === "all") {
    filteredCourses = courses;
  } else {
    filteredCourses = courses.filter((course) => course.subject === subject);
  }

  displayCourses(filteredCourses);
}

// Initial display of all courses
displayCourses(courses);
