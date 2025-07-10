interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    contract: any;
}

const teacher1: Teacher = {
    firstName: "Steve",
    lastName: "Kimani",
    fullTimeEmployee: true,
    yearsOfExperience: 10,
    location: "Nairobi",
    contract: false
}

console.log(teacher1);