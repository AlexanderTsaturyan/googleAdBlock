let removedAds = false;
let observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        if (mutation.addedNodes && (mutation.addedNodes.length > 0)) {
            let node = mutation.target.querySelector("#tads");
            if (node) {
                node.parentNode.removeChild(node);
                removedAds = true;
            }

            if (removedAds) {
                observer.disconnect();
            }
        }
    });
});

observer.observe(document, {
    childList: true,
    subtree: true
});