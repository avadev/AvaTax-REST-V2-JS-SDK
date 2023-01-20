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
 * @version    23.1.0
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as Enums from '../enums/index';
import * as Models from './index';

/**
 * Represents a declaration of nexus within a particular taxing jurisdiction.
            
To create a nexus declaration for your company, you must first call the Definitions API `ListNexus` to obtain a
list of Avalara-defined nexus.  Once you have determined which nexus you wish to declare, you should customize
only the user-selectable fields in this object.
            
The user selectable fields for the nexus object are `companyId`, `effectiveDate`, `endDate`, `localNexusTypeId`,
`taxId`, `nexusTypeId`, `hasPermanentEstablishment`, and `isSellerImporterOfRecord`.
            
When calling `CreateNexus` or `UpdateNexus`, all values in your nexus object except for the user-selectable fields
must match an Avalara-defined system nexus object.  You can retrieve a list of Avalara-defined system nexus objects
by calling `ListNexus`.  If any data does not match, AvaTax may not recognize your nexus declaration.
 * @export
 * @interface NexusModel
 */
 export interface NexusModel {
    /**
     * @type {number}
     * @memberof NexusModel
     */
   id?: number;
    /**
     * @type {number}
     * @memberof NexusModel
     */
   companyId?: number;
    /**
     * @type {string}
     * @memberof NexusModel
     */
   country: string;
    /**
     * @type {string}
     * @memberof NexusModel
     */
   region: string;
    /**
     * @type {Enums.JurisTypeId}
     * @memberof NexusModel
     */
   jurisTypeId?: Enums.JurisTypeId;
    /**
     * @type {Enums.JurisdictionType}
     * @memberof NexusModel
     */
   jurisdictionTypeId?: Enums.JurisdictionType;
    /**
     * @type {string}
     * @memberof NexusModel
     */
   jurisCode: string;
    /**
     * @type {string}
     * @memberof NexusModel
     */
   jurisName: string;
    /**
     * @type {Date}
     * @memberof NexusModel
     */
   effectiveDate?: Date;
    /**
     * @type {Date}
     * @memberof NexusModel
     */
   endDate?: Date;
    /**
     * @type {string}
     * @memberof NexusModel
     */
   shortName?: string;
    /**
     * @type {string}
     * @memberof NexusModel
     */
   signatureCode?: string;
    /**
     * @type {string}
     * @memberof NexusModel
     */
   stateAssignedNo?: string;
    /**
     * @type {Enums.NexusTypeId}
     * @memberof NexusModel
     */
   nexusTypeId?: Enums.NexusTypeId;
    /**
     * @type {Enums.Sourcing}
     * @memberof NexusModel
     */
   sourcing?: Enums.Sourcing;
    /**
     * @type {boolean}
     * @memberof NexusModel
     */
   hasLocalNexus?: boolean;
    /**
     * @type {Enums.LocalNexusTypeId}
     * @memberof NexusModel
     */
   localNexusTypeId?: Enums.LocalNexusTypeId;
    /**
     * @type {boolean}
     * @memberof NexusModel
     */
   hasPermanentEstablishment?: boolean;
    /**
     * @type {string}
     * @memberof NexusModel
     */
   taxId?: string;
    /**
     * @type {boolean}
     * @memberof NexusModel
     */
   streamlinedSalesTax?: boolean;
    /**
     * @type {boolean}
     * @memberof NexusModel
     */
   isSSTActive?: boolean;
    /**
     * @type {Date}
     * @memberof NexusModel
     */
   createdDate?: Date;
    /**
     * @type {number}
     * @memberof NexusModel
     */
   createdUserId?: number;
    /**
     * @type {Date}
     * @memberof NexusModel
     */
   modifiedDate?: Date;
    /**
     * @type {number}
     * @memberof NexusModel
     */
   modifiedUserId?: number;
    /**
     * @type {string}
     * @memberof NexusModel
     */
   taxTypeGroup?: string;
    /**
     * @type {string}
     * @memberof NexusModel
     */
   nexusTaxTypeGroup?: string;
    /**
     * @type {number}
     * @memberof NexusModel
     */
   taxAuthorityId?: number;
    /**
     * @type {boolean}
     * @memberof NexusModel
     */
   isSellerImporterOfRecord?: boolean;
    /**
     * @type {string}
     * @memberof NexusModel
     */
   taxName?: string;
    /**
     * @type {Models.NexusParameterDetailModel[]}
     * @memberof NexusModel
     */
   parameters?: Models.NexusParameterDetailModel[];
    /**
     * @type {boolean}
     * @memberof NexusModel
     */
   taxableNexus?: boolean;
 }