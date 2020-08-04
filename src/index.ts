import "reflect-metadata";

import "reflect-metadata"; // this shim is required
import { createExpressServer, Action } from "routing-controllers";
import { createConnection } from "typeorm";
import { controllers } from "./controllers";

// creates express app, registers all controller routes and returns you express app instance
async function Application() {
  await createConnection();

  const app = createExpressServer({
    cors: true,
    controllers, // we specify controllers we want to use
    authorizationChecker: async (action: Action, roles: string[]) => {
      // here you can use request/response objects from action
      // also if decorator defines roles it needs to access the action
      // you can use them to provide granular access check
      // checker must return either boolean (true or false)
      // either promise that resolves a boolean value
      // demo code:
      const token = action.request.headers["authorization"];

      return true;

      return false;
    },
    currentUserChecker: async (action: Action) => {
      // here you can use request/response objects from action
      // you need to provide a user object that will be injected in controller actions
      // demo code:
      const token = action.request.headers["authorization"];
      return 1;
      // return getEntityManager().findOneByToken(User, token);
    },
  });

  // run express application on port 3000
  app.listen(4000);
  console.log("server started at http://localhost:4000");
}

Application();
