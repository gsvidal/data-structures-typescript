export class HashTable {
  // Type this better

  // data: [key: string, value: string][]
  // buckets: [][] | [[key: string], string][];
  buckets: any[];
  size: number;

  constructor(size: number) {
    this.size = size;
    this.buckets = new Array(size).fill(null).map(() => []);
  }

  hashFunction(key: string) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    console.log("hash: ", hash % this.size);
    return hash % this.size;
  }

  set(key: string, value: string) {
    const index = this.hashFunction(key);
    console.log(index);
    if (this.buckets[index].length > 0) {
      this.buckets[index].push([key, value]);
    } else {
      this.buckets[index]?.push(value);
    }
  }
}
