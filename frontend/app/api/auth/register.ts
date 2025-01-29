import api from '@/utils/api';

export const register = async (email: string, password: string) => {
  return await api.post('/auth/register', { email, password });
};
