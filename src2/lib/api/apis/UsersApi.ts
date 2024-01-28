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

import * as runtime from "../runtime";
import type {
  SkilltagsPost400Response,
  UserActivity,
  UserAttribute,
  UserCareer,
  UserCareerGroup,
  UserCareerGroupOwn,
  UserNote,
  UserNoteItem,
  UserNoteOwn,
  UserQualification,
  UserSkillTag,
} from "../models";
import {
  SkilltagsPost400ResponseFromJSON,
  SkilltagsPost400ResponseToJSON,
  UserActivityFromJSON,
  UserActivityToJSON,
  UserAttributeFromJSON,
  UserAttributeToJSON,
  UserCareerFromJSON,
  UserCareerToJSON,
  UserCareerGroupFromJSON,
  UserCareerGroupToJSON,
  UserCareerGroupOwnFromJSON,
  UserCareerGroupOwnToJSON,
  UserNoteFromJSON,
  UserNoteToJSON,
  UserNoteItemFromJSON,
  UserNoteItemToJSON,
  UserNoteOwnFromJSON,
  UserNoteOwnToJSON,
  UserQualificationFromJSON,
  UserQualificationToJSON,
  UserSkillTagFromJSON,
  UserSkillTagToJSON,
} from "../models";

export interface UsersByUserIdActivitiesGetRequest {
  byUserId: number;
}

export interface UsersByUserIdActivitiesPutRequest {
  byUserId: number;
  userActivity: Array<UserActivity>;
}

export interface UsersByUserIdAttributeGetRequest {
  byUserId: number;
}

export interface UsersByUserIdAttributePutRequest {
  byUserId: number;
  userAttribute: UserAttribute;
}

export interface UsersByUserIdCareergroupsByCareerGroupIdCareersPutRequest {
  byUserId: number;
  byCareerGroupId: number;
  userCareer: Array<UserCareer>;
}

export interface UsersByUserIdCareergroupsByCareerGroupIdDeleteRequest {
  byUserId: number;
  byCareerGroupId: number;
}

export interface UsersByUserIdCareergroupsByCareerGroupIdPutRequest {
  byUserId: number;
  byCareerGroupId: number;
  userCareerGroupOwn: UserCareerGroupOwn;
}

export interface UsersByUserIdCareergroupsGetRequest {
  byUserId: number;
}

export interface UsersByUserIdCareergroupsPostRequest {
  byUserId: number;
  userCareerGroup: UserCareerGroup;
}

export interface UsersByUserIdDeleteRequest {
  byUserId: number;
}

export interface UsersByUserIdNotesByNoteIdDeleteRequest {
  byUserId: number;
  byNoteId: number;
}

export interface UsersByUserIdNotesByNoteIdItemsPutRequest {
  byUserId: number;
  byNoteId: number;
  userNoteItem: Array<UserNoteItem>;
}

export interface UsersByUserIdNotesByNoteIdPutRequest {
  byUserId: number;
  byNoteId: number;
  userNoteOwn: UserNoteOwn;
}

export interface UsersByUserIdNotesGetRequest {
  byUserId: number;
}

export interface UsersByUserIdNotesPostRequest {
  byUserId: number;
  userNote: UserNote;
}

export interface UsersByUserIdQualificationsGetRequest {
  byUserId: number;
}

export interface UsersByUserIdQualificationsPutRequest {
  byUserId: number;
  userQualification: Array<UserQualification>;
}

export interface UsersByUserIdSkillsGetRequest {
  byUserId: number;
}

export interface UsersPostRequest {
  userAttribute: UserAttribute;
}

/**
 *
 */
