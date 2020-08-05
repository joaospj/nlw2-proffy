import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D03AQGuNmwgiGb2uQ/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=9AS7-x803hjJZzUp3Zi6YFOsNhpootnaYqh9J0hUAF0"
          alt="João Silva Junior"
        />
        <div>
          <strong>João Silva Junior</strong>
          <span>Latim</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <br /> <br />
        Ea inventore fugiat aliquid nobis expedita consequatur dolorum eveniet
        libero iusto eius optio ullam reprehenderit vero rem laborum nostrum
        numquam distinctio accusamus dolorem, et minus dicta officiis dolores!
        Consequuntur nisi reiciendis consequatur?
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$100,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
