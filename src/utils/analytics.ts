import { parse } from "date-fns";

import { redis } from "@/lib/redis";
import { getDate } from "@/utils";

type AnalyticsArgs = {
  retention?: number;
};

type TrackOptions = {
  persist?: boolean;
};

export class Analytics {
  private retention: number = 60 * 60 * 24 * 7;

  constructor(options?: AnalyticsArgs) {
    if (options?.retention) {
      this.retention = options.retention;
    }
  }

  async track(namespace: string, event: object = {}, options?: TrackOptions) {
    let key = `analytics::${namespace}`;

    if (!options?.persist) {
      key += `::${getDate()}`;
    }

    await redis.hincrby(key, JSON.stringify(event), 1);

    if (!options?.persist) {
      await redis.expire(key, this.retention);
    }
  }

  async retrieve(namespace: string, date: string) {
    const response = await redis.hgetall<Record<string, string>>(
      `analytics::${namespace}::${date}`
    );

    return {
      date,
      events: Object.entries(response ?? []).map(([key, value]) => ({
        [key]: Number(value),
      })),
    };
  }

  async retrieveDays(namespace: string, nDays: number) {
    const promises: ReturnType<typeof analytics.retrieve>[] = [];

    for (let i = 0; i < nDays; i++) {
      const formattedDate = getDate(i);
      const promise = analytics.retrieve(namespace, formattedDate);

      promises.push(promise);
    }

    const fetched = await Promise.all(promises);

    const data = fetched.sort((a, b) => {
      if (
        parse(a.date, "dd/MM/yyyy", new Date()) >
        parse(b.date, "dd/MM/yyyy", new Date())
      ) {
        return 1;
      } else {
        return -1;
      }
    });

    return data;
  }
}

export const analytics = new Analytics();
