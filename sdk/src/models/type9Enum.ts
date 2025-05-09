/**
 * Account and Transaction API SpecificationLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for Type9Enum
 */
export enum Type9Enum {
  AirMilesPoints = 'AirMilesPoints',
  AirMilesPointsBalance = 'AirMilesPointsBalance',
  Credits = 'Credits',
  Debits = 'Debits',
  HotelPoints = 'HotelPoints',
  HotelPointsBalance = 'HotelPointsBalance',
  RetailShoppingPoints = 'RetailShoppingPoints',
  RetailShoppingPointsBalance = 'RetailShoppingPointsBalance',
}

/**
 * Schema for Type9Enum
 */
export const type9EnumSchema: Schema<Type9Enum> = stringEnum(Type9Enum);
