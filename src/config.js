import { config } from 'dotenv';

config();

export default {
    DB: process.env.DB || 'mongodb://localhost/taskapi',
};