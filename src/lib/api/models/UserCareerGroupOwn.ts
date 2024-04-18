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
 * １ユーザーのキャリアグループ自身
 * @export
 * @interface UserCareerGroupOwn
 */
export interface UserCareerGroupOwn {
  /**
   * キャリアグループを一意に識別するID
   * @type {number}
   * @memberof UserCareerGroupOwn
   */
  id?: number;
  /**
   * キャリアグループラベル
   * @type {string}
   * @memberof UserCareerGroupOwn
   */
  label?: string;
}

/**
 * Check if a given object implements the UserCareerGroupOwn interface.
 */
export function instanceOfUserCareerGroupOwn(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function UserCareerGroupOwnFromJSON(json: any): UserCareerGroupOwn {
  return UserCareerGroupOwnFromJSONTyped(json, false);
}

export function UserCareerGroupOwnFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): UserCareerGroupOwn {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, "id") ? undefined : json["id"],
    label: !exists(json, "label") ? undefined : json["label"],
  };
}

export function UserCareerGroupOwnToJSON(
  value?: UserCareerGroupOwn | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    label: value.label,
  };
}
