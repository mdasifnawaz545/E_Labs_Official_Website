// const { nextui } = require("@nextui-org/react");
import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                bgColor: "#0B1215",
                textColor1: "#F7941D",
                textColor2: "#F1FAEE",
                darkBG: "radial-gradient(circle at 10% 20%, rgba(216, 241, 230, 0.46) 0.1%, rgba(233, 226, 226, 0.28) 90.1%);",
            },
            fontFamily: {
                verna: "Varela Round",
            },
            backgroundImage: {
                lightBG:
                    "linear-gradient(30deg, rgba(219,234,254,1) 0%, rgba(247,148,29,0.2) 50%, rgba(219,234,254,1) 100%);",
            },
        },
    },

    // darkMode: "class",
    plugins: [
        function ({ addUtilities }) {
            const newUtilities = {
                ".hover-effect": {
                    "@apply transform transition hover:scale-[1.01] hover:outline-textColor1 hover:outline hover:shadow-lg hover:shadow-textColor1":
                        {},
                },
            };
            addUtilities(newUtilities, ["responsive", "hover"]);
        },
        nextui(),
    ],
};
