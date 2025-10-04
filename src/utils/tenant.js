/**
 * Utilitário para detecção de tenant (multi-tenant)
 */

/**
 * Extrai o subdomínio da URL
 * @returns {string|null} Subdomínio ou null
 */
export function getTenantFromUrl() {
  if (typeof window === 'undefined') return null;

  const hostname = window.location.hostname;

  // Localhost ou desenvolvimento
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    return null;
  }

  // Master admin
  if (hostname === 'admin.fswbarber.com' || hostname.startsWith('admin.')) {
    return null;
  }

  // Extrai subdomínio
  const parts = hostname.split('.');

  // Se for subdomínio: vintagebarber.fswbarber.com
  if (parts.length >= 3) {
    return parts[0];
  }

  // Se for domínio customizado: www.vintagebarber.com.br
  // Neste caso, você precisará de uma lógica adicional no backend
  // para mapear domínio customizado -> slug da barbearia
  return null;
}

/**
 * Verifica se está no ambiente Master Admin
 * @returns {boolean}
 */
export function isMasterAdminDomain() {
  if (typeof window === 'undefined') return false;

  const hostname = window.location.hostname;
  return hostname === 'admin.fswbarber.com' || hostname.startsWith('admin.');
}

/**
 * Retorna a base URL da API baseado no ambiente
 * @returns {string}
 */
export function getApiBaseUrl() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  // Se está em localhost, usa a variável de ambiente
  if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
    return apiUrl || 'http://localhost:3001';
  }

  // Em produção, usa o mesmo domínio
  return apiUrl || '';
}

/**
 * Retorna headers para requisições com tenant
 * @returns {Object}
 */
export function getTenantHeaders() {
  const tenant = getTenantFromUrl();
  const headers = {
    'Content-Type': 'application/json'
  };

  // Em desenvolvimento local, envia tenant via header
  if (tenant && typeof window !== 'undefined' && window.location.hostname === 'localhost') {
    headers['X-Tenant-Subdomain'] = tenant;
  }

  return headers;
}
