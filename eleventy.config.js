

export default async function(eleventyConfig) {

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
    includes: "../_includes",
    layouts: "../_layouts",
  }  
};