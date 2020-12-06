import app from './app'
import './database'

// This file start the application

app.listen(app.get('port'))
console.log('Server executing on http://localhost:3000/')