export function getQueryString (url) {
  return url.split('').splice(19).join('')
}
