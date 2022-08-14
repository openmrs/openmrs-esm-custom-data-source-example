/**
 * This is the entrypoint file of the custom data source. A custom data source is just an ES Module loaded by the
 * app shell by the import map. However, it is not a standard frontend module, so it should not have a export
 * named `setupOpenMRS`. Apart from that restriction, pretty much any named export may be used. These exports will
 * be made available in the form.
 */

/**
 * Note that although we don't have React here, we can still use functions from esm-framework and interact with
 * the normal frontend APIs.
 */
import { openmrsFetch } from "@openmrs/esm-framework";

/**
 * We don't always have to export an object, but there can be some difficulties on the form side if your default
 * export is a function, so wrapping things in an object shouldn't be too diffcult.
 *
 * On the form app side, you'd have a configuration like:
 * ```json
 * {
 *  "@openmrs/esm-form-app": {
 *    "customDataSources": [{
 *      "name": "custom-patient",
 *      "moduleName": "@openmrs/esm-custom-data-source-example"
 *    }]
 *  }
 * }
 * ```
 */
export default {
  getPatient: (uuid: string) => {
    return openmrsFetch(`/ws/fhir2/R4/Patient/${uuid}`);
  },
};

/**
 * You can also use named exports like this with a configuration like this:
 * ```json
 * {
 *  "@openmrs/esm-form-app": {
 *    "customDataSources": [{
 *      "name": "custom-patient",
 *      "moduleName": "@openmrs/esm-custom-data-source-example",
 *      "moduleExport": "patientDataSource"
 *    }]
 *  }
 * }
 * ```
 */
export const patientDataSource = {
  getPatient: (uuid: string) => {
    return openmrsFetch(`/ws/fhir2/R4/Patient/${uuid}`);
  },
};
