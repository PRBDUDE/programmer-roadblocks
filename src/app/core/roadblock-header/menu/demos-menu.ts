import {demoInputMenu} from "@rootComponents/menu/demo-input-menu";
import {demoScrollingMenu} from "@rootComponents/menu/demo-scrolling-menu";
import {demoStylingMenu} from "@rootComponents/menu/demo-styling-menu";
import {demoTimelineMenu} from "@rootComponents/menu/demo-timeline-menu";

export function demosMenu() {
    return {
        label: 'Demos',
        root: true,
        items: [
            [
                demoInputMenu(),
                demoScrollingMenu(),
                demoStylingMenu()
            ],
            [
                demoTimelineMenu()
            ]
        ]
    }
}
