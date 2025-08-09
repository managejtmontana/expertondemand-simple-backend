import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

// Health check
app.get('/health', (req, res) => res.json({ ok: true, ts: Date.now() }))

// Simple echo endpoint for testing POSTs from your app
app.post('/echo', (req, res) => {
  res.json({ youSent: req.body || null, at: new Date().toISOString() })
})

// Root
app.get('/', (req, res) => {
  res.type('text').send('ExpertOnDemand simple backend is running. Use /health or POST /echo.')
})

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Simple backend live on :${port}`))
