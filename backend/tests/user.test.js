// backend/tests/user.test.js
import request from 'supertest';
import app from '../app.js';
import mongoose from 'mongoose';
import userModel from '../models/userModel.js';

describe('User Auth API', () => {
  const testEmail = `testuser_${Date.now()}@example.com`;
  const testPassword = 'testpassword123';
  const testName = 'Test User';

  // Limpieza previa y posterior
  beforeAll(async () => {
    await userModel.deleteMany({ email: testEmail });
  });
  afterAll(async () => {
    await userModel.deleteMany({ email: testEmail });
    await mongoose.connection.close();
  });

  let authToken = '';

  it('should register a new user', async () => {
    const res = await request(app)
      .post('/api/user/register')
      .send({ name: testName, email: testEmail, password: testPassword });
    expect(res.body.success).toBe(true);
    expect(res.body.token).toBeDefined();
  });

  it('should login an existing user', async () => {
    const res = await request(app)
      .post('/api/user/login')
      .send({ email: testEmail, password: testPassword });
    expect(res.body.success).toBe(true);
    expect(res.body.token).toBeDefined();
    authToken = res.body.token;
  });

  it('should get user profile with valid token', async () => {
    const res = await request(app)
      .get('/api/user/profile')
      .set('Authorization', `Bearer ${authToken}`);
    expect(res.body.success).toBe(true);
    expect(res.body.userData).toBeDefined();
    expect(res.body.userData.email).toBe(testEmail);
  });

  it('should not get user profile with invalid token', async () => {
    const res = await request(app)
      .get('/api/user/profile')
      .set('Authorization', 'Bearer invalidtoken123');
    expect(res.body.success).toBe(false);
    expect(res.body.userData).toBeUndefined();
  });

  it('should get empty appointments for new user', async () => {
    const res = await request(app)
      .get('/api/user/appointments')
      .set('Authorization', `Bearer ${authToken}`);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.appointments)).toBe(true);
    expect(res.body.appointments.length).toBe(0);
  });
});
