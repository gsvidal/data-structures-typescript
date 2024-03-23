export class CustomArray {
  length: number;
  data: {
    [key: number]: string;
    index: number;
    value: string;
  };

  constructor() {
    this.length = 0;
    this.data = {} as {
      index: number;
      value: string;
    };
  }

  print() {
    console.log(this.length);
  }

  get(index: number) {
    return this.data[index];
  }

  push(newValue: string) {
    this.data = { ...this.data, [this.length]: newValue };
    this.length = ++this.length;
    return this.length;
  }

  pop() {
    const lastIndex = this.length - 1;
    const lastValue = this.data[lastIndex];
    delete this.data[lastIndex];
    this.length = --this.length;
    return lastValue;
  }

  unshift(newValue: string) {
    this.length = ++this.length;
    for (let i = 1; i < this.length; i++) {
      this.data[this.length - i] = this.data[this.length - (i + 1)];
    }
    this.data[0] = newValue;
    return this.length;
  }

  shift() {
    const value = this.data[0]
    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1]
    this.length = --this.length;
    return value
  }
}
