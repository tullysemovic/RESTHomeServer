var config = {};

config.plex = {
  urlRefreshMovies: "plexMovieUrl",
  urlRefreshTv: "plexTvUrl",
  token: "plexToken",
};

config.overseerr = {
  urlLogin: "overseerrLoginUrl",
  urlAvailabilitySync: "overseerrAvailabilitySyncUrl",
  email: "overseerrEmail",
  password: "overseerrPassowrd",
  apiKey: "overseerrApiKey",
};

config.port = 3000;
config.plexOverseerrWait = 20000;

module.exports = config;
