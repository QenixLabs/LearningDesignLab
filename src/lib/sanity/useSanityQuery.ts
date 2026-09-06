import { useEffect, useState } from 'react';
import { sanityClient } from './client';

interface QueryResult<T> {
  data: T;
  loading: boolean;
}

/**
 * Fetches from Sanity at runtime. On any error (offline, API down, bad query)
 * returns the fallback so the public site always renders.
 */
export function useSanityQuery<T>(
  query: string,
  params: Record<string, unknown>,
  fallback: T
): QueryResult<T> {
  const [data, setData] = useState<T>(fallback);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    sanityClient
      .fetch<T>(query, params)
      .then((result) => {
        if (!cancelled && result !== null) setData(result);
      })
      .catch((err) => {
        console.error('[sanity] fetch failed, using fallback content:', err);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return { data, loading };
}
