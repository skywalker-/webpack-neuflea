export interface ICategory {
    _id: number;
    Category: string;
    Brands: [{
        Name: string,
        Models: [{
            Name:string
        }]
    }];
}