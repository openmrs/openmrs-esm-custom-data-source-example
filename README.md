![Node.js CI](https://github.com/openmrs/openmrs-esm-template-app/workflows/Node.js%20CI/badge.svg)

# OpenMRS ESM Custom Data Source Example

This repository is an example of a custom data source for the AMPATH form engine in OpenMRS 3. A data source is simply any Javascript object that is exposed to a form under a certain name. Coordination of the API between a data source and the consuming form needs to be coordinated by whoever is implementing the form.

## Running this code

```sh
yarn  # to install dependencies
yarn start  # to run the dev server
```

Not that custom data sources have no UI, so if this works, you're generally, just going to be looking at the normal OpenMRS application. However, if you want to verify that it works, you should be able to discover the module by using the Console in your browser:

```js
const myDataSource = (await window._openmrs_esm_custom_data_source_example.get("./start"))();
```

Now `myDataSource` will be pointing to your module. You can expose it to esm-form-app by using the following config:

```json
{
  "@openmrs/esm-form-app": {
    "customDataSources": [{
      "name": "custom-patient",
      "moduleName": "@openmrs/esm-custom-data-source-example"
    }]
  }
}
```

Now inside your form, you can configure your question's data source to use the `"custom-patient"` data source and access it's properties inside your expressions.

## Integrating it into your application

Please see [Creating a Microfrontend](https://openmrs.github.io/openmrs-esm-core/#/main/creating_a_microfrontend).
