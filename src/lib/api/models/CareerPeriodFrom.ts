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
 * キャリア期間年月From
 * @export
 * @interface CareerPeriodFrom
 */
export interface CareerPeriodFrom {
  /**
   * 生年月日の「年」
   * @type {number}
   * @memberof CareerPeriodFrom
   */
  year?: number;
  /**
   * 生年月日の「月」
   * @type {number}
   * @memberof CareerPeriodFrom
   */
  month?: number;
}

/**
 * Check if a given object implements the CareerPeriodFrom interface.
 */
export function instanceOfCareerPeriodFrom(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function CareerPeriodFromFromJSON(json: any): CareerPeriodFrom {
  return CareerPeriodFromFromJSONTyped(json, false);
}

export function CareerPeriodFromFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CareerPeriodFrom {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    year: !exists(json, "year") ? undefined : json["year"],
    month: !exists(json, "month") ? undefined : json["month"],
  };
}

export function CareerPeriodFromToJSON(value?: CareerPeriodFrom | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    year: value.year,
    month: value.month,
  };
}
