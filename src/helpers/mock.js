import productJson from './product.json';
import blogJson from './blog.json';
/**

*/
function generateMockProductData(count, tag) {
  const products = productJson;
  const filtered = products.filter((item) => item.tags.includes(tag));
  return filtered.slice(0);
}

function generateMockBlogData(count) {
  return blogJson.slice(0);
}

export { generateMockProductData, generateMockBlogData };
