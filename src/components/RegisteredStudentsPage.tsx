import React from 'react';
import './RegisteredStudentsPage.css';

interface Student {
  firstName: string;
  lastName: string;
  gender: string;
  dob: string;
  email: string;
}

interface Props {
  students: Student[];
  onBackToForm: () => void;
}

const RegisteredStudentsPage: React.FC<Props> = ({
  students,
  onBackToForm,
}) => {
  // Function to validate email using regex
  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div>
      <h1>Registered Students</h1>
      <table>
        <thead>
          <tr>
            <th>Salutation</th>
            <th>Name</th>
            <th>DOB</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.gender === 'male' ? 'Mr' : 'Miss'}</td>
              <td>
                {student.firstName} {student.lastName}
              </td>
              <td>{student.dob}</td>
              <td>{student.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={onBackToForm}>Back to Form</button>
    </div>
  );
};

export default RegisteredStudentsPage;
