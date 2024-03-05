function schoolRegister(studentsGrades) {
    const students = studentsGrades.map(record => {
        const [name, grade, score] = record.match(/Student name: (\w+), Grade: (\d+), Graduated with an average score: (\d+\.\d+)/).slice(1);
        return { name, grade: parseInt(grade), score: parseFloat(score) };
    });

    const graduatedStudents = students.filter(student => student.score >= 3);

    graduatedStudents.forEach(student => student.grade += 1);

    const studentsByGrades = graduatedStudents.reduce((acc, student) => {
        acc[student.grade] = [...(acc[student.grade] || []), student];
        return acc;
    }, {});

    for (const [grade, students] of Object.entries(studentsByGrades)) {
        const avg = students.reduce((sum, student) => sum + student.score, 0) / students.length;
        const names = students.map(student => student.name).join(", ");
        console.log(`${grade} Grade\nList of students: ${names}\nAverage annual score from last year: ${avg.toFixed(2)}\n`);
    }
}

// schoolRegister([
//     "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
//     "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
//     "Student name: George, Grade: 8, Graduated with an average score: 2.83",
//     "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
//     "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
//     "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
//     "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
//     "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
//     "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
//     "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
//     "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
//     "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
// ]);

// schoolRegister([
//     'Student name: George, Grade: 5, Graduated with an average score: 2.75',
//     'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
//     'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
//     'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
//     'Student name: John, Grade: 9, Graduated with an average score: 2.90',
//     'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
//     'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
// ]);