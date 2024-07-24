import React, { ReactNode } from "react";

type CustomFormBodyProps = {
  children: ReactNode;
  title: string;
};

const CustomFormBody: React.FC<CustomFormBodyProps> = ({ children, title }) => (
  <div className="flex grow items-center justify-center bg-[url('/background.jpg')] bg-cover bg-center">
    <div className="min-w-[420px] perspective-[8px] transform-style-3d">
      <div className="animate-zoomIn rounded bg-black bg-opacity-80 p-8">
        <h1 className="mb-6 text-center text-3xl font-bold text-white">
          {title}
        </h1>
        {children}
      </div>
    </div>
  </div>
);
export default CustomFormBody;
