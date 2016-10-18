var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Listing1_29;
(function (Listing1_29) {
    var HandlerFactory = (function () {
        function HandlerFactory() {
        }
        HandlerFactory.prototype.getHandler = function (type) {
            switch (type) {
                case 'Random':
                    return new RandomHandler();
                case 'Reversed':
                    return new ReversedHandler();
                default:
                    return new Handler();
            }
        };
        return HandlerFactory;
    })();

    var Handler = (function () {
        function Handler() {
        }
        Handler.prototype.handle = function () {
            console.log('Handled!');
        };
        return Handler;
    })();

    var ReversedHandler = (function (_super) {
        __extends(ReversedHandler, _super);
        function ReversedHandler() {
            _super.apply(this, arguments);
        }
        ReversedHandler.prototype.handle = function () {
            console.log('!deldnaH');
        };
        return ReversedHandler;
    })(Handler);

    var RandomHandler = (function (_super) {
        __extends(RandomHandler, _super);
        function RandomHandler() {
            _super.apply(this, arguments);
        }
        RandomHandler.prototype.handle = function () {
            console.log('daH!denl');
        };
        return RandomHandler;
    })(Handler);
})(Listing1_29 || (Listing1_29 = {}));
