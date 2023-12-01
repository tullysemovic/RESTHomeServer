const config = require("./config");
const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

const hostname = "127.0.0.1";
const port = config.port;

app.listen(port, () => {
  console.log("Server Listening on PORT:", port);
});

app.get("/plexRefresh", async (req, res) => {
  //await RefreshPlexMovies(req, res);
  //await RefreshPlexTv(req, res);
});

async function RefreshPlexMovies(req, res) {
  try {
    const refreshPlexMovies =
      config.plex.urlRefreshMovies + "?X-Plex-Token=" + config.plex.token;
    const response = await axios.get(refreshPlexMovies);

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Plex Movies Refreshed Successfully");
  } catch (error) {
    // Handle errors in the HTTP GET request
    console.error("Error in HTTP GET request:", error.message);
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/plain");
    res.end("Internal Server Error\n");
  }
}

async function RefreshPlexTv(req, res) {
  try {
    const refreshPlexTv =
      config.plex.urlRefreshTv + "?X-Plex-Token=" + config.plex.token;
    console.log(plexUrl);
    const response = await axios.get(refreshPlexTv);

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Plex Tv Refreshed Successfully");
  } catch (error) {
    // Handle errors in the HTTP GET request
    console.error("Error in HTTP GET request:", error.message);
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/plain");
    res.end("Internal Server Error\n");
  }
}

function extractCookieValue(cookieArray) {
  const regex = /connect\.sid=([^;]+)/;
  for (const cookie of cookieArray) {
    const match = cookie.match(regex);
    if (match) {
      return match[1];
    }
  }
  return null; // Return null if the cookie is not found
}
