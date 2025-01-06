export class User {
  constructor(
    public id: number,
    public name: string,
    public role: string,
    public email: string,
    public password: string
  ) {}

  static fromJSON(json: any): User {
    return new User(json.id, json.name, json.role, json.email, json.password);
  }
}
