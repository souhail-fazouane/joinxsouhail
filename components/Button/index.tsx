type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export function Button({ children, onClick }: ButtonProps): JSX.Element {
  return (
    <button
      onClick={onClick}
      className="bg-primaryButton h-8 px-2 text-white flex justify-center items-center rounded-md font-bold hover:bg-primaryButtonHover"
    >
      {children}
    </button>
  );
}
