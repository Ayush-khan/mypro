import React from 'react';
// import '../style/RegisteredStudentsPage.css';
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
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', marginLeft:'28vw',marginTop:'-22em' }}>
          <h1 style={{ marginBottom: '20px' }}>Registered Students</h1>
          <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Salutation</th>
                <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Name</th>
                <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>DOB</th>
                <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Email</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index}>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.gender === 'male' ? 'Mr' : 'Miss'}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.firstName} {student.lastName}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.dob}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button style={{ marginTop: '20px', padding: '10px 20px', backgroundColor:'cadetblue',fontWeight:'700',fontSize:'1.1em', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }} onClick={onBackToForm}>Back to Form</button>
        </div>
      );
      
};

export default RegisteredStudentsPage;
