type Mode = Record<string, string | boolean>

export function classNames(cls: string, mods: Mode, additionals: string[]): string {
  return [
    cls,
    ...additionals,
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(' ')
}
