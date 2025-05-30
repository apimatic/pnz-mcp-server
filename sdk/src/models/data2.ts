/**
 * Account and Transaction API SpecificationLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import { TransactionModel, transactionModelSchema } from './transactionModel';

/** Data */
export interface Data2 {
  /** Transaction */
  transaction?: TransactionModel[];
}

export const data2Schema: Schema<Data2> = object({
  transaction: [
    'Transaction',
    optional(array(lazy(() => transactionModelSchema))),
  ],
});
