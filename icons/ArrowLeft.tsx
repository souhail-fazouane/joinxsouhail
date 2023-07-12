type ArrowLeftProps = {
  mainColor: string;
  height: string;
  width: string;
};

export function ArrowLeft({
  mainColor,
  height,
  width,
}: ArrowLeftProps): JSX.Element {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      x="0px"
      y="0px"
      fill={mainColor}
    >
      <g>
        <path d="M13.5 14.5L9 10l4.5-4.5L12 4l-6 6 6 6 1.5-1.5z" />
      </g>
    </svg>
  );
}
