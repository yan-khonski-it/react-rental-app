import { Flat } from '../model/Flat';
import { FlatFilter } from '../model/FlatFilter';
import { FlatGenerator } from './FlatGenerator';

export class FlatService {

  private readonly flatGenerator: FlatGenerator;

  constructor(flatGenerator: FlatGenerator) {
    this.flatGenerator = flatGenerator;
  }

  public getFlats(): Flat[] {
    return this.flatGenerator.getFlats();
  }

  public getFlatsFiltered(filter: FlatFilter): Flat[] {
    const flats: Flat[] = this.flatGenerator.getFlats();

    return flats.filter(flat => {
      return (!filter.MinPrice || flat.price >= filter.MinPrice) &&
        (!filter.MaxPrice || flat.price <= filter.MaxPrice) &&
        (!filter.MinSize || flat.size >= filter.MinSize) &&
        (!filter.MaxSize || flat.size <= filter.MaxSize) &&
        (!filter.MinRooms || flat.rooms >= filter.MinRooms) &&
        (!filter.MaxRooms || flat.rooms <= filter.MaxRooms) &&
        (!filter.TopRight || (flat.coordinates.latitude <= filter.TopRight.latitude && flat.coordinates.longitude <= filter.TopRight.longitude)) &&
        (!filter.BottomLeft || (flat.coordinates.latitude >= filter.BottomLeft.latitude && flat.coordinates.longitude >= filter.BottomLeft.longitude));
    });
  }

}
