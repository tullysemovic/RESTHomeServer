var config = {};

config.plex = {
  urlRefreshMovies: "http://10.0.0.10:32400/library/sections/1/refresh",
  urlRefreshTv: "http://10.0.0.10:32400/library/sections/2/refresh",
  token: "s***REMOVED***",
};

config.overseerr = {
  urlLogin: "http://streaming.home.local/api/v1/auth/local",
  email: "***REMOVED***",
  password: "***REMOVED***",
};

config.port = 3000;

module.exports = config;
