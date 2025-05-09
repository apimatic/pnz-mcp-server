/**
 * Account and Transaction API SpecificationLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface BankTransactionCode2 {
  /** Specifies the family within a domain. */
  code: string;
  /** Specifies the sub-product family within a specific family. */
  subCode: string;
}

export const bankTransactionCode2Schema: Schema<BankTransactionCode2> = object({
  code: ['Code', string()],
  subCode: ['SubCode', string()],
});
