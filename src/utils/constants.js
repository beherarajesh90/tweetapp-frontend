const ROOT_URL = "http://52.66.24.250:8080/api/v1.0/tweetapi";
const API_URLS = {
  login: () => `${ROOT_URL}/login`,
  register: () => `${ROOT_URL}/register`,
  allTweets: () => `${ROOT_URL}/all`,
  addTweet: (username) => `${ROOT_URL}/${username}/add`,
  deleteTweet: (username, id) => `${ROOT_URL}/${username}/delete/${id}`,
  updateTweet: (username, tweetId) =>
    `${ROOT_URL}/${username}/update/${tweetId}`,
  replyToTweet: (username, tweetId) =>
    `${ROOT_URL}/${username}/reply/${tweetId}`,
  toggleLike: (username, id) => `${ROOT_URL}/${username}/like/${id}`,
  allUsers: () => `${ROOT_URL}/users/all`,
  searchUser: (username)=>`${ROOT_URL}/user/search/${username}`,
  tweetsOfUser: (username) => `${ROOT_URL}/${username}`,
};

export default API_URLS;
