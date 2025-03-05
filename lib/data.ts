import type { Review, MovieList } from "./types"

export const reviews: Review[] = [
  {
    id: "1",
    slug: "the-grand-budapest-hotel",
    title: "The Grand Budapest Hotel",
    year: 2014,
    genres: ["Adventure", "Drama"],
    imageUrl: "/movies/the_grand_budapest_hotel.jpg?height=450&width=300",
    rating: 5,
    reviewDate: "2023-12-30",
    fullReview: "Review to be inserted",
    isTopFilm: true,
  },
  {
    id: "2",
    slug: "prisoners",
    title: "Prisoners",
    year: 2013,
    genres: ["Action", "Crime", "Mystery", "Thriller"],
    imageUrl: "/movies/prisoners.jpg?height=450&width=300",
    rating: 5,
    reviewDate: "2023-05-18",
    fullReview: "to be inserted",
    isTopFilm: true,
  },
  {
    id: "3",
    slug: "boyhood",
    title: "Boyhood",
    year: 2014,
    genres: ["Documentary", "Drama"],
    imageUrl: "/movies/boyhood.jpg?height=450&width=300",
    rating: 5,
    reviewDate: "2024-03-30",
    fullReview: "tob e inserted",
    isTopFilm: true,
  },
  {
    id: "4",
    slug: "the-social-network",
    title: "The Social Network",
    year: 2010,
    genres: ["Drama", "History"],
    imageUrl: "/movies/the_social_network.jpg?height=450&width=300",
    rating: 5,
    reviewDate: "2023-02-19",
    fullReview: "to be inserted",
    isTopFilm: true,
  },
  {
    id: "5",
    slug: "inglourious-basterds",
    title: "Inglourious Basterds",
    year: 2009,
    genres: ["Action", "Drama", "History", "War"],
    imageUrl: "/movies/inglourious_basterds.jpg?height=450&width=300",
    rating: 5,
    reviewDate: "2022-11-15",
    fullReview: "to be inserted",
    isTopFilm: true,
  },

]

export const genres = [
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "History",
  "Horror",
  "Music",
  "Mystery",
  "Romance",
  "Science Fiction",
  "TV Movie",
  "Thriller",
  "War",
  "Western",
]

export const getRecentReviews = (count: number): Review[] => {
  return [...reviews]
    .sort((a, b) => new Date(b.reviewDate).getTime() - new Date(a.reviewDate).getTime())
    .slice(0, count)
}

export const getTopFilms = (): Review[] => {
  return reviews.filter((review) => review.isTopFilm)
}

export const movieLists: MovieList[] = [
  {
    id: "1",
    slug: "mind-bending-sci-fi",
    title: "Mind-Bending Sci-Fi",
    description: "Films that will make you question reality.",
    movies: [
      { reviewId: "1", notes: "A classic of the genre." },
      { reviewId: "2", notes: "Chilling and thought-provoking." },
      { reviewId: "3", notes: "Visually stunning and action-packed." },
      { reviewId: "4", notes: "A wild ride through the multiverse." },
      { reviewId: "5", notes: "Everything you could ever want in a movie." },
    ],
    createdAt: "2024-03-01",
    updatedAt: "2024-03-15",
  },
]

export const getReviewById = (id: string): Review | undefined => {
  return reviews.find((review) => review.id === id)
}

export const getListById = (id: string): MovieList | undefined => {
  return movieLists.find((list) => list.id === id)
}

