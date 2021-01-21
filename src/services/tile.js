export default function pageTitle(page) {
  if (page) {
    return document.title = `${page} | Fernando Portfolio`
  } else {
    return document.title = `Fernando Portfolio`
  }
} 