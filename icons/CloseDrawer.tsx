type CloseDrawerIconProps = {
  height: string;
  width: string;
  mainColor: string;
};

export function CloseDrawerIcon({
  height,
  width,
  mainColor,
}: CloseDrawerIconProps): JSX.Element {
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
        <path d="M4 16V4H2v12h2zM13 15l-1.5-1.5L14 11H6V9h8l-2.5-2.5L13 5l5 5-5 5z" />
      </g>
    </svg>
  );
}
