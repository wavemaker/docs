function reportIssue(eventType, event) {
    ga('send', {
        hitType: 'error',
        eventAction: eventType,
        eventLabel: document.referrer,
    });
}
