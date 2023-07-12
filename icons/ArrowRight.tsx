type ArrowRightProps = {
  height: string;
  width: string;
  mainColor: string;
};

export function ArrowRight({
  height,
  width,
  mainColor,
}: ArrowRightProps): JSX.Element {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill={mainColor}>
      <g>
        <path d="M6.5 5.5L11 10l-4.5 4.5L8 16l6-6-6-6-1.5 1.5z" />
      </g>
    </svg>
  );
}
