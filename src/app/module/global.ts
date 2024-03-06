export type VisObject = {
  bands: Array<string>;
  min: Array<number>;
  max: Array<number>;
  palette?: Array<string>;
};
export type SatelliteId = 's2' | 'landsat';

export type MethodId = 'cloudless' | 'latest' | 'composite';

export type LayerId =
  | 'true_color'
  | 'false_color'
  | 'agriculture_false_color'
  | 'enhanced_false_color'
  | 'infrared_false_color'
  | 'ndvi'
  | 'ndmi'
  | 'ndsi'
  | 'bais2'
  | 'lai'
  | 'fapar'
  | 'fcover'
  | 'cab'
  | 'ccc';

export type ImageBody = {
  geojson?: GeoJSON.GeoJSON;
  bounds?: GeoJSON.BBox;
  date: [string, string];
  satellite: SatelliteId;
  method: MethodId;
  layer: LayerId;
};

export type ImageResult = {
  tile_url: string;
  thumbnail_url: string;
  image: JSON;
  vis: VisObject;
  geometry: GeoJSON.Geometry;
};

export type MapId = {
  mapid: string;
  urlFormat: string;
  image: Object;
}
