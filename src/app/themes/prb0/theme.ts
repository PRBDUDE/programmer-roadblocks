import Aura from "@primeuix/themes/aura";
import {definePreset} from "@primeuix/themes";
import {Primitive} from "@themes/primitive";
import {Semantic} from "./semantic";
import {ButtonPreset} from "./components/button-preset";
import {DatatablePreset} from "./components/datatable-preset";
import {MegamenuPreset} from "./components/megamenu-preset";
import {MessagePreset} from "./components/message-preset";
import {TimelinePreset} from "./components/timeline-preset";
import {TooltipPreset} from "./components/tooltip-preset";
import {AccordionPreset} from "./components/accordion-preset";

export const Prb0Preset = definePreset(Aura, Primitive, Semantic, {
  components: {
    accordion: AccordionPreset,
    button: ButtonPreset,
    datatable: DatatablePreset,
    megamenu: MegamenuPreset,
    message: MessagePreset,
    timeline: TimelinePreset,
    tooltip: TooltipPreset
  }
});
