const resolvers ={
  Query: {
    // returns a array of Tracks that will be used to populate
    // the homepage grid of our web client
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.TrackAPI.getTracksForHome()
    }
  },
  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId)
    }
  }
}

module.exports = resolvers