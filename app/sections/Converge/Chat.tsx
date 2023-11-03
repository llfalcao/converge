import { Signal, signal } from "@preact/signals-core";
import Messages from "../../components/Messages/index.tsx";
import Form from "../../islands/Form/index.tsx";

export interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function Chat() {
  const messages: Signal<Message[]> = signal([
    {
      role: "assistant",
      content: "Ei👋, quer negociar o preço?",
    },
    {
      role: "assistant",
      content: "Digite a sua oferta aqui!",
    },
  ]);

  return (
    <div>
      <header>
        <span>Converge</span>
        <button>
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 10.293l5.293-5.293.707.707-5.293 5.293 5.293 5.293-.707.707-5.293-5.293-5.293 5.293-.707-.707 5.293-5.293-5.293-5.293.707-.707 5.293 5.293z" />
          </svg>
        </button>
      </header>
      <div>
        <Messages messages={messages} />
        <Form />
      </div>
    </div>
  );
}
