import pluginFilters from "./_config/filters.js";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";


export default async function(eleventyConfig) {

	eleventyConfig.addPlugin(pluginFilters);
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    extensions: "html",
    formats: ["webp"],
    widths: [361, 600],
    sharpWebpOptions: { quality: 75 },
    defaultAttributes: {
      loading: "lazy",
      decoding: "async",
      sizes: "(max-width: 768px) 361px, 600px"
    }
  });

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