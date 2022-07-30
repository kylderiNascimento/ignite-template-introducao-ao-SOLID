import express from "express";

import { usersRoutes } from "./routes/users.routes";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger.json";

const app = express();

app.use(express.json());
//rotas da documentação
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
//rotas da aplicação
app.use("/users", usersRoutes);

export { app };