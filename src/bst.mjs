/* 
Implementation of a binary search tree
*/

class Node {

    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

export const bst = () => {
    
    let root = null;

    function insertNode(node, newNode)
    {
        if (newNode.data < node.data) {

            if (!node.left) {
              
              node.left = newNode;

            } else {

                insertNode(node.left, newNode);
            }   
                
        } else {

            if (!node.right) {

                node.right = newNode;

            } else {
    
              insertNode(node.right, newNode);
            }
        }
    }
      
    function add(data)
    {
        const newNode = new Node(data);  

        if (!root) {

          root = newNode;

        } else {

            insertNode(root, newNode);
        }
    }  
    
    function getRoot() {
      return root;
    }    
  
    function search(node, data) {
      
        if (!node) {

          return null;

        } else if (data < node.data) {

          return search(node.left, data);

        } else if (data > node.data) {

            return search(node.right, data);

        } else {

            return node;
        }
    }

    function getSize(node) {

      if (node) {

        return 1 + getSize(node.left) + getSize(node.right);
      }
      return 0;
    }
    
    function getOrderedArray(node, thisArray = []) {
      
      if (node) {

        getOrderedArray(node.left, thisArray);
        thisArray.push(node.data);
        getOrderedArray(node.right, thisArray);

      } 

      return thisArray;
    }

    function getPostOrderedArray(node, thisArray = []) {
      
      if (node) {

        getPostOrderedArray(node.left, thisArray);
        getPostOrderedArray(node.right, thisArray);
        thisArray.push(node.data);

      } 

      return thisArray;
    }

    function getPreOrderedArray(node, thisArray = []) {
      
      if (node) {

        thisArray.push(node.data);
        getPreOrderedArray(node.left, thisArray);
        getPreOrderedArray(node.right, thisArray);

      } 

      return thisArray;
    }

    return { add, getRoot, search, getSize, getOrderedArray, getPostOrderedArray, getPreOrderedArray }
  }