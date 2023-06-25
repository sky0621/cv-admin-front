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
import type { CareerPeriodFrom } from "./CareerPeriodFrom";
import {
  CareerPeriodFromFromJSON,
  CareerPeriodFromFromJSONTyped,
  CareerPeriodFromToJSON,
} from "./CareerPeriodFrom";
import type { CareerPeriodTo } from "./CareerPeriodTo";
import {
  CareerPeriodToFromJSON,
  CareerPeriodToFromJSONTyped,
  CareerPeriodToToJSON,
} from "./CareerPeriodTo";

/**
 * １ユーザーのスキルVersionを使用期間別に保持したもの
 * @export
 * @interface UserSkillVersion
 */
export interface UserSkillVersion {
  /**
   * スキルバージョン
   * @type {string}
   * @memberof UserSkillVersion
   */
  version?: string;
  /**
   *
   * @type {CareerPeriodFrom}
   * @memberof UserSkillVersion
   */
  from?: CareerPeriodFrom;
  /**
   *
   * @type {CareerPeriodTo}
   * @memberof UserSkillVersion
   */
  to?: CareerPeriodTo;
}

/**
 * Check if a given object implements the UserSkillVersion interface.
 */
export function instanceOfUserSkillVersion(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function UserSkillVersionFromJSON(json: any): UserSkillVersion {
  return UserSkillVersionFromJSONTyped(json, false);
}

export function UserSkillVersionFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UserSkillVersion {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    version: !exists(json, "version") ? undefined : json["version"],
    from: !exists(json, "from")
      ? undefined
      : CareerPeriodFromFromJSON(json["from"]),
    to: !exists(json, "to") ? undefined : CareerPeriodToFromJSON(json["to"]),
  };
}

export function UserSkillVersionToJSON(value?: UserSkillVersion | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    version: value.version,
    from: CareerPeriodFromToJSON(value.from),
    to: CareerPeriodToToJSON(value.to),
  };
}
