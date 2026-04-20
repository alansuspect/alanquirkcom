import pluginFilters from "./_config/filters.js";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";


export default async function(eleventyConfig) {

	eleventyConfig.addPlugin(pluginFilters);
  eleventyConfig.addPlugin(eleventyImageTransformPlugin); 

	eleventyConfig
		.addPassthroughCopy({
			"public/": "/",
			"content/media/": "/media/",
		})  
    
};

export const config = {
  templateFormats: ["html", "liquid", "njk", "md"],

  dir: {
    input: "content",
    data: "../_data",
    includes: "../_includes",
    layouts: "../_layouts",
  }  
};