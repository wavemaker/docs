function reportIssue(eventType, event) {
    ga('send', {
        hitType: 'event',
        eventCategory: 'error',
        eventAction: eventType,
        eventLabel: document.referrer,
        eventValue: 404,
    });
}
