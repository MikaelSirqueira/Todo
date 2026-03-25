/* eslint-disable @typescript-eslint/no-unused-vars */
import { cva, type VariantProps } from "class-variance-authority";

// eslint-disable-next-line react-refresh/only-export-components
export const iconVariants = cva("", {
  variants: {
    animate: {
      false: "",
      true: "animate-spin",
    },
  },
  defaultVariants: {
    animate: false,
  },
});

interface IconProps
  extends React.ComponentProps<"svg">, VariantProps<typeof iconVariants> {
  svg: React.FC<React.ComponentProps<"svg">>;
}

export default function Icon({
  svg: SvgComponent,
  className,
  animate,
  ...props
}: IconProps) {
  return (
    <SvgComponent
      className={`${iconVariants({ animate })} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}
