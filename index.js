function getName (node) {
  return node.name
}

function headNode (node, collection) {
  return collection[node]
}

function next (head, collection) {
  console.log(head)
  console.log(collection)
  let node = head;
  for(let i = 0; i < collection; i++) {
    node = next(node);
  }
  return node;
}