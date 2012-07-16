const St = imports.gi.St;
const Main = imports.ui.main;
const PanelMenu = imports.ui.panelMenu;

let metadata,indicator = null;

function ExampleIndicator(){
    this._init();
}

ExampleIndicator.prototype = {
    
    __proto__: PanelMenu.Button.prototype,
    
    _init: function (){
        global.log('EXAMPLE:Enabled');
        PanelMenu.Button.prototype._init.call(this, St.Align.END);

        this.label = new St.Label({text:"This is Example"});
        this.actor.add_actor(this.label);
        
        Main.panel._rightBox.add_actor(this.actor);
    },
    destroy: function(){
        global.log('EXAMPLE:Disabled');
        Main.panel._rightBox.remove_actor(this.actor);
    }
}

function enable() {
    indicator = new ExampleIndicator();
}
function disable() {
    indicator.destroy();
}
function init(metadata) {
    global.log('EXAMPLE:%s Initialized '.format(metadata.uuid));
}
