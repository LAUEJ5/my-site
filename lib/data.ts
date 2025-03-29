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
  },
  {
    id: "8",
    slug: "butch-cassidy-and-the-sundance-kid",
    title: "Butch Cassidy and the Sundance Kid",
    year: 1969,
    genres: ["Western", "Adventure", "Drama"],
    imageUrl: "/movies/butch_cassidy_and_the_sundance_kid.jpg?height=450&width=300",
    rating: 4,
    reviewDate: "2025-03-24",
    fullReview: "<p>I’ve had this film on my radar for quite some time as one of the most classic and beloved Westerns of all time. The final straw pushing me to watch it came when I was vehemently urged to see it by a Texas country store cashier who looked like he would fit right in with the Hole in the Wall Gang. So two nights later, I sat down in the living room with my parents and got to watching.</p>\n\n<p>There is something very interesting about seeing older movies in that it is impossible to replicate the context of viewing the film when it first came out in theaters. With over fifty years since its release, <em>Butch Cassidy and the Sundance Kid</em> didn’t have the impact on me quite like it did on someone growing up in the ’60s on tales of the Wild West and with knowledge of the major stars of the day. So I approach this review with no bias from its popularity at the time of release and no major personal passion for its genre. I view it from the lens of someone with a general interest in film as a whole and my own knowledge that this is indeed heralded as a classic of its time.</p>\n\n<p>Yet even with my self-proclaimed objectivity, the film impressed me not with high-stakes gunslinging or outrageous lawlessness but with its core character dynamics. As the title suggests, the film follows two outlaws—Butch Cassidy and the Sundance Kid—and their various escapades after a train robbery gone wrong. And if ever the friendship between two characters in a buddy western film was apparent, it is this one. Cassidy and Sundance, come hell or high water, never fail to be cracking jokes at one another’s expense with wit and dialogue as sharp as Sundance’s shooting skills (the waterfall scene being the best example). It’s quite possible their dynamic was the motivating example behind the phrase “maybe the real destination was the friends we made along the way.”</p>\n\n<p>And while their friendship serves as the heart of the film, it is complemented by some stellar cinematography. The first scene had me excited that the rest of the film would remain in the opening, beautiful yellow-tinted black and white. Yet even though it transitioned a few minutes later, I remained impressed by the visual spectacle the film put on. It reveled in the natural beauty of the western United States that made me, at multiple times, question whether particular shots were paintings. Perhaps westerns have an unfair advantage in this department, as the scenery of the wild is unanimously deemed beautiful compared to certain cityscapes and indoor scenery. Yet <em>Butch Cassidy</em> masterfully used this advantage to its full capacity, resulting in a film whose technically simple shots were always gorgeous to look at.</p>\n\n<p>The story itself was pleasantly simple, localizing around a small segment in the careers of these two outlaws. Nothing about the story particularly blew me away, but its limited scope enabled the film to hone in on its strengths and not spend self-aggrandizing time on details unimportant to the core narrative. In short, I found the film simple, beautiful, and heartwarmingly friendly. And although it does not rank among my favorites, I can understand why some ascribe this to be a classic.</p>",
    isTopFilm: false
  },
  {
    id: "9",
    slug: "heat",
    title: "Heat",
    year: 1995,
    genres: ["Crime", "Drama", "Thriller"],
    imageUrl: "/movies/heat.jpg?height=450&width=300",
    rating: 4,
    reviewDate: "2025-03-25",
    fullReview: "<p><em>Heat</em> is director Michael Mann’s telling of a cat-and-mouse game between an LAPD officer (Al Pacino) and a career criminal (Robert De Niro) as one tails the other following a series of heists. Despite minor grievances of mine, the film stood out to me for overcoming one major problem (something I’ve personally struggled with in many films of similar duration): it made a three-hour runtime feel half that length. Supported both by high-octane action set pieces that have become the industry standard and two actors generally considered to be some of the greatest of all time, the film is engaging, exciting, and even funny at times.</p>\n\n<p>But let’s get my nitpicks out of the way. First off, for a film that relies quite a bit on the action from a few high-intensity scenes, the blocking was oftentimes hard to follow. The first heist and even the LA bank heist that is so widely praised were quite difficult to calibrate. With so many moving pieces and many characters whose fates we care about, it’s paramount that the audience does not feel lost in the sauce with such frequent camera movements and a lack of clarity. I unfortunately found myself in this boat, despite how nerve-racking and adrenaline-pumping these scenes still managed to be.</p>\n\n<p>Secondly (and much less importantly), the meaning of the title was a little too on the nose. There were frankly too many times where the “heat coming around the corner” was referenced, really beating the viewer over the head with the title card references. I did appreciate the foreshadowing of the ending that the meaning conveyed but merely felt it could have been done a little more subtly. McCauley’s (De Niro’s) choice at the end seemed spoiled as a result.</p>\n\n<p>But in regards to my praise, which definitely dominated my opinion of the film, I’m struggling to find something to say that hasn’t already been said. I found Al Pacino’s performance to be particularly compelling, and his shouting interjections at random times were very funny to me. I applaud the film’s resistance to falling into the typical tropes of heist films (building a team, planning in a warehouse, etc.), and despite my minor blocking issues, found the action to definitely be one of the peaks of the film. It seems like Michael Mann has a definitive type of film he likes to direct—and in this case, that is absolutely a compliment.</p>",
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
    slug: "jeremys-top-25",
    title: "Jeremy's Top 25",
    description: "Running list of my top 25 films in no particular order.",
    movies: [
      {
        title: "Dazed and Confused",
        year: 1993,
        imageUrl: "/movies/dazed_and_confused.jpg",
        reviewSlug: ""
      },
      {
        title: "Jurassic Park",
        year: 1993,
        imageUrl: "/movies/jurassic_park.jpg",
        reviewSlug: ""
      },
      {
        title: "Before Sunrise",
        year: 1995,
        imageUrl: "/movies/before_sunrise.jpg",
        reviewSlug: ""
      },
      {
        title: "Se7en",
        year: 1995,
        imageUrl: "/movies/se7en.jpg",
        reviewSlug: ""
      },
      {
        title: "Princess Mononoke",
        year: 1997,
        imageUrl: "/movies/princess_mononoke.jpg",
        reviewSlug: ""
      },
      {
        title: "The Iron Giant",
        year: 1999,
        imageUrl: "/movies/the_iron_giant.jpg",
        reviewSlug: ""
      },
      {
        title: "Memento",
        year: 2000,
        imageUrl: "/movies/memento.jpg",
        reviewSlug: ""
      },
      {
        title: "The Fellowship of the Ring",
        year: 2001,
        imageUrl: "/movies/fellowship.jpg",
        reviewSlug: ""
      },
      {
        title: "City of God",
        year: 2002,
        imageUrl: "/movies/city_of_god.jpg",
        reviewSlug: ""
      },
      {
        title: "Punch-Drunk Love",
        year: 2002,
        imageUrl: "/movies/punch_drunk_love.jpg",
        reviewSlug: ""
      },
      {
        title: "Eternal Sunshine of the Spotless Mind",
        year: 2004,
        imageUrl: "/movies/eternal_sunshine.jpg",
        reviewSlug: ""
      },
      {
        title: "Into the Wild",
        year: 2007,
        imageUrl: "/movies/into_the_wild.jpg",
        reviewSlug: ""
      },
      {
        title: "Inglourious Basterds",
        year: 2009,
        imageUrl: "/movies/inglourious_basterds.jpg",
        reviewSlug: "inglourious-basterds"
      },
      {
        title: "The Social Network",
        year: 2010,
        imageUrl: "/movies/the_social_network.jpg",
        reviewSlug: "the-social-network"
      },
      {
        title: "The Master",
        year: 2012,
        imageUrl: "/movies/the_master.jpg",
        reviewSlug: ""
      },
      {
        title: "Prisoners",
        year: 2013,
        imageUrl: "/movies/prisoners.jpg",
        reviewSlug: "prisoners"
      },
      {
        title: "Whiplash",
        year: 2014,
        imageUrl: "/movies/whiplash.jpg",
        reviewSlug: ""
      },
      {
        title: "Boyhood",
        year: 2014,
        imageUrl: "/movies/boyhood.jpg",
        reviewSlug: "boyhood"
      },
      {
        title: "The Grand Budapest Hotel",
        year: 2014,
        imageUrl: "/movies/the_grand_budapest_hotel.jpg",
        reviewSlug: "the-grand-budapest-hotel"
      },
      {
        title: "Steve Jobs",
        year: 2015,
        imageUrl: "/movies/steve_jobs.jpg",
        reviewSlug: ""
      },
      {
        title: "Parasite",
        year: 2019,
        imageUrl: "/movies/parasite.jpg",
        reviewSlug: ""
      },
      {
        title: "The Batman",
        year: 2022,
        imageUrl: "/movies/the_batman.jpg",
        reviewSlug: ""
      },
      {
        title: "Everything Everywhere All At Once",
        year: 2022,
        imageUrl: "/movies/everything_everywhere.jpg",
        reviewSlug: ""
      },
      {
        title: "RRR",
        year: 2022,
        imageUrl: "/movies/rrr.jpg",
        reviewSlug: ""
      },
      {
        title: "Dune: Part Two",
        year: 2024,
        imageUrl: "/movies/dune_part_2.jpg",
        reviewSlug: ""
      }
    ],    
    createdAt: "2025-03-19",
    updatedAt: "2025-03-19",
  },
  {
    id: "2",
    slug: "so-bad-theyre-good",
    title: "So Bad They're Good",
    description: "Always get me in a good mood.",
    movies: [
        {
          title: "Batman and Robin",
          year: 1997,
          imageUrl: "/movies/batman_and_robin.jpg",
          reviewSlug: ""
        },
        {
          title: "The Room",
          year: 2003,
          imageUrl: "/movies/the_room.jpg",
          reviewSlug: ""
        },
        {
          title: "Master of Disguise",
          year: 2003,
          imageUrl: "/movies/master_of_disguise.jpg",
          reviewSlug: ""
        },
        {
          title: "Twilight",
          year: 2008,
          imageUrl: "/movies/twilight.jpg",
          reviewSlug: ""
        },
        {
          title: "Birdemic: Shock and Terror",
          year: 2010,
          imageUrl: "/movies/birdemic.jpg",
          reviewSlug: ""
        },
        {
          title: "VelociPastor",
          year: 2018,
          imageUrl: "/movies/velocipastor.jpg",
          reviewSlug: ""
        },
        {
          title: "CIApe",
          year: 2021,
          imageUrl: "/movies/ciape.jpg",
          reviewSlug: ""
        }     
    ],    
    createdAt: "2025-03-19",
    updatedAt: "2025-03-19",
  },
]

export const getReviewById = (id: string): Review | undefined => {
  return reviews.find((review) => review.id === id)
}

export const getListById = (id: string): MovieList | undefined => {
  return movieLists.find((list) => list.id === id)
}

