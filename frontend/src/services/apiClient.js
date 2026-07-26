const BASE_URL = import.meta.env.VITE_API_BASE_URL;

async function request(endpoint, options = {}) {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      headers: { 'Content-Type': 'application/json' },
      ...options,
    });

    if (!res.ok) {
      throw { status: res.status, message: `Request failed: ${res.statusText}` };
    }

    return await res.json();
  } catch (err) {
    throw {
      status: err.status || 500,
      message: err.message || 'Something went wrong. Please try again.',
    };
  }
}

export const apiClient = {
  get: (endpoint) => request(endpoint),
  post: (endpoint, body) => request(endpoint, { method: 'POST', body: JSON.stringify(body) }),
};