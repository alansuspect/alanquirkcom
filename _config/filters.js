import { DateTime } from "luxon";

export default function(eleventyConfig) {

	eleventyConfig.addNunjucksFilter("currentYear", function() {
		return DateTime.now().toFormat("yyyy");
	});

	eleventyConfig.addFilter("limit", (arr, limit) => arr.slice(0, limit));


};
