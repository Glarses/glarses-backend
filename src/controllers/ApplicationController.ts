import { User } from "./../models/User";
import { Body, Post, OnUndefined, JsonController } from "routing-controllers";
import { EchoPayload } from "../payloads";

@JsonController("/application")
export class ApplicationController {
  @Post("/echo")
  @OnUndefined(404)
  public async getAll(@Body() echoDelta: EchoPayload): Promise<EchoPayload> {
    let users = await User.findOne(5);
    return echoDelta;
  }
}
