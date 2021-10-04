import { TaskService } from '../../services';

export default async () => {
  const service = new TaskService();
  return service.find({});
};
