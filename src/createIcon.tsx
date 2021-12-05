import React from 'react'
import { Icon, IconProps } from './Icon'

interface CreateIconOptions {
    /**
     * The `svg` path or group element
     */
    path: React.ReactElement | React.ReactElement[]
    /**
     * The background shape with badgeRadius property
     */
    rectElement?: React.ReactElement
}

/**
 * Convenience function around the Icon component
 */
export function createIcon(options: CreateIconOptions) {
    const { path, rectElement } = options

    return React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
        const { badgeRadius = 12, ...rest } = props

        return (
            <Icon {...rest} ref={ref}>
                {rectElement &&
                    React.cloneElement(rectElement, { rx: badgeRadius })}
                {path}
            </Icon>
        )
    })
}
