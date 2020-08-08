import React, { useState, FormEvent } from 'react'

import { Search } from 'react-feather';

import PageHeader from '../../components/PageHeader';
import TeacherItem, {Teacher} from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import api from '../../services/api';

import './styles.css';


export default function TeacherList(){
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  // useEffect(() => {}, []); função, quando eu quero disparar essa função?

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

    const res = await api.get('classes', {
      //query parms =>  parms
      params: {
        subject,
        week_day,
        time,
      }
    });

    setTeachers(res.data);
  }

  return (
    <div id="page-teacher-list" className="container">
     <PageHeader title="Estes são os proffys disponíveis">
       <form id="search-teachers" onSubmit={searchTeachers}>

       <Select
          name="subject"
          label="Matéria"
          value={subject}
          onChange={e => {setSubject(e.target.value)}}
          options={[
            { value: 'Programação Orientada a Objeto', label: 'Programação Orientada a Objeto' },
            { value: 'Programação Estruturada', label: 'Programação Estruturada' },
            { value: 'Estrutura de Dados', label: 'Estrutura de Dados' },
            { value: 'Programação pra Internet', label: 'Programação pra Internet' },
            { value: 'Projeto Orientado', label: 'Projeto Orientado' }
          ]}
        />
        <Select
          name="week_day"
          label="Dia da semana"
          value={week_day}
          onChange={e => {setWeekDay(e.target.value)}}
          options={[
            { value: '0', label: 'Domingo' },
            { value: '1', label: 'Segunda-feira' },
            { value: '2', label: 'Terça-feira' },
            { value: '3', label: 'Quarta-feira' },
            { value: '4', label: 'Quinta-feira' },
            { value: '5', label: 'Sexta-feira' },
            { value: '6', label: 'Sábado' }
          ]}
        />
        <Input
          name="time"
          label="Hora" 
          type="time"
          value={time}
          onChange={e => {setTime(e.target.value) }}
          />

          <button type="submit">
            <Search />
          </button>
       </form>
     </PageHeader>
      <main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher}/>;
        })}

      </main>

    </div>
  );
}