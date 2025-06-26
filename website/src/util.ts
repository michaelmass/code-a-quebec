import { DateTime } from 'luxon'

export const formatRelativeDate = (date: Date | string) => {
  const dateTime = typeof date === 'string' ? DateTime.fromISO(date) : DateTime.fromJSDate(date)

  const now = DateTime.now()
  const diffInMinutes = dateTime.diff(now, 'minutes').minutes
  const diffInHours = dateTime.diff(now, 'hours').hours
  const diffInDays = Math.round(dateTime.diff(now, 'days').days)

  if (diffInMinutes < 2) return 'Dans quelques minutes'
  if (diffInMinutes < 60) return `Dans ${Math.floor(diffInMinutes)} minutes`
  if (diffInHours < 24) return `Dans ${Math.floor(diffInHours)} heures`
  if (diffInDays === 1) return 'Demain'

  return `Dans ${diffInDays} jours` // e.g. "9 June 2025"
}

export const getLastThursdayOfMonth = (date = new Date()) => {
  const nextThursday = new Date(date)

  while (nextThursday.getDay() !== 4) {
    nextThursday.setDate(nextThursday.getDate() + 1)
  }

  const lastThursday = new Date(nextThursday.getFullYear(), nextThursday.getMonth() + 1, 0)

  while (lastThursday.getDay() !== 4) {
    lastThursday.setDate(lastThursday.getDate() - 1)
  }

  lastThursday.setHours(18, 0, 0, 0)

  return lastThursday
}

export const formatCodeAQuebecLink = (date: Date) => {
  return `https://code-a-quebec-${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}.eventbrite.ca`
}
