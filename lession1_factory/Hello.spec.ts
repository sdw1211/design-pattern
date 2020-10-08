import Factory from './Factory';
import Hello from './Hello';

describe('Lession1 Test',  () => {
  it('Hello 객체의 greeting() 한글 메서드 호출 테스트', () => {
    const hello = new Hello();
    expect(hello.greeting('KOREA')).toBe('안녕하세요');
  });
  it('Hello 객체의 greeting() 영어 메서드 호출 테스트', () => {
    const hello = new Hello();
    expect(hello.greeting('ENGLISH')).toBe('Hello');
  });
});

