import { RESTDataSource } from "@apollo/datasource-rest";

export class TrackAPI extends RESTDataSource {
  baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";

  getTracksForHome() {
    return this.get("track");
  }

  getAuthor(authorId: string) {
    return this.get(`author/${encodeURIComponent(authorId)}`);
  }
}
