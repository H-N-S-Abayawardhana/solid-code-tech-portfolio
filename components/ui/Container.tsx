import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8 2xl:max-w-7xl ${className}`}
    >
      {children}
    </div>
  );
}
