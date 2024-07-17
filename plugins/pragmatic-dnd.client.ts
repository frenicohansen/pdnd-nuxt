import {
  monitorForElements,
  draggable,
  dropTargetForElements,
} from '@atlaskit/pragmatic-drag-and-drop/element/adapter'
import { combine } from '@atlaskit/pragmatic-drag-and-drop/combine'
import { setCustomNativeDragPreview } from '@atlaskit/pragmatic-drag-and-drop/element/set-custom-native-drag-preview'
import { pointerOutsideOfPreview } from '@atlaskit/pragmatic-drag-and-drop/element/pointer-outside-of-preview'
import {
  attachClosestEdge,
  extractClosestEdge,
} from '@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge'
import { reorderWithEdge } from '@atlaskit/pragmatic-drag-and-drop-hitbox/util/reorder-with-edge'
import { triggerPostMoveFlash } from '@atlaskit/pragmatic-drag-and-drop-flourish/trigger-post-move-flash'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      PragmaticDND: {
        monitorForElements,
        draggable,
        dropTargetForElements,
        combine,
        setCustomNativeDragPreview,
        pointerOutsideOfPreview,
        attachClosestEdge,
        extractClosestEdge,
        reorderWithEdge,
        triggerPostMoveFlash,
      },
    },
  }
})
