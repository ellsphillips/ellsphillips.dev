import { ClassValue, clsx } from "clsx"
import { format, isThisYear } from "date-fns"
import { twMerge } from "tailwind-merge"

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const formatShortDate = (date: string) => {
  const _date = new Date(date)

  return isThisYear(_date) ? format(_date, "MMM d") : format(_date, "MMM d, y")
}
