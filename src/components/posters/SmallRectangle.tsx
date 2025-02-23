import React from "react";

interface SmallRectangleProps {
  pattern: string;
}

export const SmallRectangle = ({ pattern }: SmallRectangleProps) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 296 499"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="image-ref-id2"
          patternUnits="userSpaceOnUse"
          width="296"
          height="499"
        >
          <svg
            // transform="scale(0.1)"
            width="296"
            height="499"
            viewBox="0 0 296 499"
          >
            <g transform="rotate(45 148 249.5)">
              <image
                href={pattern}
                x="-240"
                y="-149.5"
                width="592"
                height="998"
                preserveAspectRatio="xMinYMin slice"
              />
            </g>
          </svg>
        </pattern>
      </defs>

      <path
        d="M0.68941 0.163402L17.1894 0.16338L262.766 0.163377C274.477 0.163379 285.298 6.40809 291.158 16.547C297.321 27.2105 296.989 40.4281 290.298 50.7687L0.689364 498.38L0.689354 478.163L0.68939 134.163L0.68941 0.163402Z"
        fill="url(#image-ref-id2)"
      />
    </svg>
  );
};
