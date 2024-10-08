import Node from "./Node.js";

const LinkedList = () => {
    let HEAD = null;
    let length = 0;

    const append = (value) => {
        const newNode = Node(value);
        
        if(HEAD === null){
            length++;
            return (HEAD = newNode);
        } 
        length++;
        let tmp = HEAD;

        while(tmp.next !== null){
            tmp = tmp.next;
        }

        tmp.next = newNode;

        
    };

    const prepend = (value) => {
        const newNode = Node(value);

        if(HEAD === null){
            length++;
            return (HEAD = newNode);
        }
        length++;
        let tmp = HEAD;
        HEAD = Node(value);
        HEAD.next = tmp;
    };

    const size = () => {
        if (!HEAD) return null;
        else return length;
    };

    const head = () => {
        if (!HEAD) return null;
        return HEAD.value;
    };

    const headPointer = () => {
        if (!HEAD) return null;
        return HEAD;
    }

    const tail = () => {
        if (!HEAD) return null;

        let tmp = HEAD;

        while(tmp){
            tmp = tmp.next;
            if (tmp.next == null){
                return tmp.value;
            }
        }
    }

    const at = (index) => {
        let count = 0;
        let current = HEAD;

        while (count != index){
            count++;
            current = current.next;
        }

        return current;
    }

    const pop = () => {
        let cur = HEAD;
        let prev = null;
        while (cur.next != null) {
        prev = cur;
        cur = cur.next;
        }
        prev.next = null;
    }

    const contains = (value) => {
        let current = HEAD;

        while(current){
            if (JSON.stringify(current.value) == JSON.stringify(value)){
                return true;
            }
            current = current.next;
        }

        return false;
    }

    const containsKey = (key) => {
        let current = HEAD;

        while(current){
            if (JSON.stringify(current.value.key) == JSON.stringify(key)){
                return true;
            }
            current = current.next;
        }

        return false;
    }

    const find = (value) => {
        let count = 0;
        let current = HEAD;

        while (current){
            if(JSON.stringify(current.value) == JSON.stringify(value)){
                return count;
            }

            count++;
            current = current.next;
        }

        return null;
    }

    const findKeyIndex = (key) => {
        let count = 0;
        let current = HEAD;

        while (current){
            if(JSON.stringify(current.value.key) == JSON.stringify(key)){
                return count;
            }

            count++;
            current = current.next;
        }

        return null;
    }

    const toString = () => {
        let current = HEAD;
        let stringedList = "";

        while (current){
            stringedList += "( " + JSON.stringify(current.value) + " )";
            if(current.next !== null){
                stringedList += " -> ";
            }
            current = current.next;
        }

        stringedList += " -> " + null;

        return stringedList;
    }

    const insertAt = (value, index) => {
        let count = 0;
        let current = HEAD;
        const newNode = Node(value);
        length++;

        if(HEAD === null){
            return (HEAD = newNode);
        } else if (index >= length || index < 0){
            return console.log("Out of range.")
        } else if(index == 0){
            length++;
            let tmp = HEAD;
            HEAD = Node(value);
            HEAD.next = tmp;
        }

        while (count < (index - 1)){
            count++;
            current = current.next;
        }

        let tmp = current;
        tmp = tmp.next;
        current.next = newNode;
        current = current.next;
        current.next = tmp;
    }

    const removeAt = (index) => {
        if (!HEAD) return null;
        if (index > length || index < 0) return;
        if (index === 0) HEAD = HEAD.next;
        else {
        const prePointer = at(index - 1);
        prePointer.next = prePointer.next.next;
        }
        length--;
    }

    return { append, prepend, size, head, tail, at, pop, contains, find, toString, insertAt, removeAt, containsKey, findKeyIndex, headPointer };
}

export default LinkedList;