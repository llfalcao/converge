import { signal } from "@preact/signals";

export default function Form() {
  const text = signal("");

  const onInput = (event: Event) => {
    if (!(event.target instanceof HTMLInputElement)) return;
    text.value = event.target.value;
  };

  return (
    <form>
      <input type="text" onInput={onInput} />
      <button type="button">Send</button>
    </form>
  );
}
