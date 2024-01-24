export class Pharmacymedicine {
    MedicineId:number=0;
    MedicineCode: String='';
    MedicineName: String='';
    GenericName: String='';
    CompanyName: String='';
    StockQuantity: String='';
    UnitPrice: number=0;
    reordered?: boolean; // Optional property to track whether the medicine has been reordered
}
