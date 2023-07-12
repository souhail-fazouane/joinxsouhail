type AnswerIconProps = {
  height: string;
  width: string;
  mainColor: string;
};

export function AnswerIcon({
  height,
  width,
  mainColor,
}: AnswerIconProps): JSX.Element {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
      fill={mainColor}
    >
      <path d="M8.5 5.5L7 4L2 9L7 14L8.5 12.5L6 10H10C12.2091 10 14 11.7909 14 14V16H16V14C16 10.6863 13.3137 8 10 8H6L8.5 5.5Z" />
    </svg>
  );
}
