type PauseIconProps = {
  height: string;
  width: string;
  mainColor: string;
};

export function PauseIcon({
  height,
  width,
  mainColor,
}: PauseIconProps): JSX.Element {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill={mainColor}>
      <g>
        <path d="M8 3H4v14h4V3zM16 3h-4v14h4V3z" />
      </g>
    </svg>
  );
}
