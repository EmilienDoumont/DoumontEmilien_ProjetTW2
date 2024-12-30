import { User } from '../src/models/user';

describe('User', () => {
  test('should create a User instance from JSON', () => {
    const json = {
      id: 1,
      name: 'Alice Dupont',
      role: 'buyer',
      email: 'alice@example.com',
      password: 'hashed_password_123'
    };
    const user = User.fromJSON(json);

    expect(user).toBeInstanceOf(User);
    expect(user.name).toBe('Alice Dupont');
    expect(user.email).toBe('alice@example.com');
  });
});
