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
import type { UserSkillVersion } from "./UserSkillVersion";
import {
  UserSkillVersionFromJSON,
  UserSkillVersionFromJSONTyped,
  UserSkillVersionToJSON,
} from "./UserSkillVersion";

/**
 * １ユーザーのスキルを使用Version・使用期間別に保持したもの
 * @export
 * @interface UserSkill
 */
export interface UserSkill {
  /**
   * スキル名
   * @type {string}
   * @memberof UserSkill
   */
  name?: string;
  /**
   * スキルキー
   * @type {string}
   * @memberof UserSkill
   */
  key?: string;
  /**
   * URL
   * @type {string}
   * @memberof UserSkill
   */
  url?: string;
  /**
   *
   * @type {Array<UserSkillVersion>}
   * @memberof UserSkill
   */
  versions?: Array<UserSkillVersion>;
}

/**
 * Check if a given object implements the UserSkill interface.
 */
export function instanceOfUserSkill(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function UserSkillFromJSON(json: any): UserSkill {
  return UserSkillFromJSONTyped(json, false);
}

export function UserSkillFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UserSkill {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    name: !exists(json, "name") ? undefined : json["name"],
    key: !exists(json, "key") ? undefined : json["key"],
    url: !exists(json, "url") ? undefined : json["url"],
    versions: !exists(json, "versions")
      ? undefined
      : (json["versions"] as Array<any>).map(UserSkillVersionFromJSON),
  };
}

export function UserSkillToJSON(value?: UserSkill | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    name: value.name,
    key: value.key,
    url: value.url,
    versions:
      value.versions === undefined
        ? undefined
        : (value.versions as Array<any>).map(UserSkillVersionToJSON),
  };
}