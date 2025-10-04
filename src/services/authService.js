import { getApiBaseUrl, getTenantHeaders, isMasterAdminDomain } from '@/utils/tenant';

const API_URL = getApiBaseUrl();

class AuthService {
  // ==================== MASTER ADMIN ====================

  async masterAdminLogin(email, password) {
    const response = await fetch(`${API_URL}/auth/master/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Erro ao fazer login');
    }

    const data = await response.json();
    this.setToken(data.accessToken);
    this.setUser(data.user);
    return data;
  }

  // ==================== BARBERSHOP ADMIN ====================

  async barbershopAdminLogin(username, password) {
    const response = await fetch(`${API_URL}/auth/barbershop-admin/login`, {
      method: 'POST',
      headers: getTenantHeaders(),
      body: JSON.stringify({ username, password })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Erro ao fazer login');
    }

    const data = await response.json();
    this.setToken(data.accessToken);
    this.setUser(data.user);
    return data;
  }

  async createBarbershopAdmin(username, password, barbershopId) {
    const token = this.getToken();
    const response = await fetch(`${API_URL}/auth/barbershop-admin/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ username, password, barbershopId })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Erro ao criar admin');
    }

    return await response.json();
  }

  // ==================== CLIENT ====================

  async clientLogin(email, password) {
    const response = await fetch(`${API_URL}/auth/client/login`, {
      method: 'POST',
      headers: getTenantHeaders(),
      body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Erro ao fazer login');
    }

    const data = await response.json();
    this.setToken(data.accessToken);
    this.setUser(data.user);
    return data;
  }

  async clientRegister(name, email, password, phone) {
    const response = await fetch(`${API_URL}/auth/client/register`, {
      method: 'POST',
      headers: getTenantHeaders(),
      body: JSON.stringify({ name, email, password, phone })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Erro ao registrar');
    }

    return await response.json();
  }

  // ==================== EMAIL VERIFICATION ====================

  async verifyEmail(token) {
    const response = await fetch(`${API_URL}/auth/verify-email`, {
      method: 'POST',
      headers: getTenantHeaders(),
      body: JSON.stringify({ token })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Erro ao verificar email');
    }

    return await response.json();
  }

  // ==================== PASSWORD RESET ====================

  async requestPasswordReset(email) {
    const response = await fetch(`${API_URL}/auth/password/request-reset`, {
      method: 'POST',
      headers: getTenantHeaders(),
      body: JSON.stringify({ email })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Erro ao solicitar reset de senha');
    }

    return await response.json();
  }

  async resetPassword(token, newPassword) {
    const response = await fetch(`${API_URL}/auth/password/reset`, {
      method: 'POST',
      headers: getTenantHeaders(),
      body: JSON.stringify({ token, newPassword })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Erro ao resetar senha');
    }

    return await response.json();
  }

  // ==================== TOKEN & USER MANAGEMENT ====================

  setToken(token) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('authToken', token);
    }
  }

  getToken() {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('authToken');
    }
    return null;
  }

  setUser(user) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('user', JSON.stringify(user));
    }
  }

  getUser() {
    if (typeof window !== 'undefined') {
      const user = localStorage.getItem('user');
      return user ? JSON.parse(user) : null;
    }
    return null;
  }

  logout() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
    }
  }

  isAuthenticated() {
    return !!this.getToken();
  }

  getUserRole() {
    const user = this.getUser();
    return user?.role || null;
  }

  isMasterAdmin() {
    return this.getUserRole() === 'master';
  }

  isBarbershopAdmin() {
    return this.getUserRole() === 'barbershop_admin';
  }

  isClient() {
    return this.getUserRole() === 'client';
  }
}

export default new AuthService();
