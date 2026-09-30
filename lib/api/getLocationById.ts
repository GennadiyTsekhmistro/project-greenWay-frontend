// Власник: Христина (див. docs/FRONTEND_TASKS.md)
// Функція запиту з браузера до нашого Route Handler (див. lib/api/auth.ts як приклад).
// GET /api/locations/:locationId → Location (з ownerId і feedbacksId)

import { nextServer } from './client';
import type { SingleResponse } from '@/types/api';
import type { Location } from '@/types/location';

export const getLocationById = async (locationId: string): Promise<Location> => {
  const { data } = await nextServer.get<SingleResponse<Location>>(
    `/locations/${locationId}`,
  );

  return data.data;
};
