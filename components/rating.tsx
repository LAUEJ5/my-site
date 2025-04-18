import { Star, StarHalf } from "lucide-react"

export default function Rating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => {
        if (star <= Math.floor(rating)) {
          return <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
        } else if (star - 0.5 <= rating) {
          return <StarHalf key={star} className="w-5 h-5 text-yellow-400 fill-current" />
        } else {
          return <Star key={star} className="w-5 h-5 text-gray-300" />
        }
      })}
    </div>
  )
}

