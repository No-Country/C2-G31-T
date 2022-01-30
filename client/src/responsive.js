import { css } from "styled-components";

// export const mobile = (props) => {
//   return css`
//     @media only screen and (max-width: 414px) {
//       ${props}
//     }
//   `;
// };
export const mobile = (props) => {
  return css`
  @media only screen and (min-width : 320px) and (max-width : 630px) {
      ${props}
    }
  `;
};

 
