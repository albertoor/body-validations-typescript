import express from "express"
import PostRouter from './routes/PostRouter'

const app = express()
const PORT = 4000

// Configurations
app.use(express.json())
// Routes
app.use('/api/v1/posts', PostRouter)

// Start server
app.listen(PORT, function () {
  console.log(`Server running on port ${PORT}`)
})

