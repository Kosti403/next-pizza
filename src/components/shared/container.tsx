import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  children,
}) => {
  return (
    <div className={cn(" p-5 flex flex-wrap-reverse gap-5 mx-auto max-w-[1280px] max-980:max-w-full ", className)}>{children}</div>
  );
};
