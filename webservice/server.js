const express = require("express")
const fetch = require("node-fetch")
const cors = require("cors")

/*const corsOptions = {
  origin: "http://localhost:5173/", // Allow all origins
  methods: ["GET", "POST"], // Allow GET and POST requests
  allowedHeaders: ["Content-Type", "Authorization"], // Allow Content-Type and Authorization headers
}
*/

const app = express()
app.use(express.json())
app.use(cors())
app.use(express.json())
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

/*app.use(
  cors({
    origin: "http://localhost:5173/",
  })
)
*/
console.log(process.env.MOVIE_AUTH_CODE)

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.MOVIE_AUTH_CODE,
  },
}

app.get("/movies", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,
      options
    )
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()

    const cleanMovies = data.results.map((movie) => ({
      id: movie.id,
      title: movie.title,
      poster_path: movie.poster_path,
      overview: movie.overview,
    }))
    res.json(cleanMovies)
    console.log(cleanMovies)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Server error" })
  }
})

app.listen(7700, () => console.log("Server running on port 7700"))

app.get("/", (req, res) => {
  res.send("Hello World!")
})
