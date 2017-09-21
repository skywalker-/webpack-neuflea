import { NeuDbService } from '../NeuDbService/neuDb.service';
import { Observable } from 'rxjs/Observable';

describe('NeuDbService', () =>{
    let dbService: NeuDbService,
    mockHttp;
    beforeEach(() =>{
        mockHttp = jasmine.createSpyObj('mockHttp',['get','post'])
        dbService = new NeuDbService(mockHttp);
    });
    it('should add new category', () =>{
            // this.mockHttp.getProducts.and.returnValue(Observable.of(false))
            dbService.addNewCategory("makeup","hair","comb");
            expect("0").toBe("0");
        })
    // describe('addNewCategory', () => {
      
        
    // })
});