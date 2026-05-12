# Property X Factors Australia

A local Windows-friendly property search dashboard for Australian coastal properties.

Open `Start Property X Factors.cmd`. It starts the local server that powers the manual `Search now` button.

The app has 1052 curated property records using direct listing pages, with 1015 currently active listings. Sold, under-offer, under-contract, withdrawn, off-market, or leased records are hidden automatically. The app does not scrape portal search pages in the browser.

When opened through `Start Property X Factors.cmd`, the local server starts an automatic suburb sweep every 5 minutes. The sweep follows the selected red-line mainland coast only: starting at Adelaide, west across SA/WA to Geraldton, then looping to Mackay and following the east/south coast back through NSW, VIC, and SA. Near cities, the route breaks the coast into every direct beach-access suburb, including smaller Adelaide suburbs such as Glenelg North, Somerton Park, and Hove. Standard suburbs get up to 2 minutes; suburbs within about 2 hours of a major city get 10 minutes. It adds verified direct listing records as they are found, up to 10 per run. The `Search now` button triggers the next suburb in the same sweep immediately, and the page reloads when a search finishes.

Use `SA search` to run a focused manual search from Semaphore through Cape Jervis, preferring listings within 2 hours of Adelaide.

Use `Export table` to download the currently visible comparison table as an Excel-compatible CSV. It respects the active table filters, sort order, and the All/Favourites view.

Newly discovered properties are highlighted gold in the comparison table and marked with a star until you click the row/card or open the exact listing.

Major city access means the nearest practical drive time to Sydney, Melbourne, Brisbane, Perth, Adelaide, Gold Coast, Canberra, Hobart, or Darwin.

For a local preview URL, run:

```powershell
node preview-server.js
```

## Sharing Online

GitHub Pages can host a public viewer version of the app. It shows the latest property data committed to GitHub. The automatic searches still run from the owner's PC, so publish/push the updated files after new records are added if you want the online viewer to update.

In GitHub, open the repository, go to Settings, then Pages, choose Deploy from a branch, select `main` and `/root`, then save. GitHub will provide a public link after it finishes publishing.

The app prioritises:

- Beachfront properties
- Beachfront properties with no road in front
- Direct beach access
- Properties within 1 hour of a major city
- Larger land/block sizes
- Lower price per square metre
- Custom X factors such as dune frontage, boat access, ocean views, rental upside, and renovation potential

Use the `Favourite` button on any property card to save it. The `Favourites` view in the header shows only favourited active properties, and `Export favourites` downloads that saved list.

## Notes

Major Australian property portals usually do not allow unrestricted scraping. This app is built for compliant workflows: agent exports, your own listing notes, saved listing URLs, or a future licensed API feed.
