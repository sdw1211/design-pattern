import Factory from './Factory';
import { Korean } from './Korean';

export default class Hello {
  public greeting(type: 'KOREA' | 'ENGLISH') {

    //return '안녕하세요';
    const message = Factory.getInstance(type);
    return message.text();    
  }
}
