const API_KEY = "AIzaSyCZ6A7sAJBiVKWFfLerQLL3bBbocKDcbVw";

export const fetchTagsUrl =
  "https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=" +
  API_KEY;

export const API_CALL_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=16&regionCode=IN&key=" +
  API_KEY;

export const PROFILE_PICTURE_FETCHER = async (channelId) => {
  try {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${API_KEY}`
    );
    const data = await res?.json();
    const profilePictureUrl = data?.items[0]?.snippet?.thumbnails?.default?.url;
    return profilePictureUrl;
  } catch (e) {
    console.log("coudnt fetch channel profile picture");
  }
};

export const moreVideosFetcherAPI = async (token) => {
  try {
    const res = await fetch(`${API_CALL_URL}&pageToken=${token}`);
    const data = await res?.json();
    if (data) return data;
  } catch (err) {
    console.log(err);
  }
};
