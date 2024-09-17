# React Recap Project - Part 3

![wireframe](../assets/part-3-1.png)

## Features

Instead of using local data from a database, fetch a "featured" album list from the provided API and display this data.

The API endpoint is

```
https://neuefische-spotify-proxy.vercel.app/api/featured
```

## Acceptance Criteria

- Above the album list, a title with the text `"featured"` is displayed
- A list of album data is fetched and displayed
- the list of albums is refactored into a Component called `AlbumList`
- While loading the data from the API, the album list should be empty

## Notes

- Fetching data is a side effect for our component, so we will need a `useEffect` somewhere
- We provide for you a simplified API for fetching data from Spotify. You still get all data from Spotify, but we removed unnecessary data points.
- You can copy the API endpoint into your browser and take a look at the data that you are fetching
