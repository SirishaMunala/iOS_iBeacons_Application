//Form JS File
function frmMain_button10445690504_onClick_seq0(eventobject) {
    locate_iBeacons.call(this);
};

function frmMain_button10445690505_onClick_seq0(eventobject) {
    turn_device_into_iBeacon.call(this);
};

function addWidgetsfrmMain() {
    var button10445690504 = new kony.ui.Button({
        "id": "button10445690504",
        "isVisible": true,
        "text": "Locate iBeacons",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmMain_button10445690504_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var button10445690505 = new kony.ui.Button({
        "id": "button10445690505",
        "isVisible": true,
        "text": "Turn into iBeacon",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmMain_button10445690505_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var label10445690506 = new kony.ui.Label({
        "id": "label10445690506",
        "isVisible": true,
        "text": "Label",
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var label1044569050127 = new kony.ui.Label({
        "id": "label1044569050127",
        "isVisible": true,
        "text": "Label",
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    frmMain.add(
    button10445690504, button10445690505, label10445690506, label1044569050127);
};

function frmMainGlobals() {
    var MenuId = [];
    frmMain = new kony.ui.Form2({
        "id": "frmMain",
        "title": null,
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmMain
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "inTransitionConfig": {
            "formTransition": "None"
        },
        "outTransitionConfig": {
            "formTransition": "None"
        }
    });
};