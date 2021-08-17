const base = 'metrics'

export const getItem = (key) => {
  const value = localStorage.getItem(`${base}-${key}`)

  try {
    return JSON.parse(value)
  } catch (e) {
    return value
  }
}

export const setItem = (key, value) => localStorage.setItem(`${base}-${key}`, JSON.stringify(value))
