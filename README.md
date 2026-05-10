# Component Prop Schema

## Global App Tree

```mermaid
flowchart TD
  Main["main.jsx"] -->|renders| Router["BrowserRouter"]
  Router -->|wraps| App["App.jsx"]
  App -->|no props| Navbar["Navbar"]
  App -->|route: /| HomePage["HomePage"]
  App -->|route: /games| Games["Games"]
  App -->|route: /games/:game_id| GameDetailPage["GameDetail Page"]
  App -->|route: /creators| Creators["Creators"]
  App -->|route: /creator/:creatorId| CreatorDetails["CreatorDetails"]
  App -->|route: /games/:gameId/team| GameDevelopersPage["GameDevelopers Page"]
```

## Home Page Props Flow

```mermaid
flowchart TD
  HomePage["HomePage"] -->|game = topRated[3]| HeroSection["HeroSection"]
  HomePage -->|games = trending| TrendingSection["TrendingSection"]
  HomePage -->|games = topRated| TopRatedSection["TopRatedSection"]
  HomePage -->|games = spotlight| SpotlightSection["SpotlightSection"]

  HeroSection -->|state = stat| StatBox["StatBox"]
  TrendingSection -->|game, index| GameCard["GameCard"]
  TopRatedSection -->|game, height| GameCardTest["GameCardTest"]
```

## Games Page Props Flow

```mermaid
flowchart TD
  Games["Games"] -->|setCategory, activeCategory| GamesFilter["GamesFilter"]
  Games -->|game| GameAffichage["GameAffichage"]
```

## Game Detail Page Props Flow

```mermaid
flowchart TD
  GameDetailPage["GameDetail Page"] -->|game| GameDetailHero["GameDetailHero"]
  GameDetailPage -->|game| GameDetailAbout["GameDetailAbout"]
  GameDetailPage -->|game| GameDetailSidebar["GameDetailSidebare"]
```

## Creators Page Props Flow

```mermaid
flowchart TD
  Creators["Creators"] -->|creator| CreatorCard["CreatorCard"]
```

## Creator Details Page Props Flow

```mermaid
flowchart TD
  CreatorDetails["CreatorDetails"] -->|game, height| GameCardTest["GameCard (from GameCard.jsx)"]
```

## Game Developers Page Props Flow

```mermaid
flowchart TD
  GameDevelopersPage["GameDevelopers Page"] -->|no child props| UI["Inline mapped developer cards"]
```

## Props Direction Summary

```mermaid
flowchart LR
  Parent["Parent Component"] -->|props ->| Child["Child Component"]
  Child -->|event callback ->| Parent
```

