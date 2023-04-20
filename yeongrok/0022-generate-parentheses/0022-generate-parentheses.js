class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const root = new Node("(");

    const isOpenable = (node) => {
        let curr = node;
        const used = {
            "(": 0,
            ")": 0,
        };
        const unused = {
            "(": {
                get() {
                    return n - used["("];
                },
            },
            ")": {
                get() {
                    return n - used[")"];
                },
            },
        };
        while (curr) {
            if (curr.value === "(") used["("]++;
            else used[")"]++;
            curr = curr.parent;
        }
        return unused["("].get() > 0 && unused["("].get() <= unused[")"].get();
    };

    const isClosable = (node) => {
        let curr = node;
        const used = {
            "(": 0,
            ")": 0,
        };
        while (curr) {
            if (curr.value === "(") used["("]++;
            else used[")"]++;
            curr = curr.parent;
        }
        return used["("] > used[")"];
    };

    const results = [];

    const makeGraph = (node, distance = 0) => {
        if (distance === n * 2 - 1) {
            let str = "";
            let curr = node;
            while (curr) {
                str = curr.value + str;
                curr = curr.parent;
            }
            results.push(str);
            return;
        }

        if (isOpenable(node)) {
            node.left = new Node("(");
            node.left.parent = node;
            makeGraph(node.left, distance + 1);
        }
        if (isClosable(node)) {
            node.right = new Node(")");
            node.right.parent = node;
            makeGraph(node.right, distance + 1);
        }
    };

    makeGraph(root);
    return results;
};
