import {demoInputMenu} from "./demo-input-menu";
import {demoScrollingMenu} from "./demo-scrolling-menu";
import {demoStylingMenu} from "./demo-styling-menu";
import {demoTimelineMenu} from "./demo-timeline-menu";
import {demoTooltipMenu} from "./demo-tooltip";
import {demoStepperMenu} from "./demo-stepper-menu";
import {demoStepsMenu} from "./demo-steps-menu";
import {demoAccordionMenu} from "./demo-accordion-menu";

export function demosMenu() {
  return {
    label: 'Demos',
    root: true,
    items: [
      [
        demoAccordionMenu(),
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
