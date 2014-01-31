(function() {
    si.ui.createServerSettingWindow = function(_args) {
        var win = Ti.UI.createWindow({
            title : 'Medusa server',
            backgroundColor : 'white'
        });

        var text = Ti.UI.createTextField(si.combine($$.TextField, {
            value : si.config.Medusa.server,
            top : '5%',
            keyboardType : Ti.UI.KEYBOARD_URL,
            hintText : 'URI'
        }));

        var button = Ti.UI.createButton(si.combine($$.RightBottomButton, {
            title : 'save',
        }));

        button.addEventListener('click', function() {
            if (text.value == '') {
                alert('Please input uri of medusa server.');
                return;
            }
            si.config.Medusa.server = text.value;
            win.close();
        });

        win.add(text);
        win.add(button);
        return win;
    };
})(); 