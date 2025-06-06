/**
 * Account and Transaction API SpecificationLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CreditDebitIndicator1Enum
 */
export enum CreditDebitIndicator1Enum {
  Credit = 'Credit',
  Debit = 'Debit',
}

/**
 * Schema for CreditDebitIndicator1Enum
 */
export const creditDebitIndicator1EnumSchema: Schema<CreditDebitIndicator1Enum> = stringEnum(
  CreditDebitIndicator1Enum
);
