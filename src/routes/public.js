import { ChannelDetail, SearchFeed, VideoDetail } from "../Components";

export const publicRoutes = [
  {
    path: "/video/:id",
    element: <VideoDetail />
  },
  {
    path: "channel/:id",
    element: <ChannelDetail />
  },
  {
    path: "search/:searchTerm",
    element: <SearchFeed />
  }
]