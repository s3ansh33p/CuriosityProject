window.onload = function () {
    var loadTime = window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart; 
    Logger.info('Page load time is '+ loadTime);
    document.getElementById('loadTime').innerHTML = '<i class="fas fa-stopwatch"></i> ' + loadTime + 'ms';
}
