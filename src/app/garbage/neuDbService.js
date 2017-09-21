"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NeuDbServices = (function () {
    function NeuDbServices() {
    }
    NeuDbServices.prototype.createDb = function () {
        var Collection = [
            {
                id: 1,
                categoryName: "Cars",
                carItems: [
                    {},
                    {}
                ]
            },
            {
                id: 2,
                categoryName: "Bikes",
                bikeItems: [
                    {},
                    {}
                ]
            }
        ];
        return { Collection: Collection };
    };
    ;
    return NeuDbServices;
}());
exports.NeuDbServices = NeuDbServices;
//# sourceMappingURL=neuDbService.js.map