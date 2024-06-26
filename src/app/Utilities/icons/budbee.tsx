import * as React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
  fill?: string;
  textColor?: string;
};

const SvgComponent: React.FC<Props> = ({ className, fill, textColor }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    className={twMerge(className, "")}
  >
    <rect
      width={30}
      height={30}
      fill={twMerge(fill ?? "#41CDA5")}
      rx={15}
      className="scale-[0.95] origin-center"
    />
    <path
      fill={twMerge(textColor ?? "#fff")}
      className="scale-[0.95] origin-center"
      fillRule="evenodd"
      d="M2.966 14.226c.265-.262.712-.439 1.141-.439 1.139 0 2.105.881 2.105 2.155 0 1.274-.964 2.155-2.105 2.155-.44 0-.879-.174-1.14-.44l-.046-.042-.053-.064v.46H2V11.55h.868v2.778l.053-.059.045-.043Zm-.174 1.719c0 .747.526 1.362 1.27 1.362.834 0 1.271-.613 1.271-1.362 0-.75-.437-1.365-1.27-1.365-.745 0-1.271.618-1.271 1.365Zm5.612 1.36a.977.977 0 0 0 .963-.924h.003v-2.505h.876v4.135H9.37v-.471l-.045.059-.045.059c-.175.262-.614.439-.964.439-1.05 0-1.665-.704-1.665-1.673v-2.55h.876v2.55c.016.565.289.88.877.88Zm13.327-3.517c-1.141 0-2.018.88-2.018 2.154s.922 2.155 2.018 2.155c.834 0 1.445-.44 1.797-1.055l-.736-.35c-.132.35-.49.615-1.016.615-.747 0-1.184-.527-1.184-1.143h3.069V15.9c-.003-1.276-.88-2.111-1.93-2.111Zm-1.096 1.6c.132-.457.482-.808 1.096-.808.527 0 .963.35 1.008.808h-2.104Zm3.418.554c0-1.274.876-2.154 2.017-2.154 1.051 0 1.927.835 1.93 2.111v.265h-3.068c0 .616.44 1.143 1.183 1.143.527 0 .884-.265 1.017-.615l.736.35c-.352.616-.964 1.055-1.798 1.055-1.096 0-2.017-.88-2.017-2.155Zm2.017-1.362c-.614 0-.963.35-1.096.808h2.105c-.045-.457-.482-.808-1.009-.808Zm-8.723-.793c-.429 0-.876.177-1.141.44l-.045.042-.053.06V11.55h-.868v6.461h.868v-.46l.053.064.045.043c.262.265.701.439 1.14.439 1.142 0 2.105-.88 2.105-2.155 0-1.274-.966-2.155-2.104-2.155Zm-.045 3.52c-.744 0-1.27-.615-1.27-1.362 0-.747.526-1.365 1.27-1.365.834 0 1.27.615 1.27 1.365s-.436 1.362-1.27 1.362Zm-4.601.79c-1.142 0-2.105-.878-2.105-2.155 0-1.277.963-2.155 2.1-2.155.43 0 .878.174 1.14.44l.045.042.053.06V11.55h.874v6.461h-.869v-.46l-.052.064-.046.043c-.264.262-.701.439-1.14.439Zm.042-3.52c-.831 0-1.27.618-1.27 1.365 0 .75.436 1.365 1.27 1.362.744 0 1.27-.612 1.27-1.362 0-.75-.526-1.365-1.27-1.365Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgComponent;
