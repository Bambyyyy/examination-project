import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        xs: "380px",

        sm: "481px",
        // => @media (min-width: 640px) { ... }

        smd: "600px",

        md: "712px",
        // => @media (max-width: 912px) { ... }

        cmd: "768px",

        ml: "900px",

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        cxl: "1225px",

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1760px",
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        "c-BYellow": "#FCF5C2",
        "c-Yellow": "#FFE166",
        "c-Purple": "#8038CC",
        "c-DarkPurple": "#5d209f",
        "c-Pink": "#ff7ab8",
        "c-MineralBlue": "#e8f2fa",
        "c-Blue": "#0373E5",
        "c-LGreen": "#EEFFD2",
        "c-Green": "#306363",
        "c-DarkGray": "#526178",
        "c-White": "#ffffff",
        "c-Gray": "#f5f5f5",
        "c-Red": "#FF4545",
        "c-LightBlue": "#e8f2fa",
        "c-LightPurple": "#a899e8",
        "c-LoadingGray": "#e2e2e2",
      },
      fontSize: {},
    },
  },
  plugins: [],
};
export default config;
