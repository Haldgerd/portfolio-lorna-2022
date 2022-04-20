module.exports = {
    prefix: "tw-",
    content: [
        "./src/**/*.{html,js,tsx}",
        "./src/components/**/*.{html,js,tsx}",
    ],
    theme: {
        theme: {
            screens: {
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
                "2xl": "1536px",
            },
            extend: {
                screens: {
                    "3xl": "1600px",
                },
                colors: {
                    transparent: "transparent",
                    red: {
                        cherry: "#f74a46",
                    },
                    yellow: {
                        sunny: "#E8B80E",
                    },
                    black: {
                        nicola: "#262724",
                    },
                },
                width: {
                    70: "70vh",
                },
                height: {
                    70: "70vh",
                },
            },
        },
        plugins: [],
    },
};
