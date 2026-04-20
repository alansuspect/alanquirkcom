import { DateTime } from "luxon";
import CleanCSS from "clean-css";

export default function(eleventyConfig) {

	eleventyConfig.addFilter("cssmin", function (code) {
		return new CleanCSS({}).minify(code).styles;
	});	

	eleventyConfig.addNunjucksFilter("currentYear", function() {
		return DateTime.now().toFormat("yyyy");
	});

	eleventyConfig.addFilter("limit", (arr, limit) => arr.slice(0, limit));


};
