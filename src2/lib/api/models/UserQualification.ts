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
 * １ユーザーの資格情報
 * @export
 * @interface UserQualification
 */
export interface UserQualification {
  /**
   * 資格名
   * @type {string}
   * @memberof UserQualification
   */
  name?: string;
  /**
   * 組織名
   * @type {string}
   * @memberof UserQualification
   */
  organization?: string;
  /**
   * URL
   * @type {string}
   * @memberof UserQualification
   */
  url?: string;
  /**
   * 取得日
   * @type {Date}
   * @memberof UserQualification
   */
  gotDate?: Date;
  /**
   * メモ
   * @type {string}
   * @memberof UserQualification
   */
  memo?: string;
}

/**
 * Check if a given object implements the UserQualification interface.
 */
export function instanceOfUserQualification(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function UserQualificationFromJSON(json: any): UserQualification {
  return UserQualificationFromJSONTyped(json, false);
}

export function UserQualificationFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): UserQualification {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    name: !exists(json, "name") ? undefined : json["name"],
    organization: !exists(json, "organization")
      ? undefined
      : json["organization"],
    url: !exists(json, "url") ? undefined : json["url"],
    gotDate: !exists(json, "gotDate") ? undefined : new Date(json["gotDate"]),
    memo: !exists(json, "memo") ? undefined : json["memo"],
  };
}

export function UserQualificationToJSON(value?: UserQualification | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    name: value.name,
    organization: value.organization,
    url: value.url,
    gotDate:
      value.gotDate === undefined
        ? undefined
        : value.gotDate.toISOString().substr(0, 10),
    memo: value.memo,
  };
}
