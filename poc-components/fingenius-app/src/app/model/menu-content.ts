export interface MenuList {
    menu: Array<MenuContent>
}

export interface MenuContent {
    title: string;
    childs: Array<MenuItem>
}

export interface MenuItem {
    title: string;
    link: string;
}