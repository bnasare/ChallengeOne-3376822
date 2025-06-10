class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    search(word) {
        let node = this._searchPrefix(word);
        return node !== null && node.isEndOfWord;
    }

    startsWith(prefix) {
        return this._searchPrefix(prefix) !== null;
    }

    _searchPrefix(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) {
                return null;
            }
            node = node.children[char];
        }
        return node;
    }
}

const trie = new Trie();
console.log(trie.insert("apple"));
console.log(trie.search("apple"));
console.log(trie.search("app"));
console.log(trie.startsWith("app"));
console.log(trie.insert("app"));
console.log(trie.search("app"));
