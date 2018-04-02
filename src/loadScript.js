const promises = {}

function loadScript(src) {
  if (promises[src]) {
    return promises[src]
  }
  const promise = promises[src] = new Promise(resolve => {
    const el = document.createElement('script')
    let loaded = false
    el.onload = el.onreadystatechange = () => {
      if ((el.readyState && el.readyState !== 'complete' && el.readyState !== 'loaded') || loaded) {
        return resolve(false)
      }
      el.onload = el.onreadystatechange = null
      loaded = true
      return resolve(true)
    }

    el.async = true
    el.src = src
    const head = document.getElementsByTagName('head')[0]
    head.insertBefore(el, head.firstChild)
  })

  return promise
}

export default loadScript
