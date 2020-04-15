'use strict';
const fs = require('fs');

function generateDescription(doclet) {
  const title = `## ${doclet.name}\n`;
  const params = doclet.params || [];

  const exampleName = doclet.name == 'AvaTaxClient' ? `${doclet.name}` : `client.${doclet.name}`;
  const example = `- \`${exampleName}(${
    params.length ?
      `{ ${params.map(param => param.name).join(', ')} }` :
      ''
    })\``;

  const source = `[Source: ${doclet.meta.filename} Line: ${doclet.meta.lineno}](/lib/${doclet.meta.filename}#L${doclet.meta.lineno})`

  const paramList = params.length ? params.reduce((memo, param) => {
    return `${memo}- **${param.name}:** ${param.description}\n`;
  }, '### Arguments\n') : '';

  return `${title}\n\n  ${source}\n\n ${example} \n\n ${paramList} \n\n  ${doclet.description}\n`

}



exports.publish = function (data) {
  // do stuff here to generate your output files
  const listOfMethods = []
  data().each(doclet => {

    if (doclet.longName === 'AvaTaxClient') {
      listOfMethods.push(doclet)
    }

    if (doclet.meta && doclet.meta.code) {
      if ((doclet.name !== 'exports' && doclet.meta.code.type === 'MethodDefinition')) {
        listOfMethods.push(doclet)
      }
    }

  });
  const methodIndex = listOfMethods.reduce((memo, doclet) => {
    return `${memo}- [${doclet.name}](#${doclet.name.toLowerCase()})\n`
  }, '# Methods \n');

  const methodDescription = listOfMethods.reduce((memo, mthd) => {
    return `${memo} ${generateDescription(mthd)}`

  }, '\n')
  const output = `${methodIndex} ${methodDescription}`;
  fs.writeFileSync(`${__dirname}/../api.md`, output)
};