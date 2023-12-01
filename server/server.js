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
  try {
    // Plex Refresh Movies
    console.log(await RefreshPlexMovies(req, res));

    // Plex Refresh Tv
    console.log(await RefreshPlexTv(req, res));

    // Overseerr Login
    let connectSid = await OverseerrLogin(req, res);
    console.log("Overseerr Login successful: " + connectSid);

    // Overseerr RefreshMedia
    console.log(await OverseerrMediaRefresh(connectSid, res));

    console.log("Refresh Complete");
    res.statusCode = 200;
    res.end("Refresh Complete");
  } catch (error) {
    // Handle errors
    console.log("Refresh Failed");
    res.statusCode = 500;
    res.end("Refresh Failed");
  }
});

async function OverseerrMediaRefresh(connectSid, res) {
  try {
    const result = await axios.post(
      config.overseerr.urlAvailabilitySync,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          "Api-Key": config.overseerr.apiKey,
          Cookie: "connect.sid=" + connectSid,
        },
      }
    );
  } catch (error) {
    // Handle errors in the HTTP GET request
    console.error("Error in HTTP POST request:", error.message);
  }
}

async function OverseerrLogin(req, res) {
  let connectSid = null;
  try {
    const requestBody = {
      email: config.overseerr.email,
      password: config.overseerr.password,
    };

    const response = await axios.post(config.overseerr.urlLogin, requestBody, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Parse the cookies headers into the extractCookieValue to get the connect.sid value
    const cookieArray = String(response.headers["set-cookie"]).split("; ");
    connectSid = extractCookieValue(cookieArray, "set-cookie");
  } catch (error) {
    // Handle errors in the HTTP GET request
    console.error("Error in HTTP GET request:", error.message);
  }
  return connectSid;
}

async function RefreshPlexMovies(req, res) {
  try {
    const refreshPlexMovies =
      config.plex.urlRefreshMovies + "?X-Plex-Token=" + config.plex.token;
    const response = await axios.get(refreshPlexMovies);
  } catch (error) {
    // Handle errors in the HTTP GET request
    console.error("Error in HTTP GET request:", error.message);
  }
}

async function RefreshPlexTv(req, res) {
  try {
    const refreshPlexTv =
      config.plex.urlRefreshTv + "?X-Plex-Token=" + config.plex.token;
    console.log(refreshPlexTv);
    const response = await axios.get(refreshPlexTv);
  } catch (error) {
    // Handle errors in the HTTP GET request
    console.error("Error in HTTP GET request:", error.message);
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
