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

  interface DirectorInterface{
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
  }

  interface TeacherInterface{
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
  }

  class Director implements DirectorInterface{
    workFromHome(): string {
      return "Working from home";
    }
    
    getCoffeeBreak(): string {
      return "Getting a coffee break";
    }
    
    workDirectorTasks(): string {
      return "Getting to director tasks";
    }
  }

  class Teacher implements TeacherInterface{
    workFromHome(): string {
      return "Cannot work from home";
    }
    
    getCoffeeBreak(): string {
      return "Cannot have a break";
    }
    
    workTeacherTasks(): string {
      return "Getting to work";
    }
  }

  function createEmployee(salary: number | string): Teacher | Director {
    if (typeof salary === "number" && salary < 500) {   
      return new Teacher();
    } else {
      return new Director();
    }
  }