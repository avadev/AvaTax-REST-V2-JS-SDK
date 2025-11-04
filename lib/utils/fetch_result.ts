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

// Cache to store created FetchResult subclasses by model name
const fetchResultCache = new Map<string, any>();

export function createFetchResultClass<T>(Model: { new (): T }): { new (): FetchResult<T> } {
  const modelName = Model.name;
  
  // Return cached class if it already exists
  if (fetchResultCache.has(modelName)) {
    return fetchResultCache.get(modelName);
  }
  
  @JsonObject(`FetchResult<${modelName}>`)
  class FetchResultSubclass extends FetchResult<T> {
    @JsonProperty("value", [Model])
    value: T[] = [];
  }
  
  // Cache the created class for future use
  fetchResultCache.set(modelName, FetchResultSubclass);
  
  return FetchResultSubclass;
}