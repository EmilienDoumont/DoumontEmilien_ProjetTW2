import { User } from '../src/models/user';

describe('User', () => {
  test('should create a User instance from JSON', () => {
    const json = {
      id: 1,
      name: 'Olivia Marshall',
      role: 'buyer',
      email: 'oli.marshall@icloud.com',
      password: 'hashed_password_123'
    };
    const user = User.fromJSON(json);

    expect(user).toBeInstanceOf(User);
    expect(user.name).toBe('Olivia Marshall');
    expect(user.email).toBe('oli.marshall@icloud.com');
  });
});
