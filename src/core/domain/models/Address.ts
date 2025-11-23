export interface Address {
    id: number;
    street: string;
    number: string;
    city: string;
    neighborhood: string;
    postalCode: string;
    isMainUnity: boolean;
    latitude?: number;
    longitude?: number;
}