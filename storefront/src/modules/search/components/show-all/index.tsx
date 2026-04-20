import { useHits, useSearchBox } from "react-instantsearch"

import InteractiveLink from "@modules/common/components/interactive-link"

const ShowAll = () => {
  const { hits } = useHits()
  const { query } = useSearchBox()
  const width = typeof window !== "undefined" ? window.innerWidth : 0

  if (query === "") return null
  if (hits.length > 0 && hits.length <= 6) return null

  if (hits.length === 0) {
    return (
      <div
        className="flex gap-2 justify-center h-fit py-4 border border-border rounded-lg bg-muted/30"
        data-testid="no-search-results-container"
      >
        <p className="text-sm text-muted-foreground">No results found.</p>
      </div>
    )
  }

  return (
    <div className="flex sm:flex-col small:flex-row gap-2 justify-center items-center h-fit py-4 small:py-3 border border-border rounded-lg bg-muted/30">
      <p className="text-sm text-muted-foreground">Showing the first {width > 640 ? 6 : 3} results.</p>
      <InteractiveLink href={`/results/${query}`}>View all</InteractiveLink>
    </div>
  )
}

export default ShowAll
