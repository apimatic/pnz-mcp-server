/**
 * Account and Transaction API SpecificationLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

export function stringifyRawJson(object: unknown): string {
  return JSON.stringify(object, (_, value: unknown) => {
    return typeof value === "bigint" ? Number(value) : value;
  });
}

