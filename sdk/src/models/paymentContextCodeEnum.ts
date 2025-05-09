/**
 * Account and Transaction API SpecificationLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PaymentContextCodeEnum
 */
export enum PaymentContextCodeEnum {
  BillPayment = 'BillPayment',
  EcommerceGoods = 'EcommerceGoods',
  EcommerceServices = 'EcommerceServices',
  Other = 'Other',
  PersonToPerson = 'PersonToPerson',
}

/**
 * Schema for PaymentContextCodeEnum
 */
export const paymentContextCodeEnumSchema: Schema<PaymentContextCodeEnum> = stringEnum(
  PaymentContextCodeEnum
);
