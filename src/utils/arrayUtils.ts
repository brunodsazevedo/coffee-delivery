export function groupBy<T, K extends keyof T>(array: T[], property: K) {
  return array.reduce(
    (acc, obj) => {
      const key = obj[property] as unknown as string
      if (!acc[key]) {
        acc[key] = []
      }
      acc[key].push(obj)
      return acc
    },
    {} as Record<string, T[]>,
  )
}

export function sectionListFormatted<T, K extends keyof T>(
  array: T[],
  property: K,
) {
  const dataGrouped = groupBy(array, property)

  const dataGroups = Object.keys(dataGrouped)

  const response = dataGroups.map((group) => {
    return {
      title: group,
      data: dataGrouped[group],
    }
  })
  return response
}
