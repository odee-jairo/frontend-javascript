interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Evans",
    lastName: "Kimani",
    age: 20,
    location: "Nairobi"
}

const student2: Student = {
    firstName: "Faith",
    lastName: "Nzioki",
    age: 19,
    location: "Eldoret"
}

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');

studentsList.forEach((student: Student) => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${student.firstName}</td>
        <td>${student.location}</td>
    `;
    tbody.appendChild(row);
});

thead.innerHTML = `
    <tr>
        <th>First Name</th>
        <th>Location</th>
    </tr>
`;
table.appendChild(thead);
table.appendChild(tbody);
document.body.appendChild(table);
