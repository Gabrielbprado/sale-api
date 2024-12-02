import AppDataSource from "@shared/typeorm/database";
import routes from "@shared/http/routes";
import express from "express";



const app = express();

app.use(express.json());
app.use(routes);
app.get("/", (request:any, response:any) => {
    return response.json({ message: "Hello World" });
});

if (require.main === module) { app.listen(3000, () => { console.log('Server started on port 3000'); }); }

AppDataSource.initialize()
    .then(() => {
        console.log("Database connected");
    })
    .catch((error) => console.log(error))

export default app;

