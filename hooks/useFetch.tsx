"use client"

import { useCallback, useEffect, useState } from "react"
import axios, { type AxiosRequestConfig } from "axios"

type QueryValue = string | number | boolean | null | undefined

type FetchStatus = "idle" | "loading" | "success" | "error"

type UseFetchOptions = {
  params?: Record<string, QueryValue>
  headers?: AxiosRequestConfig["headers"]
  enabled?: boolean
  keepPreviousData?: boolean
  withCredentials?: boolean
  timeout?: number
}

type FetchError = {
  message: string
  status?: number
}

type UseFetchResult<T> = {
  data: T | undefined
  error: FetchError | null
  status: FetchStatus
  isLoading: boolean
  isFetching: boolean
  isSuccess: boolean
  isError: boolean
  refetch: () => void
}

export function useFetch<T>(
  url: string,
  options: UseFetchOptions = {},
): UseFetchResult<T> {
  const {
    params,
    headers,
    enabled = true,
    keepPreviousData = false,
    withCredentials = false,
    timeout,
  } = options

  const [data, setData] = useState<T>()
  const [error, setError] = useState<FetchError | null>(null)
  const [status, setStatus] = useState<FetchStatus>("idle")
  const [requestCount, setRequestCount] = useState(0)

  // Deterministic query string: new params objects won't
  // restart the effect unless their actual values change.
  const queryString = new URLSearchParams(
    Object.entries(params ?? {}).flatMap(([key, value]) =>
      value == null ? [] : [[key, String(value)]],
    ),
  ).toString()

  const requestUrl = queryString
    ? `${url}${url.includes("?") ? "&" : "?"}${queryString}`
    : url

  useEffect(() => {
    if (!enabled) return

    const controller = new AbortController()

    async function execute() {
      setStatus("loading")
      setError(null)

      if (!keepPreviousData) {
        setData(undefined)
      }

      try {
        const response = await axios.get<T>(requestUrl, {
          signal: controller.signal,
          headers,
          withCredentials,
          timeout,
        })

        if (controller.signal.aborted) return

        setData(response.data)
        setStatus("success")
      } catch (err) {
        if (controller.signal.aborted || axios.isCancel(err)) return

        const fetchError: FetchError = axios.isAxiosError(err)
          ? {
              message:
                err.response?.data?.message ??
                err.message ??
                "Request failed",
              status: err.response?.status,
            }
          : {
              message:
                err instanceof Error
                  ? err.message
                  : "An unexpected error occurred",
            }

        setError(fetchError)
        setStatus("error")
      }
    }

    void execute()

    return () => controller.abort()
  }, [
    requestUrl,
    enabled,
    keepPreviousData,
    requestCount,
    headers,
    withCredentials,
    timeout,
  ])

  const refetch = useCallback(() => {
    setRequestCount((count) => count + 1)
  }, [])

  const isFetching = enabled && status === "loading"

  return {
    data,
    error,
    status,
    isLoading: isFetching && data === undefined,
    isFetching,
    isSuccess: status === "success" && error === null,
    isError: status === "error",
    refetch,
  }
}
