/** Keep Markdown links portable when the toolkit is hosted below a subpath. */
export function markdownBase({ base = '/' } = {}) {
  const prefix = base.replace(/\/$/, '');
  return (tree) => {
    function visit(node) {
      if (node.properties) {
        for (const attr of ['href', 'src']) {
          const value = node.properties[attr];
          if (typeof value === 'string' && value.startsWith('/') && !value.startsWith('//')) {
            node.properties[attr] = prefix + value;
          }
        }
      }
      node.children?.forEach(visit);
    }
    visit(tree);
  };
}
