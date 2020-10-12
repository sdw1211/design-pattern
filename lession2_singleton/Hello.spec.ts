import Config from "./Config";
import Hello from "./Hello";

describe('싱글톤을 테스트', () => {
  it('싱글톤 이름을 테스트', () => {
    const obj = new Hello();
    expect(obj.greeting()).toBe('안녕하세요!');
  });
  it('생성자가 실행합니다.', () => {
    const obj1 = Config.getInstance();
    const obj2 = Config.getInstance();
    const obj3 = Config.getInstance();

  })
});