export default class CustomResponse{
    constructor(status: number, message: string, data?: any, totalPages?:any) {
        this._status = status;
        this._message = message;
        this._data = data;
        this._totalPages = totalPages;
    }

    private _status:number;
    private _message:string;
    private _data?:any;
    private _totalPages? : any

    get totalOPages(): any {
        return this._totalPages;
    }

    set totalOPages(value: any) {
        this._totalPages = value;
    }

    get status(): number {
        return this._status;
    }

    set status(value: number) {
        this._status = value;
    }

    get message(): string {
        return this._message;
    }

    set message(value: string) {
        this._message = value;
    }

    get data(): any {
        return this._data;
    }

    set data(value: any) {
        this._data = value;
    }

    toJSON(){
        return{
            status: this._status,
            message: this.message,
            data: this._data,
            totalPages: this._totalPages
        }
    }
}
