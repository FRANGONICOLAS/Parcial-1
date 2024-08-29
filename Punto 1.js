class number {
    constructor(valor, next=null){
        this.valor = valor,
        this.next = next
    }
}

class ListaNumeros{
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(valor) {
        const newNumber = new number(valor);
        if (!this.head) {
          this.head = newNumber;
        } else {
          this.tail.next = newNumber;
        }
        this.tail = newNumber;
    }

    remove(valor, current = this.head, prev = null) {
        if (current === null) {
          return false;
        }
        if (current.valor === valor) {
          if (prev === null) {
            this.head = current.next;
          } else {
            prev.next = current.next;
          }
          if (current.next === null) {
            this.tail = prev; 
          }
          return true;
        }
        return this.remove(valor, current.next, current);
    }

    bubbleSort() {
        if (!this.head) return;

        let swapped;
        do {
            swapped = false;
            let current = this.head;
            let prev = null;
            while (current.next !== null) {
                if (current.valor > current.next.valor) {
                    // Swap values
                    [current.valor, current.next.valor] = [current.next.valor, current.valor];
                    swapped = true;
                }
                prev = current;
                current = current.next;
            }
        } while (swapped);
    }

    print() {
        let current = this.head;
        while (current != null) {
            console.log(current.valor, current.next ? '->' : '');
            current = current.next;
        }
        console.log(); // Add a newline for better readability
    }
}

function unionListas(list1, list2) {
    const mergedList = new ListaNumeros();
    let current1 = list1.head;
    let current2 = list2.head;

    while (current1 !== null && current2 !== null) {
        if (current1.valor <= current2.valor) {
            mergedList.append(current1.valor);
            current1 = current1.next;
        } else {
            mergedList.append(current2.valor);
            current2 = current2.next;
        }
    }

    // Add remaining elements from list1, if any
    while (current1 !== null) {
        mergedList.append(current1.valor);
        current1 = current1.next;
    }

    // Add remaining elements from list2, if any
    while (current2 !== null) {
        mergedList.append(current2.valor);
        current2 = current2.next;
    }

    return mergedList;
}

// Create lists and append values
const Numbers = new ListaNumeros();
Numbers.append(3);
Numbers.append(1);
Numbers.append(2);
Numbers.bubbleSort();
console.log("List 1:");
Numbers.print();

const Numbers_2 = new ListaNumeros();
Numbers_2.append(4);
Numbers_2.append(5);
Numbers_2.append(6);
Numbers_2.bubbleSort();
console.log("List 2:");
Numbers_2.print();

const listaFusionada = unionListas(Numbers, Numbers_2);

console.log("listas unidas:");
listaFusionada.print();
