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
 * @version    22.6.1
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as Enums from '../enums/index';
import * as Models from './index';

/**
 * A company or business entity.
 * @export
 * @interface CompanyModel
 */
 export interface CompanyModel {
    /**
     * @type {number}
     * @memberof CompanyModel
     */
   id: number;
    /**
     * @type {number}
     * @memberof CompanyModel
     */
   accountId: number;
    /**
     * @type {number}
     * @memberof CompanyModel
     */
   parentCompanyId?: number;
    /**
     * @type {string}
     * @memberof CompanyModel
     */
   sstPid: string;
    /**
     * @type {string}
     * @memberof CompanyModel
     */
   companyCode: string;
    /**
     * @type {string}
     * @memberof CompanyModel
     */
   name: string;
    /**
     * @type {boolean}
     * @memberof CompanyModel
     */
   isDefault?: boolean;
    /**
     * @type {number}
     * @memberof CompanyModel
     */
   defaultLocationId?: number;
    /**
     * @type {boolean}
     * @memberof CompanyModel
     */
   isActive?: boolean;
    /**
     * @type {string}
     * @memberof CompanyModel
     */
   taxpayerIdNumber: string;
    /**
     * @type {boolean}
     * @memberof CompanyModel
     */
   isFein?: boolean;
    /**
     * @type {boolean}
     * @memberof CompanyModel
     */
   hasProfile?: boolean;
    /**
     * @type {boolean}
     * @memberof CompanyModel
     */
   isReportingEntity?: boolean;
    /**
     * @type {Date}
     * @memberof CompanyModel
     */
   sstEffectiveDate?: Date;
    /**
     * @type {string}
     * @memberof CompanyModel
     */
   defaultCountry: string;
    /**
     * @type {string}
     * @memberof CompanyModel
     */
   baseCurrencyCode: string;
    /**
     * @type {Enums.RoundingLevelId}
     * @memberof CompanyModel
     */
   roundingLevelId?: Enums.RoundingLevelId;
    /**
     * @type {boolean}
     * @memberof CompanyModel
     */
   warningsEnabled?: boolean;
    /**
     * @type {boolean}
     * @memberof CompanyModel
     */
   isTest?: boolean;
    /**
     * @type {Enums.TaxDependencyLevelId}
     * @memberof CompanyModel
     */
   taxDependencyLevelId?: Enums.TaxDependencyLevelId;
    /**
     * @type {boolean}
     * @memberof CompanyModel
     */
   inProgress?: boolean;
    /**
     * @type {string}
     * @memberof CompanyModel
     */
   businessIdentificationNo: string;
    /**
     * @type {Date}
     * @memberof CompanyModel
     */
   createdDate?: Date;
    /**
     * @type {number}
     * @memberof CompanyModel
     */
   createdUserId?: number;
    /**
     * @type {Date}
     * @memberof CompanyModel
     */
   modifiedDate?: Date;
    /**
     * @type {number}
     * @memberof CompanyModel
     */
   modifiedUserId?: number;
    /**
     * @type {Models.ContactModel[]}
     * @memberof CompanyModel
     */
   contacts: Models.ContactModel[];
    /**
     * @type {Models.ItemModel[]}
     * @memberof CompanyModel
     */
   items: Models.ItemModel[];
    /**
     * @type {Models.LocationModel[]}
     * @memberof CompanyModel
     */
   locations: Models.LocationModel[];
    /**
     * @type {Models.NexusModel[]}
     * @memberof CompanyModel
     */
   nexus: Models.NexusModel[];
    /**
     * @type {Models.SettingModel[]}
     * @memberof CompanyModel
     */
   settings: Models.SettingModel[];
    /**
     * @type {Models.TaxCodeModel[]}
     * @memberof CompanyModel
     */
   taxCodes: Models.TaxCodeModel[];
    /**
     * @type {Models.TaxRuleModel[]}
     * @memberof CompanyModel
     */
   taxRules: Models.TaxRuleModel[];
    /**
     * @type {Models.UPCModel[]}
     * @memberof CompanyModel
     */
   upcs: Models.UPCModel[];
    /**
     * @type {Models.CompanyModel[]}
     * @memberof CompanyModel
     */
   nonReportingChildCompanies: Models.CompanyModel[];
    /**
     * @type {Models.EcmsModel[]}
     * @memberof CompanyModel
     */
   exemptCerts: Models.EcmsModel[];
    /**
     * @type {string}
     * @memberof CompanyModel
     */
   mossId: string;
    /**
     * @type {string}
     * @memberof CompanyModel
     */
   mossCountry: string;
    /**
     * @type {Models.CompanyParameterDetailModel[]}
     * @memberof CompanyModel
     */
   parameters: Models.CompanyParameterDetailModel[];
    /**
     * @type {Models.CustomerSupplierModel[]}
     * @memberof CompanyModel
     */
   supplierandcustomers: Models.CustomerSupplierModel[];
 }