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
import type { BirthDay } from "./BirthDay";
import {
  BirthDayFromJSON,
  BirthDayFromJSONTyped,
  BirthDayToJSON,
} from "./BirthDay";

/**
 * １ユーザーの属性
 * @export
 * @interface UserAttribute
 */
export interface UserAttribute {
  /**
   * ユーザーを一意に識別するキー
   * @type {number}
   * @memberof UserAttribute
   */
  id?: number;
  /**
   * ユーザーの本名
   * @type {string}
   * @memberof UserAttribute
   */
  name?: string;
  /**
   * ユーザーのニックネーム
   * @type {string}
   * @memberof UserAttribute
   */
  nickname?: string;
  /**
   * URL
   * @type {string}
   * @memberof UserAttribute
   */
  avatarUrl?: string;
  /**
   *
   * @type {BirthDay}
   * @memberof UserAttribute
   */
  birthday?: BirthDay;
  /**
   * 職業
   * @type {string}
   * @memberof UserAttribute
   */
  job?: string;
  /**
   * 所属
   * @type {string}
   * @memberof UserAttribute
   */
  belongTo?: string;
  /**
   * PR
   * @type {string}
   * @memberof UserAttribute
   */
  pr?: string;
}

/**
 * Check if a given object implements the UserAttribute interface.
 */
export function instanceOfUserAttribute(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function UserAttributeFromJSON(json: any): UserAttribute {
  return UserAttributeFromJSONTyped(json, false);
}

export function UserAttributeFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): UserAttribute {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, "id") ? undefined : json["id"],
    name: !exists(json, "name") ? undefined : json["name"],
    nickname: !exists(json, "nickname") ? undefined : json["nickname"],
    avatarUrl: !exists(json, "avatarUrl") ? undefined : json["avatarUrl"],
    birthday: !exists(json, "birthday")
      ? undefined
      : BirthDayFromJSON(json["birthday"]),
    job: !exists(json, "job") ? undefined : json["job"],
    belongTo: !exists(json, "belongTo") ? undefined : json["belongTo"],
    pr: !exists(json, "pr") ? undefined : json["pr"],
  };
}

export function UserAttributeToJSON(value?: UserAttribute | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    name: value.name,
    nickname: value.nickname,
    avatarUrl: value.avatarUrl,
    birthday: BirthDayToJSON(value.birthday),
    job: value.job,
    belongTo: value.belongTo,
    pr: value.pr,
  };
}
