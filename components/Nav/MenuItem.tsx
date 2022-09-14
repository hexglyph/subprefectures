//Menu item component

import { MenuItemProps } from "./MenuItemProps"

const MenuItemComponent = (props: MenuItemProps) => {
    return (
        <li>
            <a href={props.link}>{props.text}</a>
        </li>
    )
}

export default MenuItemComponent