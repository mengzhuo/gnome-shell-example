function enable() {
    global.log('EXAMPLE:Enabled');
}
function disable() {
    global.log('EXAMPLE:Disabled');
}
function init(metadata) {
    global.log('EXAMPLE:%s Initialized '.format(metadata.uuid));
}
