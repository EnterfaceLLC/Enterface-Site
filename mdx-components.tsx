import type { MDXComponents } from 'mdx/types'
import { ComponentPropsWithoutRef } from 'react'
import { highlight } from 'sugar-high'

type GalleryImage = {
  src: string
  alt: string
  caption?: string
}

function ImageGallery({ images }: { images: GalleryImage[] }) {
  return (
    <div className="not-prose grid grid-cols-2 gap-3">
      {images.map((img, i) => (
        <figure key={i} className="m-0 space-y-1">
          <div className="overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-900">
            <img
              src={img.src}
              alt={img.alt}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          {img.caption && (
            <figcaption className="text-center text-xs text-zinc-500 dark:text-zinc-400">
              {img.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  )
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ImageGallery,
    Cover: ({
      src,
      alt,
      caption,
    }: {
      src: string
      alt: string
      caption: string
    }) => {
      return (
        <figure>
          <img src={src} alt={alt} className="rounded-xl" />
          <figcaption className="text-center">{caption}</figcaption>
        </figure>
      )
    },
    code: ({ children, ...props }: ComponentPropsWithoutRef<'code'>) => {
      const codeHTML = highlight(children as string)
      return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
    },
  }
}
