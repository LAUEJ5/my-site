import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { movieLists } from "@/lib/data"
import type { Metadata } from "next"
import { getImagePath, getNotFoundImage } from "@/lib/utils"

export const dynamicParams = true
export default async function ListPage({ params }: { params: { slug: string } }) {
  const slug = params?.slug
  const list = movieLists.find((l) => l.slug === slug)

  if (!list) notFound()

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">{list.title}</h1>
        <p className="text-muted-foreground">{list.description}</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {list.movies.map((film, idx) => {
          const imageSrc = getImagePath(film.imageUrl ?? "") || getNotFoundImage()

          const card = (
            <Card className="overflow-hidden flex flex-col items-center text-center p-4 h-full">
              <Image
                src={imageSrc}
                alt={`${film.title} poster`}
                width={160}
                height={240}
                className="rounded-md object-cover mb-4"
              />
              <CardContent className="p-0">
                <h2 className="text-base font-medium">{film.title}</h2>
                <p className="text-sm text-muted-foreground">{film.year}</p>
              </CardContent>
            </Card>
          )

          return film.reviewSlug ? (
            <Link
              key={idx}
              href={`/reviews/${film.reviewSlug}`}
              className="block hover:opacity-90 transition h-full"
            >
              {card}
            </Link>
          ) : (
            <div key={idx} className="h-full">
              {card}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return movieLists.map((list) => ({
    slug: list.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const list = movieLists.find((l) => l.slug === params.slug)
  if (!list) notFound()

  return {
    title: list.title,
    description: list.description,
  }
}