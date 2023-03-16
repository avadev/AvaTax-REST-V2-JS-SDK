/*
 * AvaTax Software Development Kit for JavaScript
 *
 * (c) 2004-2022 Avalara, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Jonathan Wenger <jonathan.wenger@avalara.com>
 * @author     Sachin Baijal <sachin.baijal@avalara.com>
 * @copyright  2004-2018 Avalara, Inc.
 * @license    https://www.apache.org/licenses/LICENSE-2.0
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as Enums from '../enums/index';
import { ContactModel } from "./ContactModel";
import { ItemModel } from "./ItemModel";
import { LocationModel } from "./LocationModel";
import { NexusModel } from "./NexusModel";
import { SettingModel } from "./SettingModel";
import { TaxCodeModel } from "./TaxCodeModel";
import { TaxRuleModel } from "./TaxRuleModel";
import { UPCModel } from "./UPCModel";
import { EcmsModel } from "./EcmsModel";
import { CompanyParameterDetailModel } from "./CompanyParameterDetailModel";
import { CustomerSupplierModel } from "./CustomerSupplierModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * A company or business entity.
 * @export
 * @class CompanyModel
 */
 @JsonObject("CompanyModel")
 export class CompanyModel {
    /**
     * @type {number}
     * @memberof CompanyModel
     */
   @JsonProperty("id", Number)
   id: number = undefined;
    /**
     * @type {number}
     * @memberof CompanyModel
     */
   @JsonProperty("accountId", Number)
   accountId: number = undefined;
    /**
     * @type {number}
     * @memberof CompanyModel
     */
   @JsonProperty("parentCompanyId", Number, true)
   parentCompanyId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof CompanyModel
     */
   @JsonProperty("sstPid", String, true)
   sstPid?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CompanyModel
     */
   @JsonProperty("companyCode", String, true)
   companyCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CompanyModel
     */
   @JsonProperty("name", String)
   name: string = undefined;
    /**
     * @type {boolean}
     * @memberof CompanyModel
     */
   @JsonProperty("isDefault", Boolean, true)
   isDefault?: boolean | undefined = undefined;
    /**
     * @type {number}
     * @memberof CompanyModel
     */
   @JsonProperty("defaultLocationId", Number, true)
   defaultLocationId?: number | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof CompanyModel
     */
   @JsonProperty("isActive", Boolean, true)
   isActive?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof CompanyModel
     */
   @JsonProperty("taxpayerIdNumber", String, true)
   taxpayerIdNumber?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof CompanyModel
     */
   @JsonProperty("isFein", Boolean, true)
   isFein?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof CompanyModel
     */
   @JsonProperty("hasProfile", Boolean, true)
   hasProfile?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof CompanyModel
     */
   @JsonProperty("isReportingEntity", Boolean, true)
   isReportingEntity?: boolean | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CompanyModel
     */
   @JsonProperty("sstEffectiveDate", DateConverter, true)
   sstEffectiveDate?: Date | undefined = undefined;
    /**
     * @type {string}
     * @memberof CompanyModel
     */
   @JsonProperty("defaultCountry", String)
   defaultCountry: string = undefined;
    /**
     * @type {string}
     * @memberof CompanyModel
     */
   @JsonProperty("baseCurrencyCode", String, true)
   baseCurrencyCode?: string | undefined = undefined;
    /**
     * @type {Enums.RoundingLevelId}
     * @memberof CompanyModel
     */
   @JsonProperty("roundingLevelId", Enums.RoundingLevelIdConverter, true)
   roundingLevelId?: Enums.RoundingLevelId | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof CompanyModel
     */
   @JsonProperty("warningsEnabled", Boolean, true)
   warningsEnabled?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof CompanyModel
     */
   @JsonProperty("isTest", Boolean, true)
   isTest?: boolean | undefined = undefined;
    /**
     * @type {Enums.TaxDependencyLevelId}
     * @memberof CompanyModel
     */
   @JsonProperty("taxDependencyLevelId", Enums.TaxDependencyLevelIdConverter, true)
   taxDependencyLevelId?: Enums.TaxDependencyLevelId | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof CompanyModel
     */
   @JsonProperty("inProgress", Boolean, true)
   inProgress?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof CompanyModel
     */
   @JsonProperty("businessIdentificationNo", String, true)
   businessIdentificationNo?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CompanyModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof CompanyModel
     */
   @JsonProperty("createdUserId", Number, true)
   createdUserId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CompanyModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof CompanyModel
     */
   @JsonProperty("modifiedUserId", Number, true)
   modifiedUserId?: number | undefined = undefined;
    /**
     * @type {ContactModel[]}
     * @memberof CompanyModel
     */
   @JsonProperty("contacts", [ContactModel], true)
   contacts?: ContactModel[] | undefined = undefined;
    /**
     * @type {ItemModel[]}
     * @memberof CompanyModel
     */
   @JsonProperty("items", [ItemModel], true)
   items?: ItemModel[] | undefined = undefined;
    /**
     * @type {LocationModel[]}
     * @memberof CompanyModel
     */
   @JsonProperty("locations", [LocationModel], true)
   locations?: LocationModel[] | undefined = undefined;
    /**
     * @type {NexusModel[]}
     * @memberof CompanyModel
     */
   @JsonProperty("nexus", [NexusModel], true)
   nexus?: NexusModel[] | undefined = undefined;
    /**
     * @type {SettingModel[]}
     * @memberof CompanyModel
     */
   @JsonProperty("settings", [SettingModel], true)
   settings?: SettingModel[] | undefined = undefined;
    /**
     * @type {TaxCodeModel[]}
     * @memberof CompanyModel
     */
   @JsonProperty("taxCodes", [TaxCodeModel], true)
   taxCodes?: TaxCodeModel[] | undefined = undefined;
    /**
     * @type {TaxRuleModel[]}
     * @memberof CompanyModel
     */
   @JsonProperty("taxRules", [TaxRuleModel], true)
   taxRules?: TaxRuleModel[] | undefined = undefined;
    /**
     * @type {UPCModel[]}
     * @memberof CompanyModel
     */
   @JsonProperty("upcs", [UPCModel], true)
   upcs?: UPCModel[] | undefined = undefined;
    /**
     * @type {CompanyModel[]}
     * @memberof CompanyModel
     */
   @JsonProperty("nonReportingChildCompanies", [CompanyModel], true)
   nonReportingChildCompanies?: CompanyModel[] | undefined = undefined;
    /**
     * @type {EcmsModel[]}
     * @memberof CompanyModel
     */
   @JsonProperty("exemptCerts", [EcmsModel], true)
   exemptCerts?: EcmsModel[] | undefined = undefined;
    /**
     * @type {string}
     * @memberof CompanyModel
     */
   @JsonProperty("mossId", String, true)
   mossId?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CompanyModel
     */
   @JsonProperty("mossCountry", String, true)
   mossCountry?: string | undefined = undefined;
    /**
     * @type {CompanyParameterDetailModel[]}
     * @memberof CompanyModel
     */
   @JsonProperty("parameters", [CompanyParameterDetailModel], true)
   parameters?: CompanyParameterDetailModel[] | undefined = undefined;
    /**
     * @type {CustomerSupplierModel[]}
     * @memberof CompanyModel
     */
   @JsonProperty("supplierandcustomers", [CustomerSupplierModel], true)
   supplierandcustomers?: CustomerSupplierModel[] | undefined = undefined;
 }