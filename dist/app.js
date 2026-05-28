import express from 'express';
const app = express();
// Middleware para entender JSON
app.use(express.json());
// Ruta de prueba
app.get('/', (req, res) => {
    res.json({ message: 'URL Shortener API está corriendo perfectamente!' });
});
export default app;
//# sourceMappingURL=app.js.map