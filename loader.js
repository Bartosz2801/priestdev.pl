'use client'
 
export default function myImageLoader({ src, width, quality }) {
  return `https://pray.oremus-app.pl/${src}?w=${width}&q=${quality || 75}`
}