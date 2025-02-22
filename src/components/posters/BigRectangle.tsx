import Image from "next/image";

interface BigRectangleProps {
  pattern: string;
}

export const BigRectangle = ({ pattern }: BigRectangleProps) => {
  return (
    <svg
      width="1200px"
      height="800px"
      viewBox="0 0 1500 1200"
      fill="none"
      className=""
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="image-ref-id1"
          patternUnits="userSpaceOnUse"
          width="100%"
          className="bg-no-repeat bg-contain"
          height="100%"
        >
          <image
            href={pattern}
            className="bg-no-repeat"
            preserveAspectRatio="xMidYMid slice"
          />
        </pattern>
      </defs>
      <path
        d="M613 270.827L723.535 75.8353C741.548 48.9469 750.555 35.5027 762.905 28.4997C772.461 23.0813 783.321 20.3901 794.301 20.7197C808.492 21.1456 822.734 28.8284 851.218 44.1942L1138.5 199.165V1198H120L613 270.827Z"
        fill="url(#image-ref-id1)"
      />
    </svg>
  );
};
