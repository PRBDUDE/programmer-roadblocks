import {demoInputMenu} from "@rootComponents/menu/demo-input-menu";
import {demoScrollingMenu} from "@rootComponents/menu/demo-scrolling-menu";
import {demoStylingMenu} from "@rootComponents/menu/demo-styling-menu";
import {demoTimelineMenu} from "@rootComponents/menu/demo-timeline-menu";
import {demoTooltipMenu} from "@rootComponents/menu/demo-tooltip";
import {demoStepperMenu} from "@rootComponents/menu/demo-stepper-menu";
import {demoStepsMenu} from "@rootComponents/menu/demo-steps-menu";

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
        demoStepsMenu(),
        demoStepperMenu(),
        demoTimelineMenu(),
        demoTooltipMenu()
      ]
    ]
  }
}
