var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Listing1_61;
(function (Listing1_61) {
    var DomainId = (function () {
        function DomainId(id) {
            this.id = id;
        }
        Object.defineProperty(DomainId.prototype, "value", {
            get: function () {
                return this.id;
            },
            enumerable: true,
            configurable: true
        });
        return DomainId;
    })();

    var OrderId = (function (_super) {
        __extends(OrderId, _super);
        function OrderId(orderIdValue) {
            _super.call(this, orderIdValue);
            this.orderIdValue = orderIdValue;
        }
        return OrderId;
    })(DomainId);

    var AccountId = (function (_super) {
        __extends(AccountId, _super);
        function AccountId(accountIdValue) {
            _super.call(this, accountIdValue);
            this.accountIdValue = accountIdValue;
        }
        return AccountId;
    })(DomainId);
})(Listing1_61 || (Listing1_61 = {}));
