/**
 * Account and Transaction API SpecificationLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { BeneficiariesController } from '../src';
import { testClient } from './testClient';
import { expectHeadersToMatch, makeApiCall } from './testHelper';

describe('BeneficiariesController', () => {
  let controller : BeneficiariesController;

  beforeAll(() => {
    controller = new BeneficiariesController(testClient);
  });

  it('should Test GetBeneficiaries', async () => {
    const response = await makeApiCall(
      () => controller.getBeneficiaries(
        undefined,
        undefined,
        undefined,
        undefined,
        undefined
      )
    );

    expect(response.statusCode).toBe(200);

    const expectedHeaders = {
      'x-fapi-interaction-id': ['', false],
      'Content-Type': ['application/json; charset=utf-8', true],
    };

    expectHeadersToMatch(response.headers, expectedHeaders);
  });
});
