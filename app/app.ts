import express from 'express';
import { connectToPostgres } from './connections/postgres.connection';
import { registerMiddlewares } from './routes/routes';

export const startServer = async () => {
    try {
        const app = express();
        console.log(">")
        await connectToPostgres();
        console.log("1")
        registerMiddlewares(app);

        const { PORT } = process.env;
        app.listen(
            PORT,
            () => console.log(`SERVER HAS STARTED ON PORT ${PORT}`)
        );
    } catch (e) {
        console.log('SOMETHING WENT WRONG');
        process.exit(1);
    }
}