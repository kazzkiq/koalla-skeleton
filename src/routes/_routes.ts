import Router from "@koa/router";
import apiStatus from "@/routes/api-status";

const routes = new Router();

routes
  // All routes go here.
  .use(apiStatus);

export default routes.routes();
