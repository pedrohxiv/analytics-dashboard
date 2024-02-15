import { Redis } from "@upstash/redis";

export const redis = new Redis({
  url: "https://us1-loved-raven-40539.upstash.io",
  token: process.env.REDIS_TOKEN!,
});
