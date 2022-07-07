import React, { useEffect } from 'react';

import { Card } from '../../components/Card';
import { Header } from '../../components/Header';

import './styles.css';

export function Home() {
  const [studentName, setStudentName] = React.useState('');
  const [students, setStudents] = React.useState([]);
  const [user, setUser] = React.useState({
    name: '',
    avatar: '',
  });

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }),
    };

    setStudents((prevState) => [...prevState, newStudent]);
  }

  useEffect(() => {
    fetch('https://api.github.com/users/rodrigobranas')
      .then((response) => response.json())
      .then((data) => {
        setUser({
          name: data.name,
          avatar: data.avatar_url,
        });
      });
  }, []); // dependencia para ser chamado , sera chamado na primeira renderizacao apenas []

  return (
    <div className="container">
      <Header name={user.name} avatar={user.avatar} />

      <input
        onChange={(e) => setStudentName(e.target.value)}
        type="text"
        placeholder="Digite seu nome"
      />
      <button onClick={handleAddStudent} type="button">
        Adicionar
      </button>

      {students.map((student) => (
        <Card key={student.time} name={student.name} time={student.time} />
      ))}
    </div>
  );
}
