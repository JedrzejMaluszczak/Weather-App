import { min, max, mean, mode } from 'simple-statistics';

export class DataTracker {
  private data: number[] = [];

  insert(value) {
    this.data.push(value);
  }

  showMin() {
    return this.data.length ? min(this.data).toFixed(1) : null;
  }

  showMax() {
    return this.data.length ? max(this.data).toFixed(1) : null;
  }

  showMean() {
    return this.data.length ? mean(this.data).toFixed(1) : null;
  }

  showMode() {
    return this.data.length ? mode(this.data).toFixed(1) : null;
  }

  isEmpty() {
    return !!this.data.length;
  }
}
