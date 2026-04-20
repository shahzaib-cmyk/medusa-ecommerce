import { getCategoriesList } from "@lib/data/categories"
import { getCollectionsList } from "@lib/data/collections"
import { cn } from "@lib/util/cn"


import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Logo } from "@lib/components/brand/logo"

export default async function Footer() {
  const { collections } = await getCollectionsList(0, 6)
  const { product_categories } = await getCategoriesList(0, 6)

  return (
    <footer className="border-t border-border w-full bg-background" aria-label="Site footer">
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-10 xsmall:flex-row items-start justify-between py-24 small:py-32">
          
          {/* Brand & Social */}
          <div className="flex flex-col max-w-[250px]">
            <LocalizedClientLink href="/" className="mb-6 hover:opacity-80 transition-opacity">
              <Logo size="md" />
            </LocalizedClientLink>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Crafted for the curious mind. Pieces designed with intention, where quality meets simplicity.
            </p>
            <div className="flex items-center gap-4 text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="hover:text-foreground transition-colors" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" className="hover:text-foreground transition-colors" aria-label="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="text-sm gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3">
            {/* Categories */}
            {product_categories && product_categories?.length > 0 && (
              <div className="flex flex-col gap-y-4">
                <span className="font-semibold text-foreground tracking-wide text-xs uppercase">
                  Categories
                </span>
                <ul className="grid grid-cols-1 gap-y-3">
                  {product_categories?.slice(0, 6).map((c) => {
                    if (c.parent_category) return null

                    return (
                      <li key={c.id}>
                        <LocalizedClientLink
                          className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                          href={`/categories/${c.handle}`}
                        >
                          {c.name}
                        </LocalizedClientLink>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}

            {/* Collections */}
            {collections && collections.length > 0 && (
              <div className="flex flex-col gap-y-4">
                <span className="font-semibold text-foreground tracking-wide text-xs uppercase">
                  Collections
                </span>
                <ul className={cn("grid grid-cols-1 gap-y-3 text-muted-foreground", 
                  collections?.length > 3 && "grid-cols-2"
                )}>
                  {collections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="hover:text-foreground transition-colors text-sm"
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Company */}
            <div className="flex flex-col gap-y-4">
              <span className="font-semibold text-foreground tracking-wide text-xs uppercase">
                Company
              </span>
              <ul className="grid grid-cols-1 gap-y-3 text-muted-foreground">
                <li>
                  <LocalizedClientLink href="/about" className="hover:text-foreground transition-colors text-sm">
                    About Us
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink href="/contact" className="hover:text-foreground transition-colors text-sm">
                    Contact
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink href="/faq" className="hover:text-foreground transition-colors text-sm">
                    FAQ
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink href="/privacy" className="hover:text-foreground transition-colors text-sm">
                    Privacy Policy
                  </LocalizedClientLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex w-full mb-10 pt-10 border-t border-border justify-between items-center text-muted-foreground">
          <p className="text-xs">
            © {new Date().getFullYear()} YourBrand. All rights reserved.
          </p>
          <div className="text-xs flex items-center gap-4">
            <span className="hidden small:inline">Design engineered for performance.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
