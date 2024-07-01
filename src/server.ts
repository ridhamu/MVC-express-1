import app from './app';
import 'dotenv/config'; 

const PORT = process.env.PORT || 8000; 

app.listen(PORT, (): void => {
    console.log(`server running on http://localhost:${PORT}`); 
}); 