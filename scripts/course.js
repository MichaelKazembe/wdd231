const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]


document.addEventListener('DOMContentLoaded', function() {
    const courseList = document.getElementById('course-list');
    const totalCredits = document.getElementById('total-credits');
    const filterButtons = document.querySelectorAll('.course-filter-item');

    function displayCourses(courses) {
        courseList.innerHTML = '';
        let credits = 0;

        courses.forEach(course => {
            const courseItem = document.createElement('div');
            courseItem.className = `course-item ${course.completed ? 'completed' : ''}`;
            courseItem.innerHTML = `
                <h3>${course.subject} ${course.number}</h3>
                <p>${course.title}</p>
            `;
            courseList.appendChild(courseItem);
            credits += course.credits;
        });

        totalCredits.textContent = credits;
    }

    function filterCourses(subject) {
        if (subject === 'all') {
            displayCourses(courses);
        } else {
            const filteredCourses = courses.filter(course => course.subject === subject);
            displayCourses(filteredCourses);
        }
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const subject = this.id.split('-')[1];
            filterCourses(subject === 'all' ? 'all' : subject.toUpperCase());
        });
    });

    displayCourses(courses);
});

// function to show course details in a modal

function displayCourseDetails(course) {
    displayCourseDetails.innerHTML = "";
    displayCourseDetails.innerHTML = `
        <button id="closeModal">&#10006</button>
        <h2>${course.subject} ${course.number}</h2>
        <h3>${course.title}</h3>
        <p><strong>Credits: </strong> ${course.credits}</p>
        <p><strong>Certificate: </strong> ${course.certificate}</p>
        <p>${course.description}</p>
        <p><strong>Technologies:</strong> ${course.technology.join(', ')}</p>
    `;
    displayCourseDetails.showModal();

    closeModal.addEventListener('click', function() {
        CourseDetails.close();
    });

    courseDiv.addEventListener('click', () => {
        displayCourseDetails(course);
    }
    );

}
