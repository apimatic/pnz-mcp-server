/**
 * Account and Transaction API SpecificationLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for AccountSubTypeEnum
 */
export enum AccountSubTypeEnum {
  ChargeCard = 'ChargeCard',
  CreditCard = 'CreditCard',
  CurrentAccount = 'CurrentAccount',
  EMoney = 'EMoney',
  Loan = 'Loan',
  Mortgage = 'Mortgage',
  PrePaidCard = 'PrePaidCard',
  Savings = 'Savings',
}

/**
 * Schema for AccountSubTypeEnum
 */
export const accountSubTypeEnumSchema: Schema<AccountSubTypeEnum> = stringEnum(
  AccountSubTypeEnum
);
