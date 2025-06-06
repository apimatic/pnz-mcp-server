/**
 * Account and Transaction API SpecificationLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for AccountTypeEnum
 */
export enum AccountTypeEnum {
  Business = 'Business',
  Personal = 'Personal',
}

/**
 * Schema for AccountTypeEnum
 */
export const accountTypeEnumSchema: Schema<AccountTypeEnum> = stringEnum(
  AccountTypeEnum
);
