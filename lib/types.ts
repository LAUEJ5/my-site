export type Review = {
  id: string
  slug: string
  title: string
  year: number
  genres: string[]
  imageUrl: string
  rating: number
  reviewDate: string
  fullReview: string
  isTopFilm: boolean
}

export interface MovieList {
  id: string
  slug: string
  title: string
  description: string
  movies: {
    title: string
    year: number
    imageUrl?: string
    reviewSlug: string | null
  }[]
  createdAt: string
  updatedAt: string
}

