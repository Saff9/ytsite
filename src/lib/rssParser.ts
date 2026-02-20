export function parseRss(xml: string): any {
  // Simple XML to JSON conversion using xml-js (already installed)
  const { xml2js } = require('xml-js');
  const result = xml2js(xml, { compact: true, ignoreDeclaration: true });
  return result;
}
