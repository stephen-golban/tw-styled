// import { UsableColor } from "../../../lib/theme/colors";
// import {
//   ElementType,
//   HTMLAttributes,
//   AnchorHTMLAttributes,
//   ButtonHTMLAttributes,
// } from "react";
// import {
//   Align,
//   Display,
//   Justify,
//   Position,
//   Direction,
// } from "../../../lib/functions/flexbox";
// import { Margin, Offset, Padding } from "../../../lib/functions/spacing";

// type Div = HTMLAttributes<HTMLDivElement>;
// type Btn = ButtonHTMLAttributes<HTMLButtonElement>;
// type Anchor = AnchorHTMLAttributes<HTMLAnchorElement>;
// type CombinedProps = Div & Btn & Anchor;

// export type BoxProps = Partial<
//   CombinedProps & {
//     align: Align;
//     display: Display;
//     justify: Justify;
//     direction: Direction;
//     background: UsableColor | `#${string}`;
//     component: keyof JSX.IntrinsicElements;

//     /**
//      * It can be either a number or a string or an array of numbers and strings
//      * @example
//      *  margin="10"
//      *  margin="10%"
//      *  margin="10px"
//      * @example
//      *  Array can have length of:
//      *  2: [vertical, horizontal]
//      *  3: [top, horizontal, bottom]
//      *  4: [top, right, bottom, left]
//      */
//     margin: Margin;

//     /**
//      * It can be either a number or a string or an array of numbers and strings
//      * @example
//      *  padding="10"
//      *  padding="10%"
//      *  padding="10px"
//      * @example
//      *  Array can have length of:
//      *  2: [vertical, horizontal]
//      *  3: [top, horizontal, bottom]
//      *  4: [top, right, bottom, left]
//      */
//     padding: Padding;
//     /**
//      * It can be either a number or a string or an array of numbers and strings
//      * @example
//      *  offset="10" || offset="10%" || offset="10px"
//      *  offset={[10, "10%"]} || offset={["10%", "50px", 39]} || offset={["10px", 10, 10, 10]} || offset={["10px", , , 10]}
//      *
//      * @example
//      *  Array can have length of:
//      *  2: [vertical, horizontal]
//      *  3: [top, horizontal, bottom]
//      *  4: [top, right, bottom, left]
//      */
//     offset: Offset;

//     position: Position;
//   }
// >;
