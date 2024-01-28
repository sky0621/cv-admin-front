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
import type { Skill } from "./Skill";
import { SkillFromJSON, SkillFromJSONTyped, SkillToJSON } from "./Skill";

/**
 * １キャリアのスキル
 * @export
 * @interface CareerSkill
 */
export interface CareerSkill {
  /**
   *
   * @type {Skill}
   * @memberof CareerSkill
   */
  skill?: Skill;
  /**
   * スキルバージョン
   * @type {string}
   * @memberof CareerSkill
   */
  version?: string;
}

/**
 * Check if a given object implements the CareerSkill interface.
 */
export function instanceOfCareerSkill(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function CareerSkillFromJSON(json: any): CareerSkill {
  return CareerSkillFromJSONTyped(json, false);
}

export function CareerSkillFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CareerSkill {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    skill: !exists(json, "skill") ? undefined : SkillFromJSON(json["skill"]),
    version: !exists(json, "version") ? undefined : json["version"],
  };
}

export function CareerSkillToJSON(value?: CareerSkill | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    skill: SkillToJSON(value.skill),
    version: value.version,
  };
}