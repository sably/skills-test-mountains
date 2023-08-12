"use client";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div
      className="
        mx-auto
        xl:px-40 
        md:px-60
        sm:px-2
        px-4
      "
    >
      {children}
    </div>
  );
};

export default Container;
