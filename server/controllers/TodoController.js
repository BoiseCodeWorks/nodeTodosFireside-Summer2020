import express from "express";
import BaseController from "../utils/BaseController";
import { todosService } from "../services/TodoService";

export class TodoController extends BaseController {

  constructor() {
    super("api/todos");
    this.router
      // .get("", this.getAll)
      .get("", this.getMine)

      .post("/:userDeetz", this.create)
      .put("/:id", this.edit);
  }
  // async getAll(req, res, next) {
  //   try {
  //     let data = await todosService.find(req.query.info)
  //     res.send(data)
  //   } catch (error) {
  //     next(error);
  //   }
  // }
  async getMine(req, res, next) {
    try {
      let data = await todosService.findByUser(req.query.info)
      res.send(data)
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      req.body.user = req.params.userDeetz
      let data = await todosService.create(req.body)
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async edit(req, res, next) {
    let data = await todosService.edit(req.params.id, req.body)
    res.send(data)
  }

}
