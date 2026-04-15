import { DateTime } from "luxon";

export default function(eleventyConfig) {

	eleventyConfig.addNunjucksFilter("currentYear", function() {
		return DateTime.now().toFormat("yyyy");
	});

};
