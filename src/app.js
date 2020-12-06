import express from 'express';
import TasksRoutes from './routes/taskRoutes';
import config from './config';
import morgan from 'morgan'
import cors from 'cors'

const app = express();

// Settings

app.set('port', process.env.PORT || 3000);

// Middlewares

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false})); // Esto es para que nuestra API entienda peticiones enviadas desde un formulario HTML
app.use(cors()) // De esta manera le decimos a cors que todas las peticiones entrantes las permita
/* app.use(cors({
    origin: 'http://localhost:3000/'
})); */ // De esta manera le decimos a cors que permita solamente peticiones desde este origen

// Routes

app.get('/', (req, resp)=>{
    resp.json({
        'msg': 'Welcome to the API Tasks!'
    });
});

app.use('/api/tasks',TasksRoutes);

export default app;