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
import { JobPhaseModel } from "./JobPhaseModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * A job associated with a certificate.
            
Used as both the input shape on certificate POST/PUT (only `id` and the nested
Avalara.AvaTax.AccountServices.Models.v2.CertificateJobModel.phases ids are required to link existing jobs/phases/tasks to the certificate)
and the response shape on certificate GET endpoints when `jobs` is requested via
`$include`. Use `$include=jobs.phases` or `$include=jobs.tasks` on GET to
additionally populate the nested Avalara.AvaTax.AccountServices.Models.v2.CertificateJobModel.phases collection and the tasks under each phase.
 * @export
 * @class CertificateJobModel
 */
 @JsonObject("CertificateJobModel")
 export class CertificateJobModel {
    /**
     * @type {boolean}
     * @memberof CertificateJobModel
     */
   @JsonProperty("isExplicit", Boolean, true)
   isExplicit?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof CertificateJobModel
     */
   @JsonProperty("isDirect", Boolean, true)
   isDirect?: boolean | undefined = undefined;
    /**
     * @type {number}
     * @memberof CertificateJobModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof CertificateJobModel
     */
   @JsonProperty("name", String, true)
   name?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CertificateJobModel
     */
   @JsonProperty("jobNumber", String, true)
   jobNumber?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CertificateJobModel
     */
   @JsonProperty("exposureZoneName", String, true)
   exposureZoneName?: string | undefined = undefined;
    /**
     * @type {JobPhaseModel[]}
     * @memberof CertificateJobModel
     */
   @JsonProperty("phases", [JobPhaseModel], true)
   phases?: JobPhaseModel[] | undefined = undefined;
 }