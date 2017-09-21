"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var neuDb_service_1 = require("../NeuDbService/neuDb.service");
describe('NeuDbService', function () {
    var dbService, mockHttp;
    beforeEach(function () {
        mockHttp = jasmine.createSpyObj('mockHttp', ['get', 'post']);
        dbService = new neuDb_service_1.NeuDbService(mockHttp);
    });
    it('should add new category', function () {
        // this.mockHttp.getProducts.and.returnValue(Observable.of(false))
        dbService.addNewCategory("makeup", "hair", "comb");
        expect("0").toBe("0");
    });
    // describe('addNewCategory', () => {
    // })
});
//# sourceMappingURL=neuDb.service.spec.js.map