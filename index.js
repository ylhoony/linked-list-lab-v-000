function getName (node) {
  return node.name
}

function headNode (node, collection) {
  return collection[node]
}

function next (node, collection) {
  const nextAddress = node.next;
  return collection[`${nextAddress}`]
}

function nodeAt (index, linkedList, collection) {
  console.log(index)
  console.log(linkedList)
  console.log(collection)
  
}