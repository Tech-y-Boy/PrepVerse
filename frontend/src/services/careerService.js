import { apiClient } from './apiClient';

export function getAllCareers() {
  return apiClient.get('/careers');
}

export function getCareerById(id) {
  return apiClient.get(`/careers/${id}`);
}

export function getStreams() {
  return apiClient.get('/careers/streams');
}