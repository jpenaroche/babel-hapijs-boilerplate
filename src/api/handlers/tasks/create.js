import { TaskService } from '../../services';

export default async (request, h) => {
  const service = new TaskService();
  const task = await service.create(request.payload.task);
  return h.response({ task }).code(201);
};
