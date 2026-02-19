import {definePreset} from "@primeuix/themes";
import Aura from "@primeuix/themes/aura";
import {Primitive} from "@themes/primitive";
import {Semantic} from "./semantic";
import {MegamenuPreset} from "./components/megamenu-preset";
import {TooltipPreset} from "./components/tooltip-preset";
import {TimelinePreset} from "./components/timeline-preset";
import {AccordionPreset} from "./components/accordion-preset";
import {ButtonPreset} from "./components/button-preset";
import {DatatablePreset} from "./components/datatable-preset";

export const Prb2Preset = definePreset(Aura, Primitive, Semantic, {
  components: {
    accordion: AccordionPreset,
    button: ButtonPreset,
    datatable: DatatablePreset,
    megamenu: MegamenuPreset,
    timeline: TimelinePreset,
    tooltip: TooltipPreset
  }
});
