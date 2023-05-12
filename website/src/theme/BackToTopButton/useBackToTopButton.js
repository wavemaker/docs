/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { useRef, useState } from 'react';
import { useScrollPosition, useSmoothScrollTo } from '@docusaurus/theme-common/internal';
import { useLocationChange } from '@docusaurus/theme-common/internal';
/** Wires the logic for the back to top button. */
export function useBackToTopButton({ threshold, }) {
    const [shown, setShown] = useState(false);
    const isFocusedAnchor = useRef(false);
    const { startScroll, cancelScroll } = useSmoothScrollTo();
    useScrollPosition(({ scrollY: scrollTop }, lastPosition) => {
        const lastScrollTop = lastPosition?.scrollY;
        // Component is just being mounted. Not really a scroll event from the user.
        // Ignore it.
        if (!lastScrollTop) {
            return;
        }
        if (isFocusedAnchor.current) {
            // This scroll position change is triggered by navigating to an anchor.
            // Ignore it.
            isFocusedAnchor.current = false;
        }
        else if (scrollTop < threshold) {
            // Scrolled to the minimum position; hide the button.
            setShown(false);
        }
        else if (scrollTop > threshold) {
            setShown(true);
        }
    });
    useLocationChange((locationChangeEvent) => {
        if (locationChangeEvent.location.hash) {
            isFocusedAnchor.current = true;
            setShown(false);
        }
    });
    return { shown, scrollToTop: () => startScroll(0) };
}
 //# sourceMappingURL=useBackToTopButton.js.map