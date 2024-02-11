import React, { useState } from 'react';
import RegisteredStudentsPage from './components/RegisteredStudentsPage';
import StudentRegistrationForm from './components/StudentRegistrationForm';

interface Student {
  firstName: string;
  lastName: string;
  gender: string;
  dob: string;
  email: string;
}

const App: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [showRegistrationForm, setShowRegistrationForm] = useState(true);

  const handleFormSubmit = (student: Student) => {
    setStudents((prevStudents) => [student, ...prevStudents]);
    setShowRegistrationForm(false);
  };

  const handleBackToForm = () => {
    setShowRegistrationForm(true);
  };

  return (
    <div>
      {showRegistrationForm ? (
        <StudentRegistrationForm onSubmit={handleFormSubmit} />
      ) : (
        <RegisteredStudentsPage
          students={students}
          onBackToForm={handleBackToForm}
        />
      )}
    </div>
  );
};

export default App;