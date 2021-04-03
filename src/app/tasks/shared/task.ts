export class Task {
  id: number;
  description: string;
  status: boolean;

  constructor(
    id?: number,
    description?: string,
    status?: boolean
  ) {
    this.id = id;
    this.description = description;
    this.status = status;
  }
}
