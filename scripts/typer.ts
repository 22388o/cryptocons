interface IconNames {
  badge: string[]
  logo: string[]
}

/**
 * Creates type definitions for icon names used in Logo and Badge components.
 */
export function typify(filenames: string[]) {
  const sortedNames = filenames.reduce(
    (accumulator, iconName) => {
      const iconType = iconName.includes('Badge') ? 'badge' : 'logo'
      accumulator[iconType].push(`'${iconName}'`)
      return accumulator
    },
    { badge: [], logo: [] } as IconNames
  )

  const logoNames = sortedNames.logo.join(' | ')
  const badgeNames = sortedNames.badge.join(' | ')

  return `
      export type LogoNames = ${logoNames}

      export type BadgeNames = ${badgeNames}
      `
}
