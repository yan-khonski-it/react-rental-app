import { Coordinates } from './Coordinates';

export class FlatFilter {

    private minPrice: number|undefined = undefined;
    private maxPrice: number|undefined = undefined;
    private minSize: number|undefined = undefined;
    private maxSize: number|undefined = undefined;
    private minRooms: number|undefined = undefined;
    private maxRooms: number|undefined = undefined;
    private topRight: Coordinates|undefined = undefined;
    private bottomLeft: Coordinates|undefined = undefined;


    get MinPrice(): number|undefined {
        return this.minPrice;
    }

    set MinPrice(value: number|undefined) {
        this.minPrice = value;
    }

    get MaxPrice(): number|undefined {
        return this.maxPrice;
    }

    set MaxPrice(value: number|undefined) {
        this.maxPrice = value;
    }

    get MinSize(): number|undefined {
        return this.minSize;
    }

    set MinSize(value: number|undefined) {
        this.minSize = value;
    }

    get MaxSize(): number|undefined {
        return this.maxSize;
    }

    set MaxSize(value: number|undefined) {
        this.maxSize = value;
    }

    get MinRooms(): number|undefined {
        return this.minRooms;
    }

    set MinRooms(value: number|undefined) {
        this.minRooms = value;
    }

    get MaxRooms(): number|undefined {
        return this.maxRooms;
    }

    set MaxRooms(value: number|undefined) {
        this.maxRooms = value;
    }

    get TopRight(): Coordinates|undefined {
        return this.topRight;
    }

    set TopRight(value: Coordinates|undefined) {
        this.topRight = value;
    }

    get BottomLeft(): Coordinates|undefined {
        return this.bottomLeft;
    }

    set BottomLeft(value: Coordinates|undefined) {
        this.bottomLeft = value;
    }
}