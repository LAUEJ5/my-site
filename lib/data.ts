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
    reviewDate: "2024-12-30",
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
    genres: ["Drama", "History", "War"],
    imageUrl: "/movies/inglourious_basterds.jpg?height=450&width=300",
    rating: 5,
    reviewDate: "2022-11-11",
    fullReview: "to be inserted",
    isTopFilm: true,
  },
  {
    id: "6",
    slug: "ikiru",
    title: "Ikiru",
    year: 1952,
    genres: ["Drama"],
    imageUrl: "/movies/ikiru.jpg?height=450&width=300",
    rating: 4,
    reviewDate: "2025-03-07",
    fullReview: "<p>What would you do if you knew you were going to die in 6 months? This is the question that Akira Kurosawa’s 1952 film <em>Ikiru</em> asks of the viewer—one its protagonist finds himself grappling with after a stomach cancer diagnosis. Realizing he has left behind no real legacy, public affairs director Kanji Watanabe decides to make an impact by coordinating an effort to reconstruct a local park.</p>\n\n<p>Replicated countless times since (<em>Breaking Bad, The Fault in Our Stars</em>, etc.), the theme of finding purpose in the face of death is a concept not exactly foreign to the screen. But what is most emotionally compelling is how the film trades the scope and existentialism of discovering meaning in mortality with a resonant and actionable message about being greedy for the enjoyment of life. It is impossible to watch the film without being pestered by the question of “What would I do in Watanabe’s situation?” and luckily for the audience, a solution is offered. For Watanabe, this solution comes in the form of emulating a young ex-employee of his office, Toyo Odagiri. As Watanabe is drawn to the young woman’s constant laughter and unbridled authenticity, the audience considers what is actually important in the grand scheme of things. Despite Watanabe’s relative “success” in his career, it is the unemployed yet joyous Odagiri who is truly living the more valuable life. And just as she has affected him, Watanabe seeks to make an impact in the lives of others.</p>\n\n<p>What <em>Ikiru</em> does best is turning the deeply personal story of a man grappling for meaning onto its audience. And if the first half of the film sets up for its viewer this idea of exhibiting a greediness for life, the second half depicts the potential of its effects. <strong>(Spoiler alert)</strong> Abruptly in the middle, the film cuts to seven months in the future—Watanabe has died, the park has been built, and his funeral is underway. It is through discussions and flashbacks of Watanabe’s peers (<em>12 Angry Men</em>-style) that we piece together the events of the past months and find out that Watanabe was indeed successful in his mission. Here, the effects of Watanabe’s transition are separated into three camps, each with their own lesson associated.</p>\n\n<p>It is in Watanabe’s coworkers where <em>Ikiru</em> instructs that a greediness for life will not be understood by all. Indeed, in many cases, those who do not understand will seek to discredit, as the other city officials brush aside the effort put forth by Watanabe. The film instructs us of the personal nature of our own search for meaning and how fulfillment should not (and perhaps cannot) come from the recognition of others. Yet that is not to say it won’t do external good. In the second camp are the women of the neighborhood where the park was built. Moved by his death and in appreciation of his effort, they attend the funeral with quiet respect and profound understanding of the time and effort Watanabe poured into their community. They show us that while our own search for meaning will not be understood by all, there are still those who will be deeply impacted by the example we set.</p>\n\n<p>In the final camp, and perhaps most importantly, is Watanabe himself, who, via flashback, is shown spending his final few moments singing <em>Life is Brief</em> as he sits on a swing in his newly built park. Earlier in the film, this exact song served as the culminating moment of Watanabe’s despair. He drunkenly sings it alone in a bar as he realizes he hadn’t followed the song’s advice to live life to the fullest. Yet now, at the very end of his life, the song’s meaning changes—as against all odds, he was able to follow its teachings and make an impact. He contentedly sits alone with this realization, conveying to the viewer that the most important effect of the search for meaning is felt personally. It’s not the newly built park that is Watanabe’s legacy; it's his success in making an impact ultimately on himself.</p>\n\n<p>Conveying this sentiment is my favorite moment in the film, which occurs as Watanabe is physically threatened by competing interests who do not want to see the park built. They ask, “What’s the matter? Don’t you value your life?” Watanabe only smiles to himself, and we, the audience, know it’s because, at last, he finally does.</p>",
    isTopFilm: false
  },
  {
    id: "7",
    slug: "mickey-17",
    title: "Mickey 17",
    year: 2025,
    genres: ["Sci-Fi", "Action", "Comedy"],
    imageUrl: "/movies/mickey_17.jpg?height=450&width=300",
    rating: 3,
    reviewDate: "2025-03-11",
    fullReview: "<p>Bong Joon Ho’s <em>Mickey 17</em> follows Mickey Barnes (Robert Pattinson), who joins a space colony as an “Expendable,” a disposable worker who gets cloned and reprinted every time he dies for research purposes. Hilarity ensues when an accidental Mickey 18 is printed before Mickey 17 has a chance to die. While the film’s premise and execution are truly quite bizarre, it retains a sense of self-awareness and relishes in its unorthodoxy—I’m looking at you, Mark Ruffalo’s teeth. Yet despite the film’s bold choices and genuinely funny performances, it ultimately is unable to maintain the absurdity of its first act and falls into many of the expected beats of modern sci-fi action films.</p>\n\n<p>Let’s start with what the film does well. Luckily, we need not look far, as its strengths are apparent from the very beginning. Robert Pattinson narrates the 30-minute opening, and through a combination of his Looney Tunes-esque performance and the positioning of a regular guy in a wildly absurd situation, we cannot help but like our protagonist. From the introduction of the premise, the viewer is drawn in and left pondering (as many side characters ask of Mickey) how it must feel to die over and over again. Our curiosity surrounding Mickey’s job makes us view death through his eyes—via a lens of humor and indifference. The film moves on to describe Mickey’s preceding circumstances and, as any sci-fi film must, world-build. Yet while narration and heavy exposition are usually tools to be frowned upon, here they work, as each scene adds another detail depicting how such a regular guy could be caught up in such a weird situation. In this way, the film successfully accomplishes three major things with its opening—endearing us to its protagonist, making us question how we would respond in his situation, and getting us invested in the sci-fi setting behind the premise. Genuinely a fun and engaging time.</p>\n\n<p>Yet beyond the title card, the film loses steam. While perfectly set up to do some serious (and at times comedic) exploration of individuality despite replication and indifference in the face of death, <em>Mickey 17</em> sacrifices these themes to become almost a screwball comedy featuring two Pattinsons and a roster of underdeveloped and only somewhat compelling side characters. What could have been an absurdist comedy with something to say about the human condition becomes a formulaic action film following the all-too-familiar pattern of action blockbusters—defeating some villain by achieving some goal and saving the day. On top of this, many subplots that raised excellent questions about one’s relationship to their own clone (sharing romantic partners, sacrificing oneself for oneself) were pushed aside in favor of the main plot and only haphazardly tied up as seeming afterthoughts.</p>\n\n<p>Ultimately, <em>Mickey 17</em> is a very fun watch but fails to be anything more than that. Perhaps the bar was set too high given the inevitability of comparisons to its masterpiece of a predecessor, <em>Parasite</em>, and Bong Joon Ho in the director’s chair wasn’t enough to save the film at the box office. However, the film has plenty of merit in its lead performance, its setting, and its jokes, which admittedly had me laughing pretty hard in theaters.</p>",
    isTopFilm: false
  }
  
  

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

