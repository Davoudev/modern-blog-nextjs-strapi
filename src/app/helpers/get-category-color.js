const categoryColorMap = new Map();

categoryColorMap.set("Technology Trends", "orange");
categoryColorMap.set("Options", "green");
categoryColorMap.set("Travel Guides", "purple");

const getCategoryColor = (category) => {
  return categoryColorMap.get(category);
};

export default getCategoryColor;
