import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

export default function TeacherItem() {
  return(
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/36697537?s=460&u=c6551db90ec0331c90de141cd6cc786e3caa9e85&v=4" alt="Maria Carolina"/>
        <div>
          <strong>Maria Carolina</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
      Entusiasta das melhores tecnologias de química avançada.
      <br/><br/>
      Apaixonada por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
      Mais de 200.000 pessoas já passaram por uma das minhas explosões.
      </p>

      <footer>
        <p>Preço/hora
        <strong>R$ 40,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp"/>
          Entrar em contato
        </button>
      </footer>
  </article>
  );
}