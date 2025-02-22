import Image from "next/image";

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
      className=""
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="image-ref-id"
          patternUnits="userSpaceOnUse"
          width="100%"
          className="bg-no-repeat rotate-45 bg-contain"
          height="100%"
        >
          <image
            href={pattern}
            className="bg-no-repeat bg-contain"
            preserveAspectRatio="xMidYMid slice"
          />
        </pattern>
        {/* <linearGradient
      id="paint0_linear_53_115"
      x1="225.5"
      y1="153.5"
      x2="3.49993"
      y2="158"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#050816" stop-opacity="0.01" />
      <stop offset="0.74541" stop-color="#050816" stop-opacity="0.24" />
      <stop offset="1" stop-color="#050816" />
    </linearGradient> */}
      </defs>

      <path
        d="M0 0 H197.075 
    C205.858 0 213.974 4.684 218.369 12.288
    C222.991 20.285 222.742 30.199 217.724 37.954
    L0 373.785 V0Z"
        fill="url(#image-ref-id)"
      />
      {/* <path
    d="M0 0 H262.766 
    C274.477 0 285.298 6.245 291.158 16.384
    C297.321 27.047 296.989 40.265 290.298 50.605
    L0 498.38 V0Z"
    fill="url(#paint0_linear_53_115)"
  /> */}
    </svg>
  );
};
