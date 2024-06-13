export interface ILoginUserReturn {
    type: "success" | "error";
    info: string;
}

export interface ISetClub {
    name: string;
    photo: string;
    description: string;
    address: string;
    network: string;
    typenetwork: string;
}