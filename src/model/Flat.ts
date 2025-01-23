import { Coordinates } from './Coordinates';

export class Flat {

    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly description: string,
        public readonly price: number,
        public readonly size: number,
        public readonly rooms: number,
        public readonly address: string,
        public readonly images: string[],
        public readonly coordinates: Coordinates
    ) {}
}