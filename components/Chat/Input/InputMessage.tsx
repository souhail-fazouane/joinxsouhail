type InputMessageProps = {
  message: string;
  handleChangeMessage: (v: string) => void;
};

export function InputMessage({
  message,
  handleChangeMessage,
}: InputMessageProps): JSX.Element {
  return (
    <textarea
      id="message"
      name="message"
      placeholder="Envoyer un message"
      className="bg-transparent  whitespace-pre-wrap resize-none text-base w-full  text-hintedGrey11 outline-0"
      onChange={(e) => {
        handleChangeMessage(e.target.value);
      }}
      value={message}
      rows={1}
    />
  );
}
