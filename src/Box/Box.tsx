import React from "react";
import { BoxComponent, BoxProps, PolymorphicRef } from "./Box.types";

const Box: BoxComponent = React.forwardRef(
  <C extends React.ElementType>(
    { as, children, ...props }: BoxProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || "div";

    return (
      <Component ref={ref} {...props}>
        {children}
      </Component>
    );
  }
);

export default Box;
