import Link from "next/link"

import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import PaginatedProducts from "@modules/store/templates/paginated-products"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type SearchResultsTemplateProps = {
  query: string
  ids: string[]
  sortBy?: SortOptions
  page?: string
  countryCode: string
}

const SearchResultsTemplate = ({
  query,
  ids,
  sortBy,
  page,
  countryCode,
}: SearchResultsTemplateProps) => {
  const pageNumber = page ? parseInt(page) : 1

  return (
    <>
      <div className="flex justify-between border-b border-border w-full py-6 px-8 small:px-14 items-center bg-background">
        <div className="flex flex-col items-start translate-y-[-2px]">
          <span className="text-sm text-muted-foreground">Search Results for:</span>
          <h1 className="text-2xl font-bold text-foreground">
            {decodeURI(query)} ({ids.length})
          </h1>
        </div>
        <LocalizedClientLink
          href="/store"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Clear
        </LocalizedClientLink>
      </div>
      <div className="flex flex-col small:flex-row small:items-start p-6">
        {ids.length > 0 ? (
          <>
            <RefinementList sortBy={sortBy || "created_at"} search />
            <div className="content-container">
              <PaginatedProducts
                productsIds={ids}
                sortBy={sortBy}
                page={pageNumber}
                countryCode={countryCode}
              />
            </div>
          </>
        ) : (
          <p className="ml-8 small:ml-14 mt-3 text-muted-foreground">No results.</p>
        )}
      </div>
    </>
  )
}

export default SearchResultsTemplate
