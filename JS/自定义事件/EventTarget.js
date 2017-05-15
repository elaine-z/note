//事件兼容
var EventUtil = {
    addHandler: function(element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler);
        } else if (element.attachment) {
            element.attachment('on' + type, handler);
        } else {
            element['on' + type] = handler;
        }
    },
    removeHandler: function(element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler);
        } else if (element.detachment) {
            element.detachment(type, handler)
        } else {
            element['on' + type] = null;
        }
    },
    getEvent: function(event) {
        return event ? event : window.event;
    },
    getTarget: function(event) {
        return event.target || event.srcElement;
    },
    preventDefault: function(event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.retureValue = false;
        }
    },
    stopPropagation: function(event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancleBubble = true;
        }
    }
};

function EventTarget() {
    this.handlers = {};
}
EventTarget.prototype = {
    constructor: EventTarget,
    addHandler: function(type, handler) {
        if (typeof this.handlers[type] == 'undefined') {
            this.handlers[type] = []; //初始化
        }
        this.handlers[type].push(handler);
    },
    fire: function(hander) {
        if (!event.target) {
            event.target = this;
        }
        var handlers = this.handlers[event.type];
        for (var i = 0; i < handlers.length; i++) {
            handlers[i](event);
        }
    },
    removeHandler: function(type, handler) {
        if (this.handers[type] instanceof Array) {
            var handers = this.handlers[type];
            for (var i = 0; i < handlers.length; i++) {
                if (handlers[i] == handler) {
                    break;
                }
            }
            handers.splice(i, 1);
        }
    }
};


//添加自定义事件
var DragDrop = function() {
    var dragdrop = new EventTarget(),
        dargging = null,
        diffX = 0,
        diffY = 0;

    function handleEvent(event) {
        event = EventUtil.getEvent(event);
        var target = EventUtil.getTarget();
        switch (event.type) {
            case "mousedown":
                if (target.className.indexof("draggable") > -1) {
                    dragging = target;
                    diffX = event.clientX - target.offsetLeft;
                    diffY = event.clientY - target.offsetTop;
                    dargdrop.fire({ type: "dragstart", target: dragging, x: event.clientX, y: event.clientY });
                }
                break;
            case "mousemove":
                if (dragging != null) {
                    dragging.style.left = (event.clientX - diffX) + 'px';
                    dragging.style.top = (event.clientY - diffY) + 'px';
                    drgdrop.fire({ type: "drap", target: dragging, x: event.clientX, y: event.clientY });
                }
                break;
            case "mouseup":
                dragdrop.fire({ type: "dragend", target: dragging, x: event.clientX, y: event.clientY });
                dragging = null;
                break;
        }
    };
    dragdrop.enable = function() {
        EventUtil.addHandler(document, "mousedown", handleEvent);
        EventUtil.addHandler(document, "mousemove", handleEvent);
        EventUtil.addHandler(document, "mouseup", handleEvent);
    }
    dragdrop.disable = function() {
        EventUtil.removeHandler(document, "mousedown", handleEvent);
        EventUtil.removeHandler(document, "mousemove", handleEvent);
        EventUtil.removeHandler(document, "mouseup", handleEvent);
    }
    return dragdrop;
}()


//调用方法示例
// DragDrop.addHandler("dragstart", function(event) {
//     console.log("start");
// });
// DragDrop.addHandler("drag", function(event) {
//     console.log("ing");
// });
// DragDrop.addHandler("dragend", function(event) {
//     console.log("end");
// });