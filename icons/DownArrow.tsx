type DownArrowIconProps = {
  height: string;
  width: string;
  mainColor: string;
};

export function DownArrowIcon({
  height,
  width,
  mainColor,
}: DownArrowIconProps): JSX.Element {
  return (
    <svg
      fill={mainColor}
      height={height}
      width={width}
      viewBox="0 0 330 330"
      xmlSpace="preserve"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          id="XMLID_24_"
          d="M216.358,271.76c-2.322-5.605-7.792-9.26-13.858-9.26H180V15c0-8.284-6.716-15-15-15 c-8.284,0-15,6.716-15,15v247.5h-22.5c-6.067,0-11.537,3.655-13.858,9.26c-2.321,5.605-1.038,12.057,3.252,16.347l37.5,37.5 C157.322,328.536,161.161,330,165,330s7.678-1.464,10.607-4.394l37.5-37.5C217.396,283.816,218.68,277.365,216.358,271.76z"
        />{" "}
      </g>
    </svg>
  );
}
