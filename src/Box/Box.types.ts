import React from "react";

export type { PolymorphicRef } from "../typings/polymorphism";
import { PolymorphicComponentPropWithRef } from "../typings/polymorphism";

export type BoxProps<T extends React.ElementType> =
  PolymorphicComponentPropWithRef<T, {}>;

export type BoxComponent = <C extends React.ElementType>(
  props: BoxProps<C>
) => React.ReactElement | null;
