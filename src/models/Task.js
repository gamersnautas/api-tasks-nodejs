import { Schema, model } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2'

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    done: {
        type: Boolean,
        default: false
    }
    // Para evitar que aparezca el __v cuando se crea el objeto le passamos la siguiente propiedad en llaves
    // versionKey evita el __v cuando se crea el objeto y timestamps agrega la fecha de creación y de actualización del objeto
}, {
    versionKey: false,
    timestamps: true
});

taskSchema.plugin(mongoosePaginate);

export default model('Task', taskSchema);