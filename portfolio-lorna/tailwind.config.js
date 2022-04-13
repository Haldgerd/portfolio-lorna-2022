// ERROR | BUG: Tailwind changes are applied only when I reload tailwind config file. Otherwise changes are not noted or applied.

module.exports = {
    // prefix: "tw-", generates an error - no util classes detected in source files
    purge: ["./**/*.html", "./src/**/*.tsx"],
    content: ["./src/**/*.{html,js,tsx}"],
    theme: {
        theme: {
            screens: {
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
                "2xl": "1536px",
            },
            // fontSize: {
            //     "10xl": "11rem",
            // },
            extend: {
                screens: {
                    "3xl": "1600px",
                },
                colors: {
                    transparent: "transparent",
                    red: {
                        700: "#f74a46",
                    },
                    yellow: {
                        700: "#E8B80E",
                    },
                    black: {
                        700: "#262724",
                    },
                },
            },
        },

        plugins: [],
    },
};
