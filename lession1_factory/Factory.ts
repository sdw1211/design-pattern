import { English } from './English';
import { Korean } from './Korean';
export default class Factory {
  public static getInstance(type: 'KOREA' | 'ENGLISH') {
    if (type === 'KOREA') {
      return new Korean();
    }
    return new English();
  }
}