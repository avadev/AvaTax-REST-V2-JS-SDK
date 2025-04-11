import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject("FetchResult")
export class FetchResult<T> {
  /**
   * The number of rows returned by your query, prior to pagination.
   */
  @JsonProperty("@recordsetCount", Number)
  "@recordsetCount": number = 0;
  /**
   * The paginated and filtered list of records matching the parameters you supplied.
   */
  @JsonProperty("value", [Object])
  value: T[] = [];
  /**
   * The link to the next page of results
   */
  @JsonProperty("nextLink", String, true)
  nextLink?: string = '';
}

export function createFetchResultClass<T>(Model: { new (): T }): { new (): FetchResult<T> } {
  @JsonObject(`FetchResult<${Model.name}>`)
  class FetchResultSubclass extends FetchResult<T> {
    @JsonProperty("value", [Model])
    value: T[] = [];
  }
  return FetchResultSubclass;
}