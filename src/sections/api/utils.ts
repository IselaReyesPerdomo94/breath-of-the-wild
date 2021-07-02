function get<T>(url: string) :Promise<T>{
  return fetch(url, {
    "method": "GET",
  }).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return response.json() as Promise<T>
  })
}

export { get };
