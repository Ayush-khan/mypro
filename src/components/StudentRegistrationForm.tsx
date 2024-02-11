import React, { useState } from 'react';
// import '../style/StudentRegistrationForm.css';
interface Student {
  firstName: string;
  lastName: string;
  gender: string;
  dob: string;
  email: string;
}
interface Props {
  onSubmit: (student: Student) => void;
}

const StudentRegistrationForm: React.FC<Props> = ({ onSubmit }) => {
  const [student, setStudent] = useState<Student>({
    firstName: '',
    lastName: '',
    gender: '',
    dob: '',
    email: '',
  });
  const [errors, setErrors] = useState<Partial<Student>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formErrors: Partial<Student> = {};
    const nameRegex = /^[A-Za-z][A-Za-z ]*$/; 
    const dobRegex = /^\d{4}-\d{2}-\d{2}$/;

    if (!student.firstName) {
      formErrors.firstName = 'First name is required';
    } else if (!nameRegex.test(student.firstName)) {
      formErrors.firstName = 'First name must start with a letter';
    }
    if (!student.lastName) {
      formErrors.lastName = 'Last name is required';
    } else if (!nameRegex.test(student.lastName)) {
      formErrors.lastName = 'Last name must start with a letter';
    }
    if (!student.gender) {
      formErrors.gender = 'Gender is required';
    }
    if (!student.dob) {
      formErrors.dob = 'Date of Birth is required';
    } else if (!dobRegex.test(student.dob)) {
      formErrors.dob = 'Invalid DOB format (YYYY-MM-DD)';
    }
    if (!student.email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(student.email)) {
      formErrors.email = 'Invalid email format';
    }

    if (Object.keys(formErrors).length === 0) {
      onSubmit(student);
      setStudent({
        firstName: '',
        lastName: '',
        gender: '',
        dob: '',
        email: '',
      });
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className='parent-div'>
      <h1 className='topheading'>Student Registration</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={student.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <span>{errors.firstName}</span>}
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={student.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <span>{errors.lastName}</span>}
        </div>
        <div>
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={student.gender}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.gender && <span>{errors.gender}</span>}
        </div>
        <div>
          <label htmlFor="dob">DOB:</label>
          <input
            type="text"
            id="dob"
            name="dob"
            value={student.dob}
            onChange={handleChange}
          />
          {errors.dob && <span>{errors.dob}</span>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={student.email}
            onChange={handleChange}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default StudentRegistrationForm;
