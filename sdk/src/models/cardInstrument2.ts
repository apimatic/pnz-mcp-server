/**
 * Account and Transaction API SpecificationLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';
import {
  AuthorisationTypeEnum,
  authorisationTypeEnumSchema,
} from './authorisationTypeEnum';
import {
  CardSchemeNameEnum,
  cardSchemeNameEnumSchema,
} from './cardSchemeNameEnum';

export interface CardInstrument2 {
  /** Name of the card scheme. */
  cardSchemeName: CardSchemeNameEnum;
  /** The card authorisation type. */
  authorisationType?: AuthorisationTypeEnum;
  /** Name of the cardholder using the card instrument. */
  name?: string;
  /** Identification assigned by an institution to identify the card instrument used in the transaction. This identification is known by the account owner, and may be masked. */
  identification?: string;
}

export const cardInstrument2Schema: Schema<CardInstrument2> = object({
  cardSchemeName: ['CardSchemeName', cardSchemeNameEnumSchema],
  authorisationType: [
    'AuthorisationType',
    optional(authorisationTypeEnumSchema),
  ],
  name: ['Name', optional(string())],
  identification: ['Identification', optional(string())],
});
