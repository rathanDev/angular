export class User {

  private _username: string;
  private _password: string;
  private _verificationCode: string;

  public constructor() {
    
  }

  public get username(): string {
    return this._username;
  }

  public set username(value: string) {
    this._username = value;
  }

  public get password(): string {
    return this._password;
  }

  public set password(value: string) {
    this._password = value;
  }


  get verificationCode(): string {
    return this._verificationCode;
  }

  set verificationCode(value: string) {
    this._verificationCode = value;
  }

}
