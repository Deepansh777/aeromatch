import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const PORT = Number(process.env.PORT) || 5000;

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'aeromatch-backend', time: new Date().toISOString() });
});

app.get('/api/aircraft', (_req, res) => {
  res.json([
    { id: 1, name: 'Cessna Citation CJ4', range_nm: 2165, seats: 8 },
    { id: 2, name: 'Gulfstream G500', range_nm: 5200, seats: 13 }
  ]);
});

app.listen(PORT, () => {
  console.log(`[backend] listening on http://localhost:${PORT}`);
});
