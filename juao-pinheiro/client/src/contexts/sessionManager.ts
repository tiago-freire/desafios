
class SessionManager {
    private readonly TOKEN_KEY = 'token';
    private readonly USER_KEY = 'user';
    private readonly EXPIRES_AT_KEY = 'session_expires_at';
    private readonly SESSION_DURATION = 10 * 60 * 1000;
  
    saveSession(token: string, userData: any): void {
      const expiresAt = Date.now() + this.SESSION_DURATION;
      
      localStorage.setItem(this.TOKEN_KEY, token);
      localStorage.setItem(this.USER_KEY, JSON.stringify(userData));
      localStorage.setItem(this.EXPIRES_AT_KEY, expiresAt.toString());
    }
  

    isSessionValid(): boolean {
      const expiresAtStr = localStorage.getItem(this.EXPIRES_AT_KEY);
      if (!expiresAtStr) return false;
      
      const expiresAt = parseInt(expiresAtStr, 10);
      return Date.now() < expiresAt;
    }

    getUser(): any | null {
      if (!this.isSessionValid()) {
        this.clearSession();
        return null;
      }
      
      const userStr = localStorage.getItem(this.USER_KEY);
      if (!userStr) return null;
      
      this.renewSession();
      return JSON.parse(userStr);
    }
  

    getToken(): string | null {
      if (!this.isSessionValid()) {
        this.clearSession();
        return null;
      }
      
      const token = localStorage.getItem(this.TOKEN_KEY);
      this.renewSession();
      return token;
    }

    renewSession(): void {
      const expiresAt = Date.now() + this.SESSION_DURATION;
      localStorage.setItem(this.EXPIRES_AT_KEY, expiresAt.toString());
    }
  

    clearSession(): void {
      localStorage.removeItem(this.TOKEN_KEY);
      localStorage.removeItem(this.USER_KEY);
      localStorage.removeItem(this.EXPIRES_AT_KEY);
    }
  }
  
  export const sessionManager = new SessionManager();