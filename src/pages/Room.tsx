import {useParams} from "react-router-dom";

import logoImg from "../assets/images/logo.svg";

import {Button} from "../components/Button";
import {RoomCode} from "../components/RoomCode";

import "../styles/room.scss";

type RoomParams = {
  id: string;
}

export function Room() {
  const params = useParams<RoomParams>();

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <RoomCode code={params.id} />
        </div>
      </header>

      <main className="content">
        <div className="room-title">
          <h1>Sala React</h1>
          <span>4 Perguntas</span>
        </div>

        <form>
          <textarea
            placeholder="O que você quer perguntar?"
          />

          <div className="form-footer">
            <span>Para enviar uma pergunta, <button>faça seu login</button>.</span>
            <Button type="submit">Enviar pergunta</Button>
          </div>
        </form>
      </main>
    </div>
  );
}
