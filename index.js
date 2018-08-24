function getName (node) {
  return node.name
}

function headNode (node, collection) {
  return collection[node]
}

function next (node, collection) {
  const nextAddress = node[next];
  console.log(nextAddress)
  console.log(collection[`${nextAddress}`])
  return collection[`${nextAddress}`]
}