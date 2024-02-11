import React from 'react';

interface CardProps {
  title: string;
  body: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ title, body, onClick }) => {
  return (
    <div style={{  border: '1px solid #ccc',  borderRadius: '5px', padding: '10px', marginBottom: '10px' }} onClick={onClick}>
      <h3 style={{fontSize:'1.2em',color:'rgb(49, 58, 59);',textTransform:"capitalize",textAlign:'center'}}>{title}</h3>
      <p style={{ fontSize:'1em',textAlign:'start',fontWeight:'600',textTransform:'capitalize'}}>{body}</p>
    </div>
  );
};

export default Card;
