var student1 = {
    firstName: "Evans",
    lastName: "Kimani",
    age: 20,
    location: "Nairobi"
};
var student2 = {
    firstName: "Faith",
    lastName: "Nzioki",
    age: 19,
    location: "Eldoret"
};
var studentsList = [student1, student2];
var table = document.createElement('table');
var thead = document.createElement('thead');
var tbody = document.createElement('tbody');
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    row.innerHTML = "\n        <td>".concat(student.firstName, "</td>\n        <td>").concat(student.location, "</td>\n    ");
    tbody.appendChild(row);
});
thead.innerHTML = "\n    <tr>\n        <th>First Name</th>\n        <th>Location</th>\n    </tr>\n";
table.appendChild(thead);
table.appendChild(tbody);
document.body.appendChild(table);
