var config = {};

config.plex = {
<<<<<<< HEAD
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
=======
  urlRefreshMovies: "http://10.0.0.10:32400/library/sections/1/refresh",
  urlRefreshTv: "http://10.0.0.10:32400/library/sections/2/refresh",
  token: "sxfDwnwBdVr2TWcbDwyR",
};

config.overseerr = {
  urlLogin: "http://streaming.home.local/api/v1/auth/local",
  urlAvailabilitySync:
    "http://streaming.home.local/api/v1/settings/jobs/availability-sync/run",
  email: "ww9qhvhfng@privaterelay.appleid.com",
  password: "Subes2005",
  apiKey:
    "MTY3NzExMzE0OTk2NzViZDZmODY5LTRkZjItNDM4MC05NzM2LTljZWYyN2Q3NThjZSk=",
>>>>>>> e8632c3f486066c4eaaf2e862e7c9d9530ef0d1d
};

config.port = 3000;
config.plexOverseerrWait = 10000;

module.exports = config;
