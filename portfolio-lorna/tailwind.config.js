// ERROR | BUG: Tailwind changes are applied only when I reload tailwind config file. Otherwise changes are not noted or applied.

module.exports = {
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
            colors: {
                transparent: "transparent",
                black: "#000",
                white: "#fff",
            },
            // fontSize: {
            //     "10xl": "11rem",
            // },
            extend: {
                // Adds a new breakpoint in addition to the default breakpoints
                screens: {
                    "3xl": "1600px",
                },
            },
        },

        plugins: [],
    },
};
