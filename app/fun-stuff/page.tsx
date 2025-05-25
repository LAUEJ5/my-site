"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { getFunStuffItems } from "@/lib/data"
import Link from "next/link"
import { Pagination } from "@/components/pagination"

const ITEMS_PER_PAGE = 10

export default function FunStuffPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const allItems = getFunStuffItems()
  
  const totalPages = Math.ceil(allItems.length / ITEMS_PER_PAGE)
  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    return allItems.slice(startIndex, startIndex + ITEMS_PER_PAGE)
  }, [allItems, currentPage])

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo(0, 0)
  }

  return (
    <div className="min-h-screen flex flex-col items-center pt-4">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-8">
          <h1 className="text-3xl font-bold">Fun Stuff</h1>
          <div className="space-y-8">
            {paginatedItems.map((item, idx) => {
              const CardContent = () => (
                <div
                  className={`flex flex-col md:flex-row ${
                    idx % 2 === 0 ? "" : "md:flex-row-reverse"
                  } gap-6 items-center`}
                >
                  <div className={`w-full md:w-1/2 ${item.type === "video" ? "h-[400px]" : ""}`}>
                    {item.type === "video" ? (
                      <div className="w-full h-full relative">
                        <video
                          src={item.imageUrl}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="absolute inset-0 w-full h-full object-cover rounded-lg"
                          style={{ objectPosition: "center 30%" }}
                        />
                      </div>
                    ) : item.type === "dual-photo" ? (
                      <div className="w-full h-full relative flex flex-col md:flex-row">
                        <div className="w-full md:w-1/2 relative" style={{ aspectRatio: '3/4' }}>
                          <Image
                            src={item.imageUrl}
                            alt={`${item.title} - First image`}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority={idx === 0}
                            loading={idx === 0 ? "eager" : "lazy"}
                            quality={85}
                            className="rounded-t-lg md:rounded-l-lg md:rounded-tr-none object-cover"
                            style={{ objectPosition: item.objectPosition || "center center" }}
                          />
                        </div>
                        <div className="w-full md:w-1/2 relative" style={{ aspectRatio: '3/4' }}>
                          <Image
                            src={item.imageUrl2!}
                            alt={`${item.title} - Second image`}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority={idx === 0}
                            loading={idx === 0 ? "eager" : "lazy"}
                            quality={85}
                            className="rounded-b-lg md:rounded-r-lg md:rounded-bl-none object-cover"
                            style={{ objectPosition: item.objectPosition2 || "center center" }}
                          />
                        </div>
                      </div>
                    ) : item.type === "quad-photo" ? (
                      <div className="w-full h-full relative grid grid-cols-2 grid-rows-2 gap-1">
                        <div className="relative" style={{ aspectRatio: '1/1' }}>
                          <Image
                            src={item.imageUrl}
                            alt={`${item.title} - Top left image`}
                            fill
                            sizes="(max-width: 768px) 50vw, 25vw"
                            priority={idx === 0}
                            loading={idx === 0 ? "eager" : "lazy"}
                            quality={85}
                            className="rounded-tl-lg object-cover"
                            style={{ objectPosition: item.objectPosition || "center center" }}
                          />
                        </div>
                        <div className="relative" style={{ aspectRatio: '1/1' }}>
                          <Image
                            src={item.imageUrl2!}
                            alt={`${item.title} - Top right image`}
                            fill
                            sizes="(max-width: 768px) 50vw, 25vw"
                            priority={idx === 0}
                            loading={idx === 0 ? "eager" : "lazy"}
                            quality={85}
                            className="rounded-tr-lg object-cover"
                            style={{ objectPosition: item.objectPosition2 || "center center" }}
                          />
                        </div>
                        <div className="relative" style={{ aspectRatio: '1/1' }}>
                          <Image
                            src={item.imageUrl3!}
                            alt={`${item.title} - Bottom left image`}
                            fill
                            sizes="(max-width: 768px) 50vw, 25vw"
                            priority={idx === 0}
                            loading={idx === 0 ? "eager" : "lazy"}
                            quality={85}
                            className="rounded-bl-lg object-cover"
                            style={{ objectPosition: item.objectPosition3 || "center center" }}
                          />
                        </div>
                        <div className="relative" style={{ aspectRatio: '1/1' }}>
                          <Image
                            src={item.imageUrl4!}
                            alt={`${item.title} - Bottom right image`}
                            fill
                            sizes="(max-width: 768px) 50vw, 25vw"
                            priority={idx === 0}
                            loading={idx === 0 ? "eager" : "lazy"}
                            quality={85}
                            className="rounded-br-lg object-cover"
                            style={{ objectPosition: item.objectPosition4 || "center center" }}
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
                        <Image
                          src={item.imageUrl}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority={idx === 0}
                          loading={idx === 0 ? "eager" : "lazy"}
                          quality={85}
                          className="rounded-lg object-cover"
                          style={{ objectPosition: item.objectPosition || "center center" }}
                        />
                      </div>
                    )}
                  </div>
                  <div className="w-full md:w-1/2 space-y-2">
                    <h2 className="text-2xl font-semibold">{item.title}</h2>
                    <p className="text-muted-foreground">{item.date}</p>
                  </div>
                </div>
              )

              return item.link ? (
                <Link
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-90 transition-opacity"
                >
                  <CardContent />
                </Link>
              ) : (
                <div key={item.id}>
                  <CardContent />
                </div>
              )
            })}
          </div>
          {totalPages > 1 && (
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
          )}
        </div>
      </div>
    </div>
  )
}
