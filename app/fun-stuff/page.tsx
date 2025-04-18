import Image from "next/image"
import { funStuffItems } from "@/lib/data"

export default function FunStuffPage() {
  return (
    <div className="min-h-screen flex flex-col items-center pt-4">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="space-y-8">
          <h1 className="text-3xl font-bold">Fun Stuff</h1>
          <div className="w-full">
            {funStuffItems.map((item, index) => (
              <div
                key={item.id}
                className={`flex ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                } items-center gap-8 mb-12 border rounded-lg p-6`}
              >
                <div className="w-1/2">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={400}
                    height={225}
                    className="rounded-lg object-cover w-full h-[225px]"
                  />
                </div>
                <div className={`w-1/2 flex flex-col justify-center ${
                  index % 2 === 0 ? "text-left" : "text-right"
                }`}>
                  <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                  <p className="text-gray-600">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
