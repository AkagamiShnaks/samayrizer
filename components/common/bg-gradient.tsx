import { cn } from "@/lib/utils";

export default function BgGradient({
  className,
}: {
  className?: string;
}) {
  return (
    <div className="relative isolate">
      {/* Dark overlay tint */}
      <div className="absolute inset-0 bg-black/50 -z-20" />

      {/* Gradient blob shape */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-x-0 top-40 -z-10
          transform-gpu
          overflow-hidden
          blur-3xl
          sm:top-30
        "
      >
        <div
          style={{
            clipPath:
              'polygon(50% 0%, 61% 35%, 90% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 10% 35%, 39% 35%)',
          }}
          className={cn(
            `
              relative
              left-[calc(50%_-_11rem)]
              aspect-[1155/678]
              w-[36.125rem]
              -translate-x-1/2
              rotate-[30deg]
              opacity-20

              bg-gradient-to-br
              from-indigo-800
              via-purple-800
              to-blue-900

              sm:left-[calc(50%_-_30rem)]
              sm:w-[72rem]
            `,
            className
          )}
        />
      </div>
    </div>
  );
}
