type OpenDrawerIconProps = {
  mainColor: string;
  height: string;
  width: string;
};

export function OpenDrawerIcon({
  mainColor,
  height,
  width,
}: OpenDrawerIconProps): JSX.Element {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
      fill={mainColor}
    >
      <g>
        <path d="M16 16V4h2v12h-2zM6 9l2.501-2.5-1.5-1.5-5 5 5 5 1.5-1.5-2.5-2.5h8V9H6z" />
      </g>
    </svg>
  );
}
