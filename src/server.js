const app = require('./app')
const { PORT } = require('./config')

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
})
