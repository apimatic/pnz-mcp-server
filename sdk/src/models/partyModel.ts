/**
 * Account and Transaction API SpecificationLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import { Address, addressSchema } from './address';
import { PartyTypeEnum, partyTypeEnumSchema } from './partyTypeEnum';

export interface PartyModel {
  /** A unique and immutable identifier used to identify the customer resource. This identifier has no meaning to the account owner. */
  partyId: string;
  /** Number assigned by an agent to identify its customer. */
  partyNumber?: string;
  /** Party type, in a coded form. */
  partyType?: PartyTypeEnum;
  /** Name by which a party is known and which is usually used to identify that party. */
  name?: string;
  /** Address for electronic mail (e-mail). */
  emailAddress?: string;
  /** Collection of information that identifies a phone number, as defined by telecom services. */
  phone?: string;
  /** Collection of information that identifies a mobile phone number, as defined by telecom services. */
  mobile?: string;
  /** Postal address of a party. */
  address?: Address[];
}

export const partyModelSchema: Schema<PartyModel> = object({
  partyId: ['PartyId', string()],
  partyNumber: ['PartyNumber', optional(string())],
  partyType: ['PartyType', optional(partyTypeEnumSchema)],
  name: ['Name', optional(string())],
  emailAddress: ['EmailAddress', optional(string())],
  phone: ['Phone', optional(string())],
  mobile: ['Mobile', optional(string())],
  address: ['Address', optional(array(lazy(() => addressSchema)))],
});
