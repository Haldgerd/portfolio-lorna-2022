// ERROR | BUG: Tailwind changes are applied only when I reload tailwind config file. Otherwise changes are not noted or applied.

module.exports = {
    content: ["./src/**/*.{html,js,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [],
};
