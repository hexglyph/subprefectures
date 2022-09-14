//Accessibility Item Component

import { AccessibilityItemProps } from "./AccessibilityItemProps"

const AccessibilityItemComponent = (props: AccessibilityItemProps) => {
    return (
        <li>
            <a href={props.link}>{props.text}</a>
        </li>
    )
}

export default AccessibilityItemComponent