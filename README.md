# Trie Implementation in JavaScript

This repository contains a simple implementation of a **Trie** (Prefix Tree) data structure in JavaScript. The Trie supports three operations:

### Features

- **insert(word)** — Adds a word to the Trie.
- **search(word)** — Returns `true` if the word exists in the Trie.
- **startsWith(prefix)** — Returns `true` if any word in the Trie starts with the given prefix.


### Example Usage

```
const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple"));    // true
console.log(trie.search("app"));      // false
console.log(trie.startsWith("app"));  // true
trie.insert("app");
console.log(trie.search("app"));      // true
```

### How to Run

You can run the script in any JavaScript environment such as:
- Browser console
- Node.js (`node trie_implementation.js`)

---

Challenge Deadline: **11th June 2025, 6:00 AM**  
