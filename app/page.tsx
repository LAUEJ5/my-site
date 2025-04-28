"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Linkedin, Github, Film } from "lucide-react"
import { getTopFilms } from "@/lib/data"
import { getImagePath, getNotFoundImage } from "@/lib/utils"
import { getRecentReviews } from "@/lib/data"

export default function Home() {
  const topFilms = getTopFilms().slice(0, 5)
  const recentReviews = getRecentReviews(5)

  return (
    <div className="min-h-screen flex flex-col items-center pt-4">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          {/* Right side - Profile image and social icons (first on mobile) */}
          <div className="flex-1 flex flex-col items-center gap-8 order-1 md:order-2">
            <div className="flex flex-col items-center gap-6">
              <Image
                src="/images/jeremy_profile.jpeg"
                alt="Jeremy's profile picture"
                width={300}
                height={300}
                className="rounded-full w-[300px] h-[300px] object-cover object-[center_15%] scale-100"
              />
            </div>
            {/* Social icons (desktop only) */}
            <div className="hidden md:flex justify-center gap-10">
              <Link
                href="https://www.linkedin.com/in/jeremy-laue/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-10 h-10" />
              </Link>
              <Link
                href="https://github.com/LAUEJ5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-10 h-10" />
              </Link>
              <Link
                href="https://letterboxd.com/jeremylaue/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Film className="w-10 h-10" />
              </Link>
            </div>
          </div>

          {/* Left side - Text content (second on mobile) */}
          <div className="flex-1 space-y-6 order-2 md:order-1">
            <div className="space-y-4">
              <h1 className="text-7xl font-bold">Hey.</h1>
              <h2 className="text-5xl font-semibold text-muted-foreground">I&apos;m Jeremy.</h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex gap-3">
                <Link href="https://www.harvard.edu/" target="_blank" rel="noopener noreferrer" className="flex gap-3 hover:opacity-75 transition-opacity">
                  <div className="flex items-center">
                    <Image
                      src="/images/icons/harvard.png"
                      alt="Harvard icon"
                      width={24}
                      height={24}
                      className="rounded-full object-cover object-[center_30%]"
                    />
                  </div>
                  <p className="text-lg">
                    <span className="md:hidden">CS and Econ at Harvard</span>
                    <span className="hidden md:inline">Computer Science and Economics at Harvard</span>
                  </p>
                </Link>
              </div>
              <div className="flex gap-3">
                <Link href="https://store.google.com/intl/en/ideas/google-pixel-phones/" target="_blank" rel="noopener noreferrer" className="flex gap-3 hover:opacity-75 transition-opacity">
                  <div className="flex items-center">
                    <Image
                      src="/images/icons/google_icon.jpeg"
                      alt="Google icon"
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                  </div>
                  <p className="text-lg">
                    <span className="md:hidden">APM Intern at Google</span>
                    <span className="hidden md:inline">APM Intern at Google on Pixel AI</span>
                  </p>
                </Link>
              </div>
              <div className="flex gap-3">
                <Link href="https://www.tesla.com" target="_blank" rel="noopener noreferrer" className="flex gap-3 hover:opacity-75 transition-opacity">
                  <div className="flex items-center">
                    <Image
                      src="/images/icons/tesla_icon.jpeg"
                      alt="Tesla icon"
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                  </div>
                  <p className="text-lg">
                    <span className="md:hidden">Product Engineer Intern at Tesla</span>
                    <span className="hidden md:inline">Product Engineer Intern at Tesla on InfoTech</span>
                  </p>
                </Link>
              </div>
              <div className="flex gap-3">
                <Link href="https://www.humana.com/" target="_blank" rel="noopener noreferrer" className="flex gap-3 hover:opacity-75 transition-opacity">
                  <div className="flex items-center">
                    <Image
                      src="/images/icons/humana_icon.jpeg"
                      alt="Humana icon"
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                  </div>
                  <p className="text-lg">
                    <span className="md:hidden">SWE Intern at Humana</span>
                    <span className="hidden md:inline">SWE Intern at Humana on Enterprise Mobility</span>
                  </p>
                </Link>
              </div>
              <div className="flex gap-3">
                <Link href="https://www.hcsproductlab.org/" target="_blank" rel="noopener noreferrer" className="flex gap-3 hover:opacity-75 transition-opacity">
                  <div className="flex items-center">
                    <Image
                      src="/images/icons/hpl_icon.jpeg"
                      alt="Harvard Product Lab icon"
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                  </div>
                  <p className="text-lg">
                    <span className="md:hidden">SPM at Harvard Product Lab</span>
                    <span className="hidden md:inline">Senior Product Manager at Harvard Product Lab</span>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Recently Reviewed Section */}
        <section className="w-full mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-center">Recently Reviewed</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {recentReviews.map((film) => (
              <Link
                key={film.id}
                href={`/reviews/${film.slug}`}
                className="space-y-2 block hover:opacity-75 transition-opacity"
              >
                <Image
                  src={getImagePath(film.imageUrl) || getNotFoundImage()}
                  alt={`${film.title} poster`}
                  width={300}
                  height={450}
                  className="rounded-lg shadow-md w-full"
                />
                <h3 className="text-sm font-semibold text-center">{film.title}</h3>
                <p className="text-xs text-muted-foreground text-center">{film.year}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Top Five Films Section (third on mobile) */}
        <section className="w-full order-3">
          <h2 className="text-2xl font-semibold mb-4 text-center">My Top Five Films</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {topFilms.map((film) => (
              <Link
                key={film.id}
                href={`/reviews/${film.slug}`}
                className="space-y-2 block hover:opacity-75 transition-opacity"
              >
                <Image
                  src={getImagePath(film.imageUrl) || getNotFoundImage()}
                  alt={`${film.title} poster`}
                  width={300}
                  height={450}
                  className="rounded-lg shadow-md w-full"
                />
                <h3 className="text-sm font-semibold text-center">{film.title}</h3>
                <p className="text-xs text-muted-foreground text-center">{film.year}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Social icons (mobile only) */}
        <div className="flex justify-center gap-10 mt-8 md:hidden">
          <Link
            href="https://www.linkedin.com/in/jeremy-laue/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="w-10 h-10" />
          </Link>
          <Link
            href="https://github.com/LAUEJ5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="w-10 h-10" />
          </Link>
          <Link
            href="https://letterboxd.com/jeremylaue/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Film className="w-10 h-10" />
          </Link>
        </div>
      </div>
    </div>
  )
}
