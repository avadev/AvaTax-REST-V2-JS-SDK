export default {
    id: 618368842515476464,
    code: '8f8084cb-d8d4-418a-bdbb-131f7254e09b',
    companyId: 559766,
    date: '2017-04-13',
    paymentDate: '1900-01-01',
    status: 'Committed',
    type: 'SalesInvoice',
    batchCode: '',
    currencyCode: 'USD',
    customerUsageType: '',
    customerVendorCode: 'ABC',
    exemptNo: '',
    reconciled: false,
    purchaseOrderNo: '2017-04-13-001',
    salespersonCode: '',
    taxOverrideType: 'None',
    taxOverrideAmount: 0,
    taxOverrideReason: '',
    totalAmount: 90,
    totalExempt: 0,
    totalTax: 6.98,
    totalTaxable: 90,
    totalTaxCalculated: 6.98,
    adjustmentReason: 'PriceAdjusted',
    adjustmentDescription: 'Price dropped before shipping',
    locked: false,
    region: 'CA',
    country: 'US',
    version: 2,
    softwareVersion: '16.12.4.4',
    originAddressId: 742647614,
    destinationAddressId: 742647614,
    exchangeRateEffectiveDate: '2017-04-13',
    exchangeRate: 1,
    isSellerImporterOfRecord: false,
    description: 'Yarn',
    modifiedDate: '2017-04-13T23:50:31.387',
    modifiedUserId: 7097,
    taxDate: '2017-04-13T00:00:00',
    lines: [
      {
        id: 10528960651052896065,
        transactionId: 289451438,
        lineNumber: '1',
        boundaryOverrideId: 0,
        customerUsageType: '',
        description: 'Yarn',
        destinationAddressId: 742647614,
        originAddressId: 742647614,
        discountAmount: 0,
        exemptAmount: 0,
        exemptCertId: 0,
        exemptNo: '',
        isItemTaxable: true,
        isSSTP: false,
        itemCode: 'Y0001',
        lineAmount: 90,
        quantity: 1,
        ref1: '',
        ref2: '',
        reportingDate: '2017-04-13',
        revAccount: '',
        sourcing: 'Mixed',
        tax: 6.98,
        taxableAmount: 90,
        taxCalculated: 6.98,
        taxCode: 'PS081282',
        taxCodeId: 38007,
        taxDate: '2017-04-13',
        taxEngine: '',
        taxOverrideType: 'None',
        taxOverrideAmount: 0,
        taxOverrideReason: '',
        taxIncluded: false,
        details: [
          {
            id: 1911636544,
            transactionLineId: 1052896065,
            transactionId: 289451438,
            addressId: 742647614,
            country: 'US',
            region: 'CA',
            stateFIPS: '06',
            exemptAmount: 0,
            exemptReasonId: 4,
            inState: true,
            jurisCode: '06',
            jurisName: 'CALIFORNIA',
            jurisdictionId: 5000531,
            signatureCode: 'AGAM',
            stateAssignedNo: '',
            jurisType: 'STA',
            nonTaxableAmount: 0,
            nonTaxableRuleId: 0,
            nonTaxableType: 'RateRule',
            rate: 0.06,
            rateRuleId: 1343430,
            rateSourceId: 3,
            serCode: ' ',
            sourcing: 'Origin',
            tax: 5.4,
            taxableAmount: 90,
            taxType: 'Sales',
            taxName: 'CA STATE TAX',
            taxAuthorityTypeId: 45,
            taxRegionId: 2127863,
            taxCalculated: 5.4,
            taxOverride: 0,
            rateType: 'General',
            rateTypeCode: 'G',
            taxableUnits: 90,
            nonTaxableUnits: 0,
            exemptUnits: 0,
            unitOfBasis: 'PerCurrencyUnit'
          },
          {
            id: 19116365451911636545,
            transactionLineId: 1052896065,
            transactionId: 289451438,
            addressId: 742647614,
            country: 'US',
            region: 'CA',
            stateFIPS: '06',
            exemptAmount: 0,
            exemptReasonId: 4,
            inState: true,
            jurisCode: '059',
            jurisName: 'ORANGE',
            jurisdictionId: 267,
            signatureCode: 'AHXU',
            stateAssignedNo: '',
            jurisType: 'CTY',
            nonTaxableAmount: 0,
            nonTaxableRuleId: 0,
            nonTaxableType: 'RateRule',
            rate: 0.0025,
            rateRuleId: 1316638,
            rateSourceId: 3,
            serCode: ' ',
            sourcing: 'Origin',
            tax: 0.23,
            taxableAmount: 90,
            taxType: 'Sales',
            taxName: 'CA COUNTY TAX',
            taxAuthorityTypeId: 45,
            taxRegionId: 2127863,
            taxCalculated: 0.23,
            taxOverride: 0,
            rateType: 'General',
            rateTypeCode: 'G',
            taxableUnits: 90,
            nonTaxableUnits: 0,
            exemptUnits: 0,
            unitOfBasis: 'PerCurrencyUnit'
          },
          {
            id: 1911636546,
            transactionLineId: 1052896065,
            transactionId: 289451438,
            addressId: 742647614,
            country: 'US',
            region: 'CA',
            stateFIPS: '06',
            exemptAmount: 0,
            exemptReasonId: 4,
            inState: true,
            jurisCode: 'EMAZ0',
            jurisName: 'ORANGE COUNTY DISTRICT TAX SP',
            jurisdictionId: 2001061425,
            signatureCode: 'EMAZ',
            stateAssignedNo: '037',
            jurisType: 'STJ',
            nonTaxableAmount: 0,
            nonTaxableRuleId: 0,
            nonTaxableType: 'RateRule',
            rate: 0.005,
            rateRuleId: 1316666,
            rateSourceId: 3,
            serCode: ' ',
            sourcing: 'Destination',
            tax: 0.45,
            taxableAmount: 90,
            taxType: 'Sales',
            taxName: 'CA SPECIAL TAX',
            taxAuthorityTypeId: 45,
            taxRegionId: 2127863,
            taxCalculated: 0.45,
            taxOverride: 0,
            rateType: 'General',
            rateTypeCode: 'G',
            taxableUnits: 90,
            nonTaxableUnits: 0,
            exemptUnits: 0,
            unitOfBasis: 'PerCurrencyUnit'
          },
          {
            id: 1911636547,
            transactionLineId: 1052896065,
            transactionId: 289451438,
            addressId: 742647614,
            country: 'US',
            region: 'CA',
            stateFIPS: '06',
            exemptAmount: 0,
            exemptReasonId: 4,
            inState: true,
            jurisCode: 'EMTN0',
            jurisName: 'ORANGE CO LOCAL TAX SL',
            jurisdictionId: 2001061784,
            signatureCode: 'EMTN',
            stateAssignedNo: '30',
            jurisType: 'STJ',
            nonTaxableAmount: 0,
            nonTaxableRuleId: 0,
            nonTaxableType: 'RateRule',
            rate: 0.01,
            rateRuleId: 1316670,
            rateSourceId: 3,
            serCode: ' ',
            sourcing: 'Origin',
            tax: 0.9,
            taxableAmount: 90,
            taxType: 'Sales',
            taxName: 'CA SPECIAL TAX',
            taxAuthorityTypeId: 45,
            taxRegionId: 2127863,
            taxCalculated: 0.9,
            taxOverride: 0,
            rateType: 'General',
            rateTypeCode: 'G',
            taxableUnits: 90,
            nonTaxableUnits: 0,
            exemptUnits: 0,
            unitOfBasis: 'PerCurrencyUnit'
          }
        ],
        lineLocationTypes: [
          {
            documentLineLocationTypeId: 589536700,
            documentLineId: 1052896065,
            documentAddressId: 742647614,
            locationTypeCode: 'PointOfOrderOrigin'
          },
          {
            documentLineLocationTypeId: 589536699,
            documentLineId: 1052896065,
            documentAddressId: 742647614,
            locationTypeCode: 'PointOfOrderAcceptance'
          },
          {
            documentLineLocationTypeId: 589536698,
            documentLineId: 1052896065,
            documentAddressId: 742647614,
            locationTypeCode: 'ShipTo'
          },
          {
            documentLineLocationTypeId: 589536697,
            documentLineId: 1052896065,
            documentAddressId: 742647614,
            locationTypeCode: 'ShipFrom'
          }
        ],
        parameters: {}
      }
    ],
    addresses: [
      {
        id: 742647614,
        transactionId: 289451438,
        boundaryLevel: 'Zip5',
        line1: '123 Main Street',
        line2: '',
        line3: '',
        city: 'Irvine',
        region: 'CA',
        postalCode: '92615',
        country: 'US',
        taxRegionId: 2127863,
        latitude: '33.657808',
        longitude: '-117.968489'
      }
    ],
    locationTypes: [
      {
        documentLocationTypeId: 360274,
        documentId: 289451438,
        documentAddressId: 742647614,
        locationTypeCode: 'PointOfOrderOrigin'
      },
      {
        documentLocationTypeId: 360273,
        documentId: 289451438,
        documentAddressId: 742647614,
        locationTypeCode: 'PointOfOrderAcceptance'
      },
      {
        documentLocationTypeId: 360272,
        documentId: 289451438,
        documentAddressId: 742647614,
        locationTypeCode: 'ShipTo'
      },
      {
        documentLocationTypeId: 360271,
        documentId: 289451438,
        documentAddressId: 742647614,
        locationTypeCode: 'ShipFrom'
      }
    ],
    summary: [
      {
        country: 'US',
        region: 'CA',
        jurisType: 'State',
        jurisCode: '06',
        jurisName: 'CALIFORNIA',
        taxAuthorityType: 45,
        stateAssignedNo: '',
        taxType: 'Sales',
        taxName: 'CA STATE TAX',
        rateType: 'General',
        taxable: 90,
        rate: 0.06,
        tax: 5.4,
        taxCalculated: 5.4,
        nonTaxable: 0,
        exemption: 0
      },
      {
        country: 'US',
        region: 'CA',
        jurisType: 'County',
        jurisCode: '059',
        jurisName: 'ORANGE',
        taxAuthorityType: 45,
        stateAssignedNo: '',
        taxType: 'Sales',
        taxName: 'CA COUNTY TAX',
        rateType: 'General',
        taxable: 90,
        rate: 0.0025,
        tax: 0.23,
        taxCalculated: 0.23,
        nonTaxable: 0,
        exemption: 0
      },
      {
        country: 'US',
        region: 'CA',
        jurisType: 'Special',
        jurisCode: 'EMTN0',
        jurisName: 'ORANGE CO LOCAL TAX SL',
        taxAuthorityType: 45,
        stateAssignedNo: '30',
        taxType: 'Sales',
        taxName: 'CA SPECIAL TAX',
        rateType: 'General',
        taxable: 90,
        rate: 0.01,
        tax: 0.9,
        taxCalculated: 0.9,
        nonTaxable: 0,
        exemption: 0
      },
      {
        country: 'US',
        region: 'CA',
        jurisType: 'Special',
        jurisCode: 'EMAZ0',
        jurisName: 'ORANGE COUNTY DISTRICT TAX SP',
        taxAuthorityType: 45,
        stateAssignedNo: '037',
        taxType: 'Sales',
        taxName: 'CA SPECIAL TAX',
        rateType: 'General',
        taxable: 90,
        rate: 0.005,
        tax: 0.45,
        taxCalculated: 0.45,
        nonTaxable: 0,
        exemption: 0
      }
    ],
    parameters: {}
  };