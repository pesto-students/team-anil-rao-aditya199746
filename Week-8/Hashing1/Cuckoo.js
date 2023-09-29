const TABLE_SIZE = 10;

// Initialize two empty hash tables
const hashTable1 = new Array(TABLE_SIZE).fill(null);
const hashTable2 = new Array(TABLE_SIZE).fill(null);

// Define two hash functions
function hashFunction1(key) {
  // Replace this with your custom hash function
  return key % TABLE_SIZE;
}

function hashFunction2(key) {
  // Replace this with your custom hash function
  return (key * 2) % TABLE_SIZE;
}

// Function to insert a key-value pair into the hash tables
function insertKey(hashTable, key, value) {
  let currentKey = key;
  let currentValue = value;

  for (let i = 0; i < TABLE_SIZE; i++) {
    const hash1 = hashFunction1(currentKey);
    const hash2 = hashFunction2(currentKey);

    if (hashTable === hashTable1) {
      // Check if the slot in hashTable1 is empty
      if (hashTable1[hash1] === null) {
        hashTable1[hash1] = { key: currentKey, value: currentValue };
        return;
      } else {
        // Swap the current key-value pair with the one in hashTable1 and re-insert the displaced pair
        const tempKey = hashTable1[hash1].key;
        const tempValue = hashTable1[hash1].value;
        hashTable1[hash1] = { key: currentKey, value: currentValue };

        currentKey = tempKey;
        currentValue = tempValue;
        hashTable = hashTable2; // Switch to hashTable2 for the next iteration
      }
    } else if (hashTable === hashTable2) {
      // Check if the slot in hashTable2 is empty
      if (hashTable2[hash2] === null) {
        hashTable2[hash2] = { key: currentKey, value: currentValue };
        return;
      } else {
        // Swap the current key-value pair with the one in hashTable2 and re-insert the displaced pair
        const tempKey = hashTable2[hash2].key;
        const tempValue = hashTable2[hash2].value;
        hashTable2[hash2] = { key: currentKey, value: currentValue };

        currentKey = tempKey;
        currentValue = tempValue;
        hashTable = hashTable1; // Switch to hashTable1 for the next iteration
      }
    }
  }

  // If the maximum number of iterations is reached and no empty slot is found, rehash the entire table
  rehashTables();
}

// Function to rehash both tables if the maximum number of iterations is reached
function rehashTables() {
  const newTableSize = TABLE_SIZE * 2; // Double the table size for rehashing

  // Initialize new hash tables with the updated size
  const newHashTable1 = new Array(newTableSize).fill(null);
  const newHashTable2 = new Array(newTableSize).fill(null);

  // Reinsert all elements from the old tables into the new tables using the updated hash functions
  for (let i = 0; i < TABLE_SIZE; i++) {
    if (hashTable1[i] !== null) {
      insertKey(newHashTable1, hashTable1[i].key, hashTable1[i].value);
    }
    if (hashTable2[i] !== null) {
      insertKey(newHashTable2, hashTable2[i].key, hashTable2[i].value);
    }
  }

  // Update the global hash tables with the new ones
  hashTable1.length = 0;
  hashTable2.length = 0;
  hashTable1.push(...newHashTable1);
  hashTable2.push(...newHashTable2);
}

// Example usage:
// Start iterating through the key-value pairs entered by the user
const keyValues = [
  { key: 1, value: "Value1" },
  { key: 2, value: "Value2" },
  { key: 12, value: "Value3" },
  // Add more key-value pairs as needed
];

for (const { key, value } of keyValues) {
  insertKey(hashTable1, key, value);
}

// Display the contents of both hash tables
console.log("HashTable1:", hashTable1);
console.log("HashTable2:", hashTable2);