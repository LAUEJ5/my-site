import Image from "next/image"
import { getFunStuffItems } from "@/lib/data"
import Link from "next/link"

export default function FunStuffPage() {
  const items = getFunStuffItems()

  return (
    <div className="min-h-screen flex flex-col items-center pt-4">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-8">
          <h1 className="text-3xl font-bold">Fun Stuff</h1>
          <div className="space-y-8">
            {items.map((item, idx) => {
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
                            className="rounded-t-lg md:rounded-l-lg md:rounded-tr-none object-cover"
                            style={{ objectPosition: item.objectPosition || "center center" }}
                          />
                        </div>
                        <div className="w-full md:w-1/2 relative" style={{ aspectRatio: '3/4' }}>
                          <Image
                            src={item.imageUrl2!}
                            alt={`${item.title} - Second image`}
                            fill
                            className="rounded-b-lg md:rounded-r-lg md:rounded-bl-none object-cover"
                            style={{ objectPosition: item.objectPosition2 || "center center" }}
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
                        <Image
                          src={item.imageUrl}
                          alt={item.title}
                          fill
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
        </div>
      </div>
    </div>
  )
}
