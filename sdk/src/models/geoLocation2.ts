/**
 * Account and Transaction API SpecificationLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface GeoLocation2 {
  /** Latitude measured in decimal degress */
  latitude?: string;
  /** Longitude measured in decimal degress */
  longitude?: string;
}

export const geoLocation2Schema: Schema<GeoLocation2> = object({
  latitude: ['Latitude', optional(string())],
  longitude: ['Longitude', optional(string())],
});
