/* tslint:disable */
/* eslint-disable */
/**
 * CV API
 * CV API
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from "../runtime";
/**
 * 生年月日
 * @export
 * @interface BirthDay
 */
export interface BirthDay {
  /**
   * 生年月日の「年」
   * @type {number}
   * @memberof BirthDay
   */
  year?: number;
  /**
   * 生年月日の「月」
   * @type {number}
   * @memberof BirthDay
   */
  month?: number;
  /**
   * 生年月日の「日」
   * @type {number}
   * @memberof BirthDay
   */
  day?: number;
}

/**
 * Check if a given object implements the BirthDay interface.
 */
export function instanceOfBirthDay(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function BirthDayFromJSON(json: any): BirthDay {
  return BirthDayFromJSONTyped(json, false);
}

export function BirthDayFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): BirthDay {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    year: !exists(json, "year") ? undefined : json["year"],
    month: !exists(json, "month") ? undefined : json["month"],
    day: !exists(json, "day") ? undefined : json["day"],
  };
}

export function BirthDayToJSON(value?: BirthDay | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    year: value.year,
    month: value.month,
    day: value.day,
  };
}
