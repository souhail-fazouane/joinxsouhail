import React from "react";

type ClickableIconProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  height: string;
  width: string;
  borderRadius?: string;
};

export function ClickableIcon({
  children,
  onClick,
  height,
  width,
  borderRadius = "0px",
}: ClickableIconProps): JSX.Element {
  return (
    <button
      style={{
        width,
        height,
        borderRadius,
        minWidth: width,
        minHeight: height,
      }}
      className="hover:bg-hoverElement flex justify-center items-center"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
