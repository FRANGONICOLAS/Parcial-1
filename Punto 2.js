class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
    
    isLeaf(){
        if (this.left==null && this.right==null) {
            return true;
        } else {
            return false;
        }
    }
}

class BinaryTree{
    constructor() {
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value, null, null);

        if (!this.root) {
            this.root = newNode;
        } else {
            let current = this.root;
            let isFound = false;

            while (!isFound){
                if (current.value === value) {
                    isFound = true;
                    return null;
                }
                if (current.value > value) {
                    if (!current.left) {
                        current.left = newNode;
                        isFound = true;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else {
                    if (!current.right) {
                        current.right=newNode;
                        isFound = true;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    altura() {
        return this.calculandoAltura(this.root);
    }

    calculandoAltura(node) {
        if (node === null) {
            return 0;
        }
        const ladoIzq = this.calculandoAltura(node.left);
        const ladoDer = this.calculandoAltura(node.right);
        return Math.max(ladoIzq, ladoDer) + 1;
    }
}

const tree = new BinaryTree();
tree.insert(11);
tree.insert(49);
tree.insert(97);
tree.insert(20);
tree.insert(27);
console.log("Altura del árbol:", tree.altura());
  