type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

export function Button({
  children,
  onClick,
  disabled = false,
}: ButtonProps): JSX.Element {
  return (
    <button
      onClick={onClick}
      className="bg-primaryButton h-8 px-2 text-white flex justify-center items-center rounded-md font-bold hover:bg-primaryButtonHover"
      disabled={disabled}
    >
      {children}
    </button>
  );
}
