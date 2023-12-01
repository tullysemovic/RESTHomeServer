var config = {};

config.plex = {
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
};

config.port = 3000;

module.exports = config;
