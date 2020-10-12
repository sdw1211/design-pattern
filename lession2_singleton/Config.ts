export default class Config {
  private static instance: Config;
  private constructor() {
    console.log('클래스가 생성되었습니다.');
  }
  public static getInstance() {
    if (!this.instance) {
      this.instance = new Config();
    }
    return this.instance;
  }
}