import { apiClient } from './apiClient';

export function getQuestions() {
  return apiClient.get('/assessment/questions');
}