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
import type { CareerSkill } from "./CareerSkill";
import {
  CareerSkillFromJSON,
  CareerSkillFromJSONTyped,
  CareerSkillToJSON,
} from "./CareerSkill";

/**
 * １キャリアのスキルグループ
 * @export
 * @interface CareerSkillGroup
 */
export interface CareerSkillGroup {
  /**
   * スキルグループラベル
   * @type {string}
   * @memberof CareerSkillGroup
   */
  label?: string;
  /**
   *
   * @type {Array<CareerSkill>}
   * @memberof CareerSkillGroup
   */
  skills?: Array<CareerSkill>;
}

/**
 * Check if a given object implements the CareerSkillGroup interface.
 */
export function instanceOfCareerSkillGroup(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function CareerSkillGroupFromJSON(json: any): CareerSkillGroup {
  return CareerSkillGroupFromJSONTyped(json, false);
}

export function CareerSkillGroupFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CareerSkillGroup {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    label: !exists(json, "label") ? undefined : json["label"],
    skills: !exists(json, "skills")
      ? undefined
      : (json["skills"] as Array<any>).map(CareerSkillFromJSON),
  };
}

export function CareerSkillGroupToJSON(value?: CareerSkillGroup | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    label: value.label,
    skills:
      value.skills === undefined
        ? undefined
        : (value.skills as Array<any>).map(CareerSkillToJSON),
  };
}
