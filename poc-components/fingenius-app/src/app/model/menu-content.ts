export interface MenuList {
    menu: Array<MenuContent>
}

export interface MenuContent {
    title: string;
    link: string,
    childs: Array<MenuItem>
}

export interface MenuItem {
    title: string;
    link: string;
}