import Image from "next/image";

interface BigRectangleProps {
  pattern: string;
}

export const BigRectangle = ({ pattern }: BigRectangleProps) => {
  return (
    <svg
      width="100%"
      className="bg-white "
      height="100%"
      viewBox="0 0 1500 1200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="image-ref-id"
          patternUnits="userSpaceOnUse"
          width="100%"
          height="100%"
        >
          <image
            href={pattern}
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid meet"
          />
        </pattern>
      </defs>
      <path
        d="M493 220.827L603.535 55.8353C621.548 28.9469 630.555 15.5027 642.905 8.49973C652.461 3.08129 663.321 0.390144 674.301 0.719669C688.492 1.14556 702.734 8.82843 731.218 24.1942L1018.5 179.165V978H0L493 220.827Z"
        fill="url(#image-ref-id)"
      />
    </svg>
  );
};
