import { IProject } from "../types/types.ts";

const isLocal = import.meta.env.NODE_ENV === "development";

export const projects: IProject[] = [
  {
    id: "Top3",
    title: "Top3",
    video: isLocal
      ? "/videos/Top3.mp4" // Local fallback
      : "https://kkdaquubuhuwwawu.public.blob.vercel-storage.com/Top3-4ZxlvAtGETsOxE7pfL3i8Njgwdw0nu.mp4",
    year: 2025,
    link: "https://top3-gamma.vercel.app/",
  },
  {
    id: "247Pilars",
    title: "247Pilars",
    video: isLocal
      ? "/videos/247Pilars.mp4"
      : "https://kkdaquubuhuwwawu.public.blob.vercel-storage.com/247Pilars-c8MQzHqtrCelOH4nFQWzsVeKjcHajw.mp4",
    year: 2025,
    link: "https://247-pilars.vercel.app/",
  },
  {
    id: "KeyPlace",
    title: "KeyPlace",
    video: isLocal
      ? "/videos/KeyPlace.mp4"
      : "https://kkdaquubuhuwwawu.public.blob.vercel-storage.com/KeyPlace-DQiW4FO9tDb4guu1ept5ANlLu9wKR7.mp4",
    year: 2025,
    link: "https://key-place.vercel.app/",
  },
  {
    id: "CountryInfo",
    title: "CountryInfo",
    video: isLocal
      ? "/videos/CountryInfo.mp4"
      : "https://kkdaquubuhuwwawu.public.blob.vercel-storage.com/CountryInfo-H7BRNWE6whK6RCs1GKa8DXyMd4vv9V.mp4",
    year: 2025,
    link: "https://the-country-info-app-iota.vercel.app/",
  },
  {
    id: "ProteinPlates",
    title: "ProteinPlates",
    video: isLocal
      ? "/videos/ProteinPlates.mp4"
      : "https://kkdaquubuhuwwawu.public.blob.vercel-storage.com/ProteinPlates-PqTTEUaGOhLldAdnJ60RI4gqlpOSwZ.mp4",
    year: 2025,
    link: "https://proteinplates-sigma.vercel.app/",
  },
  {
    id: "Jym",
    title: "Jym",
    video: isLocal
      ? "/videos/Jym.mp4"
      : "https://kkdaquubuhuwwawu.public.blob.vercel-storage.com/Jym-geu5sNRWIz8P3SBx5U7Px5HUrgx2PR.mp4",
    year: 2025,
    link: "https://gym-app-tau-swart.vercel.app/",
  },
  {
    id: "Muvi",
    title: "Muvi",
    video: isLocal
      ? "/videos/Muvi.mp4"
      : "https://kkdaquubuhuwwawu.public.blob.vercel-storage.com/Muvi-RSTap4ASHKP6B21v4AldljOfQvevhO.mp4",
    year: 2025,
    link: "https://muvi-liart.vercel.app/",
  },
];
