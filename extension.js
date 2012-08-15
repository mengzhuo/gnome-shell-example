const St = imports.gi.St;
const Main = imports.ui.main;
const PanelMenu = imports.ui.panelMenu;
const Gtk = imports.gi.Gtk;

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
        this.label.add_style_class_name('example');
        
        //this.actor.add_actor(this.label);
        
        this.iconTheme = Gtk.IconTheme.get_default();
        this._icon = new St.Icon({ icon_type: St.IconType.SYMBOLIC,
                                    style_class: 'popup-menu-icon',
                                    icon_name: 'face-smile',
                                    icon_size: 26
                                    });
        this.actor.add_actor(this._icon);
        
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
