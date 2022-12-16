module.exports = {
	plugins: [
		require("prettier-plugin-astro"),
		require("prettier-plugin-tailwindcss"), // Must come last
	],
	tailwindConfig: "./tailwind.config.cjs",
};
