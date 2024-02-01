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
import type { UserSkill } from "./UserSkill";
import {
  UserSkillFromJSON,
  UserSkillFromJSONTyped,
  UserSkillToJSON,
} from "./UserSkill";

/**
 * １ユーザーのスキルタグ及び配下のスキル群を使用Version・使用期間別に保持したもの
 * @export
 * @interface UserSkillTag
 */
export interface UserSkillTag {
  /**
   * スキルタグ名
   * @type {string}
   * @memberof UserSkillTag
   */
  tagName?: string;
  /**
   * スキルタグコード
   * @type {string}
   * @memberof UserSkillTag
   */
  tagCode?: string;
  /**
   *
   * @type {Array<UserSkill>}
   * @memberof UserSkillTag
   */
  skills?: Array<UserSkill>;
}

/**
 * Check if a given object implements the UserSkillTag interface.
 */
export function instanceOfUserSkillTag(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function UserSkillTagFromJSON(json: any): UserSkillTag {
  return UserSkillTagFromJSONTyped(json, false);
}

export function UserSkillTagFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): UserSkillTag {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    tagName: !exists(json, "tagName") ? undefined : json["tagName"],
    tagCode: !exists(json, "tagCode") ? undefined : json["tagCode"],
    skills: !exists(json, "skills")
      ? undefined
      : (json["skills"] as Array<any>).map(UserSkillFromJSON),
  };
}

export function UserSkillTagToJSON(value?: UserSkillTag | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    tagName: value.tagName,
    tagCode: value.tagCode,
    skills:
      value.skills === undefined
        ? undefined
        : (value.skills as Array<any>).map(UserSkillToJSON),
  };
}
