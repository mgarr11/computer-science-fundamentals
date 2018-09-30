class Node {
    constructor(data, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class searchTree {
    constructor(){
        this.root = null;
    }
    add(data){
        const node = this.root;
        if (node === null){
            this.root = new Node(data);
            return;
        } else { 
            const searchTree = function(node) {
                if (data < node.data) {
                    if (node.left === null){
                        node.left = new Node(data);
                        return;
                    }else if (node.left !== null) {
                        return searchTree(node.left); 
                    } 
                } else if (data > node.data){
                    if (node.right === null){
                        node.right = new Node(data);
                        return;
                    }else if (node.right !== null) {
                        return searchTree(node.right); 
                    }  
                } else {
                    return null;
                }
            };
            return searchTree(node); 

        }
    }
    findMin(){
        let current = this.root;
        while (current.left !==null){
            current = current.left;
        }
        return current.data;
    }
    findMax(){
        let current = this.root;
        while (current.right !==null){
            current = current.right;
        }
        return current.data
    }
    find(){
        let current = this.root;
        while (current.right !==null){
            if (data < current.data){
                current = current.left
            }else {
                current = current.right
            }
            if (curren === null) {
                return null;
            }
        }
        return current;
    }
    isPresent(data){
        let current = this.root;
        while (current){
            if (data === current.data){
                return true;
            }
            if (data < current.data){
                current = current.left
            } else {
                current = current.right
            }
        }
        return false;
    }
    findValue(){}
    findDistance(root, num1, num2){
        if (!root){
            return 0;
        }
        let rootDistance = function(root, num){
            if (root.data === num){
                return 0;
            }
            else if(root.data > num) {
                return 1 + rootDistance(root.left, num);
            } else {
                return 1 + rootDistance(root.right, num);
            }
        }
        if (root.data > num1 && root.data > num2){
            return this.findDistance(root.left, num1, num2);
        }
        else if(root.data < num1 && root.data < num2){
            return this.findDistance(root.right, num1, num2);
        } else (root.data >= num1 && root.data <= num2)
            return rootDistance(root, num1) + rootDistance(root, num2)
        
    }
}

let newSearchTree = new searchTree();

newSearchTree.add(3);
newSearchTree.add(1);
newSearchTree.add(7);
newSearchTree.add(2);
newSearchTree.add(23);
newSearchTree.add(5);
newSearchTree.add(6);
newSearchTree.add(9);
newSearchTree.add(14);
newSearchTree.add(110);
newSearchTree.add(60);

console.log(newSearchTree)

console.log(newSearchTree.isPresent(60));

console.log(newSearchTree.findDistance(newSearchTree.root, 3, 14));