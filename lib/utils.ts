import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getImagePath(path: string): string {
  return "/images" + path;
}

export function getNotFoundImage() {
  return "/images/not_found.jpg";
}
