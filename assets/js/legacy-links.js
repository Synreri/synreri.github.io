// Preserve links shared from the first version of the blog.
const previousPosts = {begin: '/posts/begin/', learning: '/posts/learning/', ordinary: '/posts/ordinary/'};
function resolvePreviousLink() {
  const slug = location.hash.startsWith('#post/') ? location.hash.slice(6) : '';
  if (Object.hasOwn(previousPosts, slug)) location.replace(previousPosts[slug]);
}
addEventListener('hashchange', resolvePreviousLink);
resolvePreviousLink();
