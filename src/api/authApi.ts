import { apiClient } from './axios';
import type { UserRole } from '@/types/auth';
import type { RegisterFormValues } from '@/validation/registerSchema';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  message: string;
  body: {
    token: string;
    role: UserRole;
  };
  success: boolean;
}

export const loginRequest = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await apiClient.post<LoginResponse>('/auth/login', data);

  return response.data;
};

export interface RegisterRequest {
  email: RegisterFormValues['email'];
  password: RegisterFormValues['password'];
  isMarketingAllow: boolean;
}

export interface RegisterResponse {
  token: string;
}

export const registerRequest = async (data: RegisterRequest): Promise<RegisterResponse> => {
  console.log('REGISTER DATA:', JSON.stringify(data));
  const response = await apiClient.post<RegisterResponse>('/auth/register', data);

  return response.data;
};
