interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    contract: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
  };

// Interface describing the methods the student must have
interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
  }
  
  // Interface describing how the constructor should work
  interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
  }
  
  // Actual class
  class StudentClass implements StudentClassInterface {
    constructor(private firstName: string, private lastName: string) {}
  
    workOnHomework(): string {
      return "Currently working";
    }
  
    displayName(): string {
      return this.firstName;
    }
  }