export class UsersApi extends runtime.BaseAPI {
  /**
   * 指定ユーザーのアクティビティ群を取得する。
   * アクティビティ群取得
   */
  async usersByUserIdActivitiesGetRaw(
    requestParameters: UsersByUserIdActivitiesGetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Array<UserActivity>>> {
    if (
      requestParameters.byUserId === null ||
      requestParameters.byUserId === undefined
    ) {
      throw new runtime.RequiredError(
        "byUserId",
        "Required parameter requestParameters.byUserId was null or undefined when calling usersByUserIdActivitiesGet.",
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/users/{byUserId}/activities`.replace(
          `{${"byUserId"}}`,
          encodeURIComponent(String(requestParameters.byUserId)),
        ),
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      jsonValue.map(UserActivityFromJSON),
    );
  }

  /**
   * 指定ユーザーのアクティビティ群を取得する。
   * アクティビティ群取得
   */
  async usersByUserIdActivitiesGet(
    requestParameters: UsersByUserIdActivitiesGetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Array<UserActivity>> {
    const response = await this.usersByUserIdActivitiesGetRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * 指定ユーザーのアクティビティ群を最新化（総洗い替え）する。
   * アクティビティ群最新化
   */
  async usersByUserIdActivitiesPutRaw(
    requestParameters: UsersByUserIdActivitiesPutRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Array<UserActivity>>> {
    if (
      requestParameters.byUserId === null ||
      requestParameters.byUserId === undefined
    ) {
      throw new runtime.RequiredError(
        "byUserId",
        "Required parameter requestParameters.byUserId was null or undefined when calling usersByUserIdActivitiesPut.",
      );
    }

    if (
      requestParameters.userActivity === null ||
      requestParameters.userActivity === undefined
    ) {
      throw new runtime.RequiredError(
        "userActivity",
        "Required parameter requestParameters.userActivity was null or undefined when calling usersByUserIdActivitiesPut.",
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    const response = await this.request(
      {
        path: `/users/{byUserId}/activities`.replace(
          `{${"byUserId"}}`,
          encodeURIComponent(String(requestParameters.byUserId)),
        ),
        method: "PUT",
        headers: headerParameters,
        query: queryParameters,
        body: requestParameters.userActivity.map(UserActivityToJSON),
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      jsonValue.map(UserActivityFromJSON),
    );
  }

  /**
   * 指定ユーザーのアクティビティ群を最新化（総洗い替え）する。
   * アクティビティ群最新化
   */
  async usersByUserIdActivitiesPut(
    requestParameters: UsersByUserIdActivitiesPutRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Array<UserActivity>> {
    const response = await this.usersByUserIdActivitiesPutRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * 指定ユーザーの属性を取得する。
   * 属性取得
   */
  async usersByUserIdAttributeGetRaw(
    requestParameters: UsersByUserIdAttributeGetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<UserAttribute>> {
    if (
      requestParameters.byUserId === null ||
      requestParameters.byUserId === undefined
    ) {
      throw new runtime.RequiredError(
        "byUserId",
        "Required parameter requestParameters.byUserId was null or undefined when calling usersByUserIdAttributeGet.",
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/users/{byUserId}/attribute`.replace(
          `{${"byUserId"}}`,
          encodeURIComponent(String(requestParameters.byUserId)),
        ),
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      UserAttributeFromJSON(jsonValue),
    );
  }

  /**
   * 指定ユーザーの属性を取得する。
   * 属性取得
   */
  async usersByUserIdAttributeGet(
    requestParameters: UsersByUserIdAttributeGetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<UserAttribute> {
    const response = await this.usersByUserIdAttributeGetRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * 指定ユーザーの属性を更新する。
   * 属性更新
   */
  async usersByUserIdAttributePutRaw(
    requestParameters: UsersByUserIdAttributePutRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<UserAttribute>> {
    if (
      requestParameters.byUserId === null ||
      requestParameters.byUserId === undefined
    ) {
      throw new runtime.RequiredError(
        "byUserId",
        "Required parameter requestParameters.byUserId was null or undefined when calling usersByUserIdAttributePut.",
      );
    }

    if (
      requestParameters.userAttribute === null ||
      requestParameters.userAttribute === undefined
    ) {
      throw new runtime.RequiredError(
        "userAttribute",
        "Required parameter requestParameters.userAttribute was null or undefined when calling usersByUserIdAttributePut.",
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    const response = await this.request(
      {
        path: `/users/{byUserId}/attribute`.replace(
          `{${"byUserId"}}`,
          encodeURIComponent(String(requestParameters.byUserId)),
        ),
        method: "PUT",
        headers: headerParameters,
        query: queryParameters,
        body: UserAttributeToJSON(requestParameters.userAttribute),
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      UserAttributeFromJSON(jsonValue),
    );
  }

  /**
   * 指定ユーザーの属性を更新する。
   * 属性更新
   */
  async usersByUserIdAttributePut(
    requestParameters: UsersByUserIdAttributePutRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<UserAttribute> {
    const response = await this.usersByUserIdAttributePutRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * １キャリアグループ内のキャリア群を最新化（総洗い替え）する。
   * 【未実装】キャリアグループ内キャリア群最新化
   */
  async usersByUserIdCareergroupsByCareerGroupIdCareersPutRaw(
    requestParameters: UsersByUserIdCareergroupsByCareerGroupIdCareersPutRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Array<UserCareer>>> {
    if (
      requestParameters.byUserId === null ||
      requestParameters.byUserId === undefined
    ) {
      throw new runtime.RequiredError(
        "byUserId",
        "Required parameter requestParameters.byUserId was null or undefined when calling usersByUserIdCareergroupsByCareerGroupIdCareersPut.",
      );
    }

    if (
      requestParameters.byCareerGroupId === null ||
      requestParameters.byCareerGroupId === undefined
    ) {
      throw new runtime.RequiredError(
        "byCareerGroupId",
        "Required parameter requestParameters.byCareerGroupId was null or undefined when calling usersByUserIdCareergroupsByCareerGroupIdCareersPut.",
      );
    }

    if (
      requestParameters.userCareer === null ||
      requestParameters.userCareer === undefined
    ) {
      throw new runtime.RequiredError(
        "userCareer",
        "Required parameter requestParameters.userCareer was null or undefined when calling usersByUserIdCareergroupsByCareerGroupIdCareersPut.",
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    const response = await this.request(
      {
        path: `/users/{byUserId}/careergroups/{byCareerGroupId}/careers`
          .replace(
            `{${"byUserId"}}`,
            encodeURIComponent(String(requestParameters.byUserId)),
          )
          .replace(
            `{${"byCareerGroupId"}}`,
            encodeURIComponent(String(requestParameters.byCareerGroupId)),
          ),
        method: "PUT",
        headers: headerParameters,
        query: queryParameters,
        body: requestParameters.userCareer.map(UserCareerToJSON),
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      jsonValue.map(UserCareerFromJSON),
    );
  }

  /**
   * １キャリアグループ内のキャリア群を最新化（総洗い替え）する。
   * 【未実装】キャリアグループ内キャリア群最新化
   */
  async usersByUserIdCareergroupsByCareerGroupIdCareersPut(
    requestParameters: UsersByUserIdCareergroupsByCareerGroupIdCareersPutRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Array<UserCareer>> {
    const response =
      await this.usersByUserIdCareergroupsByCareerGroupIdCareersPutRaw(
        requestParameters,
        initOverrides,
      );
    return await response.value();
  }

  /**
   * １キャリアグループを削除する。
   * 【未実装】キャリアグループ削除
   */
  async usersByUserIdCareergroupsByCareerGroupIdDeleteRaw(
    requestParameters: UsersByUserIdCareergroupsByCareerGroupIdDeleteRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<void>> {
    if (
      requestParameters.byUserId === null ||
      requestParameters.byUserId === undefined
    ) {
      throw new runtime.RequiredError(
        "byUserId",
        "Required parameter requestParameters.byUserId was null or undefined when calling usersByUserIdCareergroupsByCareerGroupIdDelete.",
      );
    }

    if (
      requestParameters.byCareerGroupId === null ||
      requestParameters.byCareerGroupId === undefined
    ) {
      throw new runtime.RequiredError(
        "byCareerGroupId",
        "Required parameter requestParameters.byCareerGroupId was null or undefined when calling usersByUserIdCareergroupsByCareerGroupIdDelete.",
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/users/{byUserId}/careergroups/{byCareerGroupId}`
          .replace(
            `{${"byUserId"}}`,
            encodeURIComponent(String(requestParameters.byUserId)),
          )
          .replace(
            `{${"byCareerGroupId"}}`,
            encodeURIComponent(String(requestParameters.byCareerGroupId)),
          ),
        method: "DELETE",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * １キャリアグループを削除する。
   * 【未実装】キャリアグループ削除
   */
  async usersByUserIdCareergroupsByCareerGroupIdDelete(
    requestParameters: UsersByUserIdCareergroupsByCareerGroupIdDeleteRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<void> {
    await this.usersByUserIdCareergroupsByCareerGroupIdDeleteRaw(
      requestParameters,
      initOverrides,
    );
  }

  /**
   * １キャリアグループを更新する。
   * 【未実装】キャリアグループ更新
   */
  async usersByUserIdCareergroupsByCareerGroupIdPutRaw(
    requestParameters: UsersByUserIdCareergroupsByCareerGroupIdPutRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<UserCareerGroupOwn>> {
    if (
      requestParameters.byUserId === null ||
      requestParameters.byUserId === undefined
    ) {
      throw new runtime.RequiredError(
        "byUserId",
        "Required parameter requestParameters.byUserId was null or undefined when calling usersByUserIdCareergroupsByCareerGroupIdPut.",
      );
    }

    if (
      requestParameters.byCareerGroupId === null ||
      requestParameters.byCareerGroupId === undefined
    ) {
      throw new runtime.RequiredError(
        "byCareerGroupId",
        "Required parameter requestParameters.byCareerGroupId was null or undefined when calling usersByUserIdCareergroupsByCareerGroupIdPut.",
      );
    }

    if (
      requestParameters.userCareerGroupOwn === null ||
      requestParameters.userCareerGroupOwn === undefined
    ) {
      throw new runtime.RequiredError(
        "userCareerGroupOwn",
        "Required parameter requestParameters.userCareerGroupOwn was null or undefined when calling usersByUserIdCareergroupsByCareerGroupIdPut.",
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    const response = await this.request(
      {
        path: `/users/{byUserId}/careergroups/{byCareerGroupId}`
          .replace(
            `{${"byUserId"}}`,
            encodeURIComponent(String(requestParameters.byUserId)),
          )
          .replace(
            `{${"byCareerGroupId"}}`,
            encodeURIComponent(String(requestParameters.byCareerGroupId)),
          ),
        method: "PUT",
        headers: headerParameters,
        query: queryParameters,
        body: UserCareerGroupOwnToJSON(requestParameters.userCareerGroupOwn),
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      UserCareerGroupOwnFromJSON(jsonValue),
    );
  }

  /**
   * １キャリアグループを更新する。
   * 【未実装】キャリアグループ更新
   */
  async usersByUserIdCareergroupsByCareerGroupIdPut(
    requestParameters: UsersByUserIdCareergroupsByCareerGroupIdPutRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<UserCareerGroupOwn> {
    const response = await this.usersByUserIdCareergroupsByCareerGroupIdPutRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * 指定ユーザーのキャリアグループ群を取得する。
   * キャリアグループ群取得
   */
  async usersByUserIdCareergroupsGetRaw(
    requestParameters: UsersByUserIdCareergroupsGetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Array<UserCareerGroup>>> {
    if (
      requestParameters.byUserId === null ||
      requestParameters.byUserId === undefined
    ) {
      throw new runtime.RequiredError(
        "byUserId",
        "Required parameter requestParameters.byUserId was null or undefined when calling usersByUserIdCareergroupsGet.",
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/users/{byUserId}/careergroups`.replace(
          `{${"byUserId"}}`,
          encodeURIComponent(String(requestParameters.byUserId)),
        ),
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      jsonValue.map(UserCareerGroupFromJSON),
    );
  }

  /**
   * 指定ユーザーのキャリアグループ群を取得する。
   * キャリアグループ群取得
   */
  async usersByUserIdCareergroupsGet(
    requestParameters: UsersByUserIdCareergroupsGetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Array<UserCareerGroup>> {
    const response = await this.usersByUserIdCareergroupsGetRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * キャリアグループを新規登録する。
   * キャリアグループ新規登録
   */
  async usersByUserIdCareergroupsPostRaw(
    requestParameters: UsersByUserIdCareergroupsPostRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<UserCareerGroup>> {
    if (
      requestParameters.byUserId === null ||
      requestParameters.byUserId === undefined
    ) {
      throw new runtime.RequiredError(
        "byUserId",
        "Required parameter requestParameters.byUserId was null or undefined when calling usersByUserIdCareergroupsPost.",
      );
    }

    if (
      requestParameters.userCareerGroup === null ||
      requestParameters.userCareerGroup === undefined
    ) {
      throw new runtime.RequiredError(
        "userCareerGroup",
        "Required parameter requestParameters.userCareerGroup was null or undefined when calling usersByUserIdCareergroupsPost.",
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    const response = await this.request(
      {
        path: `/users/{byUserId}/careergroups`.replace(
          `{${"byUserId"}}`,
          encodeURIComponent(String(requestParameters.byUserId)),
        ),
        method: "POST",
        headers: headerParameters,
        query: queryParameters,
        body: UserCareerGroupToJSON(requestParameters.userCareerGroup),
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      UserCareerGroupFromJSON(jsonValue),
    );
  }

  /**
   * キャリアグループを新規登録する。
   * キャリアグループ新規登録
   */
  async usersByUserIdCareergroupsPost(
    requestParameters: UsersByUserIdCareergroupsPostRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<UserCareerGroup> {
    const response = await this.usersByUserIdCareergroupsPostRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * 指定ユーザーアカウントを削除する。
   * 指定ユーザーアカウント削除
   */
  async usersByUserIdDeleteRaw(
    requestParameters: UsersByUserIdDeleteRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<void>> {
    if (
      requestParameters.byUserId === null ||
      requestParameters.byUserId === undefined
    ) {
      throw new runtime.RequiredError(
        "byUserId",
        "Required parameter requestParameters.byUserId was null or undefined when calling usersByUserIdDelete.",
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/users/{byUserId}`.replace(
          `{${"byUserId"}}`,
          encodeURIComponent(String(requestParameters.byUserId)),
        ),
        method: "DELETE",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * 指定ユーザーアカウントを削除する。
   * 指定ユーザーアカウント削除
   */
  async usersByUserIdDelete(
    requestParameters: UsersByUserIdDeleteRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<void> {
    await this.usersByUserIdDeleteRaw(requestParameters, initOverrides);
  }

  /**
   * １注釈を削除する。
   * 【未実装】注釈削除
   */
  async usersByUserIdNotesByNoteIdDeleteRaw(
    requestParameters: UsersByUserIdNotesByNoteIdDeleteRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<void>> {
    if (
      requestParameters.byUserId === null ||
      requestParameters.byUserId === undefined
    ) {
      throw new runtime.RequiredError(
        "byUserId",
        "Required parameter requestParameters.byUserId was null or undefined when calling usersByUserIdNotesByNoteIdDelete.",
      );
    }

    if (
      requestParameters.byNoteId === null ||
      requestParameters.byNoteId === undefined
    ) {
      throw new runtime.RequiredError(
        "byNoteId",
        "Required parameter requestParameters.byNoteId was null or undefined when calling usersByUserIdNotesByNoteIdDelete.",
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/users/{byUserId}/notes/{byNoteId}`
          .replace(
            `{${"byUserId"}}`,
            encodeURIComponent(String(requestParameters.byUserId)),
          )
          .replace(
            `{${"byNoteId"}}`,
            encodeURIComponent(String(requestParameters.byNoteId)),
          ),
        method: "DELETE",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * １注釈を削除する。
   * 【未実装】注釈削除
   */
  async usersByUserIdNotesByNoteIdDelete(
    requestParameters: UsersByUserIdNotesByNoteIdDeleteRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<void> {
    await this.usersByUserIdNotesByNoteIdDeleteRaw(
      requestParameters,
      initOverrides,
    );
  }

  /**
   * １注釈内の要素群を最新化（総洗い替え）する。
   * 【未実装】注釈内要素群最新化
   */
  async usersByUserIdNotesByNoteIdItemsPutRaw(
    requestParameters: UsersByUserIdNotesByNoteIdItemsPutRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Array<UserNoteItem>>> {
    if (
      requestParameters.byUserId === null ||
      requestParameters.byUserId === undefined
    ) {
      throw new runtime.RequiredError(
        "byUserId",
        "Required parameter requestParameters.byUserId was null or undefined when calling usersByUserIdNotesByNoteIdItemsPut.",
      );
    }

    if (
      requestParameters.byNoteId === null ||
      requestParameters.byNoteId === undefined
    ) {
      throw new runtime.RequiredError(
        "byNoteId",
        "Required parameter requestParameters.byNoteId was null or undefined when calling usersByUserIdNotesByNoteIdItemsPut.",
      );
    }

    if (
      requestParameters.userNoteItem === null ||
      requestParameters.userNoteItem === undefined
    ) {
      throw new runtime.RequiredError(
        "userNoteItem",
        "Required parameter requestParameters.userNoteItem was null or undefined when calling usersByUserIdNotesByNoteIdItemsPut.",
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    const response = await this.request(
      {
        path: `/users/{byUserId}/notes/{byNoteId}/items`
          .replace(
            `{${"byUserId"}}`,
            encodeURIComponent(String(requestParameters.byUserId)),
          )
          .replace(
            `{${"byNoteId"}}`,
            encodeURIComponent(String(requestParameters.byNoteId)),
          ),
        method: "PUT",
        headers: headerParameters,
        query: queryParameters,
        body: requestParameters.userNoteItem.map(UserNoteItemToJSON),
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      jsonValue.map(UserNoteItemFromJSON),
    );
  }

  /**
   * １注釈内の要素群を最新化（総洗い替え）する。
   * 【未実装】注釈内要素群最新化
   */
  async usersByUserIdNotesByNoteIdItemsPut(
    requestParameters: UsersByUserIdNotesByNoteIdItemsPutRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Array<UserNoteItem>> {
    const response = await this.usersByUserIdNotesByNoteIdItemsPutRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * １注釈を更新する。
   * 【未実装】注釈更新
   */
  async usersByUserIdNotesByNoteIdPutRaw(
    requestParameters: UsersByUserIdNotesByNoteIdPutRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<UserNoteOwn>> {
    if (
      requestParameters.byUserId === null ||
      requestParameters.byUserId === undefined
    ) {
      throw new runtime.RequiredError(
        "byUserId",
        "Required parameter requestParameters.byUserId was null or undefined when calling usersByUserIdNotesByNoteIdPut.",
      );
    }

    if (
      requestParameters.byNoteId === null ||
      requestParameters.byNoteId === undefined
    ) {
      throw new runtime.RequiredError(
        "byNoteId",
        "Required parameter requestParameters.byNoteId was null or undefined when calling usersByUserIdNotesByNoteIdPut.",
      );
    }

    if (
      requestParameters.userNoteOwn === null ||
      requestParameters.userNoteOwn === undefined
    ) {
      throw new runtime.RequiredError(
        "userNoteOwn",
        "Required parameter requestParameters.userNoteOwn was null or undefined when calling usersByUserIdNotesByNoteIdPut.",
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    const response = await this.request(
      {
        path: `/users/{byUserId}/notes/{byNoteId}`
          .replace(
            `{${"byUserId"}}`,
            encodeURIComponent(String(requestParameters.byUserId)),
          )
          .replace(
            `{${"byNoteId"}}`,
            encodeURIComponent(String(requestParameters.byNoteId)),
          ),
        method: "PUT",
        headers: headerParameters,
        query: queryParameters,
        body: UserNoteOwnToJSON(requestParameters.userNoteOwn),
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      UserNoteOwnFromJSON(jsonValue),
    );
  }

  /**
   * １注釈を更新する。
   * 【未実装】注釈更新
   */
  async usersByUserIdNotesByNoteIdPut(
    requestParameters: UsersByUserIdNotesByNoteIdPutRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<UserNoteOwn> {
    const response = await this.usersByUserIdNotesByNoteIdPutRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * 指定ユーザーの注釈群を取得する。
   * 注釈群取得
   */
  async usersByUserIdNotesGetRaw(
    requestParameters: UsersByUserIdNotesGetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Array<UserNote>>> {
    if (
      requestParameters.byUserId === null ||
      requestParameters.byUserId === undefined
    ) {
      throw new runtime.RequiredError(
        "byUserId",
        "Required parameter requestParameters.byUserId was null or undefined when calling usersByUserIdNotesGet.",
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/users/{byUserId}/notes`.replace(
          `{${"byUserId"}}`,
          encodeURIComponent(String(requestParameters.byUserId)),
        ),
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      jsonValue.map(UserNoteFromJSON),
    );
  }

  /**
   * 指定ユーザーの注釈群を取得する。
   * 注釈群取得
   */
  async usersByUserIdNotesGet(
    requestParameters: UsersByUserIdNotesGetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Array<UserNote>> {
    const response = await this.usersByUserIdNotesGetRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * 注釈を新規登録する。
   * 注釈新規登録
   */
  async usersByUserIdNotesPostRaw(
    requestParameters: UsersByUserIdNotesPostRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<UserNote>> {
    if (
      requestParameters.byUserId === null ||
      requestParameters.byUserId === undefined
    ) {
      throw new runtime.RequiredError(
        "byUserId",
        "Required parameter requestParameters.byUserId was null or undefined when calling usersByUserIdNotesPost.",
      );
    }

    if (
      requestParameters.userNote === null ||
      requestParameters.userNote === undefined
    ) {
      throw new runtime.RequiredError(
        "userNote",
        "Required parameter requestParameters.userNote was null or undefined when calling usersByUserIdNotesPost.",
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    const response = await this.request(
      {
        path: `/users/{byUserId}/notes`.replace(
          `{${"byUserId"}}`,
          encodeURIComponent(String(requestParameters.byUserId)),
        ),
        method: "POST",
        headers: headerParameters,
        query: queryParameters,
        body: UserNoteToJSON(requestParameters.userNote),
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      UserNoteFromJSON(jsonValue),
    );
  }

  /**
   * 注釈を新規登録する。
   * 注釈新規登録
   */
  async usersByUserIdNotesPost(
    requestParameters: UsersByUserIdNotesPostRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<UserNote> {
    const response = await this.usersByUserIdNotesPostRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * 指定ユーザーの資格情報群を取得する。
   * 資格情報群取得
   */
  async usersByUserIdQualificationsGetRaw(
    requestParameters: UsersByUserIdQualificationsGetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Array<UserQualification>>> {
    if (
      requestParameters.byUserId === null ||
      requestParameters.byUserId === undefined
    ) {
      throw new runtime.RequiredError(
        "byUserId",
        "Required parameter requestParameters.byUserId was null or undefined when calling usersByUserIdQualificationsGet.",
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/users/{byUserId}/qualifications`.replace(
          `{${"byUserId"}}`,
          encodeURIComponent(String(requestParameters.byUserId)),
        ),
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      jsonValue.map(UserQualificationFromJSON),
    );
  }

  /**
   * 指定ユーザーの資格情報群を取得する。
   * 資格情報群取得
   */
  async usersByUserIdQualificationsGet(
    requestParameters: UsersByUserIdQualificationsGetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Array<UserQualification>> {
    const response = await this.usersByUserIdQualificationsGetRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * 指定ユーザーの資格情報群を最新化（総洗い替え）する。
   * 資格情報群最新化
   */
  async usersByUserIdQualificationsPutRaw(
    requestParameters: UsersByUserIdQualificationsPutRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Array<UserQualification>>> {
    if (
      requestParameters.byUserId === null ||
      requestParameters.byUserId === undefined
    ) {
      throw new runtime.RequiredError(
        "byUserId",
        "Required parameter requestParameters.byUserId was null or undefined when calling usersByUserIdQualificationsPut.",
      );
    }

    if (
      requestParameters.userQualification === null ||
      requestParameters.userQualification === undefined
    ) {
      throw new runtime.RequiredError(
        "userQualification",
        "Required parameter requestParameters.userQualification was null or undefined when calling usersByUserIdQualificationsPut.",
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    const response = await this.request(
      {
        path: `/users/{byUserId}/qualifications`.replace(
          `{${"byUserId"}}`,
          encodeURIComponent(String(requestParameters.byUserId)),
        ),
        method: "PUT",
        headers: headerParameters,
        query: queryParameters,
        body: requestParameters.userQualification.map(UserQualificationToJSON),
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      jsonValue.map(UserQualificationFromJSON),
    );
  }

  /**
   * 指定ユーザーの資格情報群を最新化（総洗い替え）する。
   * 資格情報群最新化
   */
  async usersByUserIdQualificationsPut(
    requestParameters: UsersByUserIdQualificationsPutRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Array<UserQualification>> {
    const response = await this.usersByUserIdQualificationsPutRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * 指定ユーザーのスキル群を取得する。
   * スキル群取得
   */
  async usersByUserIdSkillsGetRaw(
    requestParameters: UsersByUserIdSkillsGetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Array<UserSkillTag>>> {
    if (
      requestParameters.byUserId === null ||
      requestParameters.byUserId === undefined
    ) {
      throw new runtime.RequiredError(
        "byUserId",
        "Required parameter requestParameters.byUserId was null or undefined when calling usersByUserIdSkillsGet.",
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/users/{byUserId}/skills`.replace(
          `{${"byUserId"}}`,
          encodeURIComponent(String(requestParameters.byUserId)),
        ),
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      jsonValue.map(UserSkillTagFromJSON),
    );
  }

  /**
   * 指定ユーザーのスキル群を取得する。
   * スキル群取得
   */
  async usersByUserIdSkillsGet(
    requestParameters: UsersByUserIdSkillsGetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Array<UserSkillTag>> {
    const response = await this.usersByUserIdSkillsGetRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * ユーザー一覧を取得する。
   * ユーザー一覧取得
   */
  async usersGetRaw(
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Array<UserAttribute>>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/users`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      jsonValue.map(UserAttributeFromJSON),
    );
  }

  /**
   * ユーザー一覧を取得する。
   * ユーザー一覧取得
   */
  async usersGet(
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Array<UserAttribute>> {
    const response = await this.usersGetRaw(initOverrides);
    return await response.value();
  }

  /**
   * ユーザーアカウントを登録する。
   * ユーザーアカウント登録
   */
  async usersPostRaw(
    requestParameters: UsersPostRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<UserAttribute>> {
    if (
      requestParameters.userAttribute === null ||
      requestParameters.userAttribute === undefined
    ) {
      throw new runtime.RequiredError(
        "userAttribute",
        "Required parameter requestParameters.userAttribute was null or undefined when calling usersPost.",
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    const response = await this.request(
      {
        path: `/users`,
        method: "POST",
        headers: headerParameters,
        query: queryParameters,
        body: UserAttributeToJSON(requestParameters.userAttribute),
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      UserAttributeFromJSON(jsonValue),
    );
  }

  /**
   * ユーザーアカウントを登録する。
   * ユーザーアカウント登録
   */
  async usersPost(
    requestParameters: UsersPostRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<UserAttribute> {
    const response = await this.usersPostRaw(requestParameters, initOverrides);
    return await response.value();
  }
}
