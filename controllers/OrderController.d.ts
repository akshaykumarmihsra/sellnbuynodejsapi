export default class OrderController {
    static getAll(req: any, res: any, next: any): Promise<void>;
    static getOne(req: any, res: any, next: any): Promise<void>;
    static search(req: any, res: any, next: any): Promise<void>;
    static create(req: any, res: any, next: any): Promise<void>;
    static update(req: any, res: any, next: any): Promise<void>;
    static delete(req: any, res: any, next: any): Promise<void>;
}
