/**
 * Account and Transaction API SpecificationLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  GetAccountScheduledPaymentsResponse,
  getAccountScheduledPaymentsResponseSchema,
} from '../models/getAccountScheduledPaymentsResponse';
import {
  GetScheduledPaymentsResponse,
  getScheduledPaymentsResponseSchema,
} from '../models/getScheduledPaymentsResponse';
import { optional, string } from '../schema';
import { BaseController } from './baseController';
import { ApiError } from '@apimatic/core';
import { AccountsScheduledPayments400Error } from '../errors/accountsScheduledPayments400Error';
import { AccountsScheduledPayments403Error } from '../errors/accountsScheduledPayments403Error';
import { AccountsScheduledPayments500Error } from '../errors/accountsScheduledPayments500Error';
import { AccountsScheduledPayments503Error } from '../errors/accountsScheduledPayments503Error';
import { ScheduledPayments400Error } from '../errors/scheduledPayments400Error';
import { ScheduledPayments403Error } from '../errors/scheduledPayments403Error';
import { ScheduledPayments500Error } from '../errors/scheduledPayments500Error';
import { ScheduledPayments503Error } from '../errors/scheduledPayments503Error';

export class ScheduledPaymentsController extends BaseController {
  /**
   * Get Scheduled Payments related to an account
   *
   * @param accountId                  A unique identifier used to identify the account resource.
   * @param xFapiAuthDate              The time when the Customer last logged in with the Third Party. All
   *                                             dates in the HTTP headers are represented as RFC 7231 Full Dates. An
   *                                             example is below: Sun, 10 Sep 2017 19:43:31 UTC
   * @param xFapiCustomerIpAddress     The Customer's IP address if the Customer is currently logged in with
   *                                             the Third Party.
   * @param xFapiInteractionId         An RFC4122 UID used as a correlation id.
   * @param xMerchantIpAddress         The IP address of the merchant when making account information
   *                                             requests through a Third Party.
   * @param xCustomerUserAgent         The User-Agent of the application on the customer device that is used
   *                                             to make the account information request
   * @return Response from the API call
   */
  async getAccountScheduledPayments(
    accountId: string,
    xFapiAuthDate?: string,
    xFapiCustomerIpAddress?: string,
    xFapiInteractionId?: string,
    xMerchantIpAddress?: string,
    xCustomerUserAgent?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetAccountScheduledPaymentsResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      accountId: [accountId, string()],
      xFapiAuthDate: [xFapiAuthDate, optional(string())],
      xFapiCustomerIpAddress: [xFapiCustomerIpAddress, optional(string())],
      xFapiInteractionId: [xFapiInteractionId, optional(string())],
      xMerchantIpAddress: [xMerchantIpAddress, optional(string())],
      xCustomerUserAgent: [xCustomerUserAgent, optional(string())],
    });
    req.header('x-fapi-auth-date', mapped.xFapiAuthDate);
    req.header('x-fapi-customer-ip-address', mapped.xFapiCustomerIpAddress);
    req.header('x-fapi-interaction-id', mapped.xFapiInteractionId);
    req.header('x-merchant-ip-address', mapped.xMerchantIpAddress);
    req.header('x-customer-user-agent', mapped.xCustomerUserAgent);
    req.appendTemplatePath`/accounts/${mapped.accountId}/scheduled-payments`;
    req.throwOn(400, AccountsScheduledPayments400Error, 'Bad Request');
    req.throwOn(401, ApiError, 'Unauthorized');
    req.throwOn(403, AccountsScheduledPayments403Error, 'Forbidden');
    req.throwOn(405, ApiError, 'Method Not Allowed');
    req.throwOn(406, ApiError, 'Not Acceptable');
    req.throwOn(429, ApiError, 'Too Many Requests');
    req.throwOn(
      500,
      AccountsScheduledPayments500Error,
      'Internal Server Error'
    );
    req.throwOn(501, ApiError, 'Not Implemented');
    req.throwOn(503, AccountsScheduledPayments503Error, 'Service Unavailable');
    req.authenticate([{ httpBearer: true }]);
    return req.callAsJson(
      getAccountScheduledPaymentsResponseSchema,
      requestOptions
    );
  }

  /**
   * Get Scheduled Payments
   *
   * @param xFapiAuthDate              The time when the Customer last logged in with the Third Party. All
   *                                             dates in the HTTP headers are represented as RFC 7231 Full Dates. An
   *                                             example is below: Sun, 10 Sep 2017 19:43:31 UTC
   * @param xFapiCustomerIpAddress     The Customer's IP address if the Customer is currently logged in with
   *                                             the Third Party.
   * @param xFapiInteractionId         An RFC4122 UID used as a correlation id.
   * @param xMerchantIpAddress         The IP address of the merchant when making account information
   *                                             requests through a Third Party.
   * @param xCustomerUserAgent         The User-Agent of the application on the customer device that is used
   *                                             to make the account information request
   * @return Response from the API call
   */
  async getScheduledPayments(
    xFapiAuthDate?: string,
    xFapiCustomerIpAddress?: string,
    xFapiInteractionId?: string,
    xMerchantIpAddress?: string,
    xCustomerUserAgent?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetScheduledPaymentsResponse>> {
    const req = this.createRequest('GET', '/scheduled-payments');
    const mapped = req.prepareArgs({
      xFapiAuthDate: [xFapiAuthDate, optional(string())],
      xFapiCustomerIpAddress: [xFapiCustomerIpAddress, optional(string())],
      xFapiInteractionId: [xFapiInteractionId, optional(string())],
      xMerchantIpAddress: [xMerchantIpAddress, optional(string())],
      xCustomerUserAgent: [xCustomerUserAgent, optional(string())],
    });
    req.header('x-fapi-auth-date', mapped.xFapiAuthDate);
    req.header('x-fapi-customer-ip-address', mapped.xFapiCustomerIpAddress);
    req.header('x-fapi-interaction-id', mapped.xFapiInteractionId);
    req.header('x-merchant-ip-address', mapped.xMerchantIpAddress);
    req.header('x-customer-user-agent', mapped.xCustomerUserAgent);
    req.throwOn(400, ScheduledPayments400Error, 'Bad Request');
    req.throwOn(401, ApiError, 'Unauthorized');
    req.throwOn(403, ScheduledPayments403Error, 'Forbidden');
    req.throwOn(405, ApiError, 'Method Not Allowed');
    req.throwOn(406, ApiError, 'Not Acceptable');
    req.throwOn(429, ApiError, 'Too Many Requests');
    req.throwOn(500, ScheduledPayments500Error, 'Internal Server Error');
    req.throwOn(501, ApiError, 'Not Implemented');
    req.throwOn(503, ScheduledPayments503Error, 'Service Unavailable');
    req.authenticate([{ httpBearer: true }]);
    return req.callAsJson(getScheduledPaymentsResponseSchema, requestOptions);
  }
}
