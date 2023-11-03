import { Signal } from "@preact/signals-core";
import { Message } from "../../sections/Converge/Chat.tsx";

export interface MessageGroup {
  role: "user" | "assistant";
  messages: Message[];
}

export interface Props {
  messages: Signal<Message[]>;
}

export default function Messages({ messages }: Props) {
  const groups = messages.value.reduce((acc: MessageGroup[], message) => {
    const lastGroup = acc[acc.length - 1];
    if (lastGroup && lastGroup.role === message.role) {
      lastGroup.messages.push(message);
    } else {
      acc.push({ role: message.role, messages: [message] });
    }
    return acc;
  }, []);

  return (
    <div>
      {groups.map((group) => (
        <div key={group.role}>
          {group.messages.map((message) => (
            <p key={message.content}>{message.content}</p>
          ))}
        </div>
      ))}
    </div>
  );
}
