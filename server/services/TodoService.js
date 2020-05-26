import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class TodosService {
  async findByUser(userId) {
    let data = await dbContext.Todos.find({ user: userId })
    return data
  }
  async edit(id, body) {
    // let data = await dbContext.Todos.findById(id, body, { new: true })
    let data = await dbContext.Todos.findOneAndUpdate({ _id: id }, body, { new: true })
    if (!data) {
      throw new BadRequest("Invalid Id")
    }
    return data
  }
  async find(query = {}) {
    let data = await dbContext.Todos.find()
    return data
  }

  async create(body) {
    return await dbContext.Todos.create(body)
  }
}

export const todosService = new TodosService();