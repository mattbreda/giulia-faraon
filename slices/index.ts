// Code generated by Slice Machine. DO NOT EDIT.

import { defineAsyncComponent } from "vue";
import { defineSliceZoneComponents } from "@prismicio/vue";

export const components = defineSliceZoneComponents({
  about_card: defineAsyncComponent(() => import("./AboutCard/index.vue")),
  double_horizontall_images: defineAsyncComponent(
    () => import("./DoubleHorizontallImages/index.vue")
  ),
  double_vertical_images: defineAsyncComponent(
    () => import("./DoubleVerticalImages/index.vue")
  ),
  image_full: defineAsyncComponent(() => import("./ImageFull/index.vue")),
  project_card: defineAsyncComponent(() => import("./ProjectCard/index.vue")),
  rich_text: defineAsyncComponent(() => import("./RichText/index.vue")),
  video: defineAsyncComponent(() => import("./Video/index.vue")),
});
