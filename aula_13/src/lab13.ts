export class DateUtils{
    data: Date;
    formato: string;
    dias: number;

    constructor(data: Date, formato: string, dias: number){
        this.data = data;
        this.formato = formato;
        this.dias = dias;
    }

    formatarData(data: Date, formato: string): string{}
}