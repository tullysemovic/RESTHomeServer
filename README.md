# Readme

This Web Server designed to handle API calls to my Home Server. Specifically integrating the refreshing of my plex libraries and Overseerr media avaliability scans.

## Commands

### Docker Build

(Only run this command once)

```
docker buildx create --use
```

Build the dockerfile for multiarch platform (manily armv7 since this will be running on a Raspberry Pi 3B +)

```
docker buildx build --platform arm/v7,arm/v6 -t tsemovic/RESTHomeServer --push
```
